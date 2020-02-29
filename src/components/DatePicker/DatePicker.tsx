import { faCalendarAlt as fasFaCalendarAlt } from '@fortawesome/pro-regular-svg-icons';
import { faCaretLeft, faCaretRight } from '@fortawesome/pro-solid-svg-icons';
import { Col, Dropdown, Row } from 'antd';
import moment from 'moment';
import React, { ChangeEvent, useEffect, useState } from 'react';

import { daysOfTheWeek, months } from '../../utils/constants';
import { Input } from '../Form';
import { Icon } from '../Icon';

import styles from './DatePicker.module.scss';

interface Props {
  label?: string;
  disabled?: boolean;
  help?: string;
  format: string;
  value?: string;
  dropdownProps?: any;
  inputProps?: any;
  onBlur?: any;
  validateStatus?: 'error' | 'success' | 'warning' | '';
  disabledDate?: (date: moment.Moment) => boolean;
  onSelectDate?: (date: moment.Moment) => void;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

interface DropdownProps {
  format: string;
  selected?: moment.Moment;
  onSelectDate?: (date: moment.Moment) => void;
  disabledDate?: (date: moment.Moment) => boolean;
}

export const dates: (month: number, year: number) => moment.Moment[] = (month: number, year: number) => {
  let monthDates: moment.Moment[] = [moment(`${month}/01/${year}`, 'MM/DD/YYYY')];

  for (let i = 2; i <= 50; i++) {
    monthDates.push(moment(monthDates[monthDates.length - 1].toDate().getTime() + 60 * 60 * 24 * 1000));
  }

  while (monthDates[0].day()) {
    monthDates = [moment(monthDates[0].toDate().getTime() - 60 * 60 * 24 * 1000), ...monthDates];
  }

  return monthDates;
};

export const DateDropdown: React.FC<DropdownProps> = (props) => {
  const { selected, disabledDate, format, onSelectDate } = props;

  const [currentMonth, setCurrentMonth] = useState(
    selected ? selected.toDate().getMonth() + 1 : new Date().getMonth() + 1,
  );
  const [currentYear, setCurrentYear] = useState(selected ? selected.toDate().getFullYear() : new Date().getFullYear());

  useEffect(() => {
    const date = selected ? selected.toDate() : new Date();
    setCurrentMonth(date.getMonth() + 1 || new Date().getMonth() + 1);
    setCurrentYear(date.getFullYear() || new Date().getFullYear());
  }, [selected]);

  const onClickBack = () => {
    const date = new Date(
      moment(`${currentMonth}/01/${currentYear}`, 'MM/DD/YYYY')
        .toDate()
        .getTime() -
        60 * 60 * 24 * 1000,
    );
    setCurrentMonth(date.getMonth() + 1);
    setCurrentYear(date.getFullYear());
  };

  const onClickForward = () => {
    const date = new Date(
      moment(`${currentMonth}/28/${currentYear}`, 'MM/DD/YYYY')
        .toDate()
        .getTime() +
        15 * 60 * 60 * 24 * 1000,
    );
    setCurrentMonth(date.getMonth() + 1);
    setCurrentYear(date.getFullYear());
  };

  const currentDateClassName = (momentDate: moment.Moment) =>
    momentDate.format(format) === moment(new Date()).format(format) ? styles.current : '';

  const selectedDateClassName = (momentDate: moment.Moment) =>
    selected && selected.format(format) === momentDate.format(format) ? styles.selected : '';

  const currentMonthClassName = (momentDate: moment.Moment) =>
    momentDate.toDate().getMonth() + 1 !== currentMonth ? styles.inactive : '';

  const disabledDateClassName = (momentDate: moment.Moment) =>
    disabledDate && disabledDate(momentDate) ? styles.disabled : '';

  return (
    <Row className={styles.dropdown}>
      <Row type="flex" align="middle" justify="space-between" className={styles.head}>
        <Col>
          <Icon hover id="back" icon={faCaretLeft} onClick={onClickBack} />
        </Col>
        <Col>{`${months[currentMonth - 1]} ${currentYear}`}</Col>
        <Col>
          <Icon hover id="forward" icon={faCaretRight} onClick={onClickForward} />
        </Col>
      </Row>
      <div className={styles.body}>
        {daysOfTheWeek.map((day: string) => (
          <div className={styles.day} key={day}>
            {day.toUpperCase().substring(0, 3)}
          </div>
        ))}
        {dates(currentMonth, currentYear).map(
          (momentDate: moment.Moment, i: number) =>
            i < 42 && (
              <div
                className={`${styles.date} ${currentDateClassName(momentDate)} ${selectedDateClassName(
                  momentDate,
                )} ${currentMonthClassName(momentDate)}
                ${disabledDateClassName(momentDate)}
                `}
                id="date"
                onClick={() => {
                  if (!disabledDate || !disabledDate(momentDate)) {
                    onSelectDate && onSelectDate(momentDate);
                  }
                }}
                key={i}
              >
                {momentDate.toDate().getDate()}
              </div>
            ),
        )}
      </div>
    </Row>
  );
};

const DatePicker: React.FC<Props> = (props) => {
  const {
    value,
    label,
    format,
    onBlur,
    onChange,
    disabled,
    inputProps,
    onSelectDate,
    dropdownProps,
    disabledDate,
  } = props;
  const [inputValue, setInputValue] = useState<string | undefined>(value);
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  const selectDate = (date: moment.Moment) => {
    setInputValue(date.format(format));
    onSelectDate && onSelectDate(date);
    setDropdownOpen(false);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    onChange && onChange(e);
  };

  return (
    <>
      <Dropdown
        trigger={['click']}
        overlay={
          <DateDropdown
            format={format}
            disabledDate={disabledDate}
            onSelectDate={selectDate}
            selected={moment(inputValue, format)}
          />
        }
        disabled={disabled}
        visible={dropdownOpen}
        onVisibleChange={setDropdownOpen}
        getPopupContainer={() => document.getElementById('date-picker')}
        {...dropdownProps}
      >
        <Input
          label={label}
          onBlur={onBlur}
          value={inputValue}
          disabled={disabled}
          onChange={handleChange}
          prefix={<Icon className={styles.icon} icon={fasFaCalendarAlt} />}
          className={styles.input}
          {...inputProps}
        />
      </Dropdown>
      <span id="date-picker" />
    </>
  );
};

DatePicker.defaultProps = {
  format: 'MM/DD/YYYY',
};

export default DatePicker;
