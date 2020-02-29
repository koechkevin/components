import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { faCalendarAlt as fasFaCalendarAlt } from '@fortawesome/pro-regular-svg-icons';
import { Col, Dropdown, Row } from 'antd';
import { InputProps } from 'antd/lib/input';
import React, { PureComponent, useEffect, useState } from 'react';

import { Input } from '../Form';
import { Icon } from '../Icon';
import styles from './YearPicker.module.scss';

interface Props extends InputProps {
  label?: string;
  width?: string | number;
  disabled?: boolean;
  suffix?: React.ReactNode;
  minYear?: number;
  maxYear?: number;
  visible?: boolean;
  onSelectYear?: (year: number) => void;
  dropdownProps?: any;
  inputProps?: any;
}

interface YearProps {
  selected: string;
  minYear: number;
  maxYear: number;
  onSelectYear: (year: number) => void;
}

export const YearDropdown: React.FC<YearProps> = (props) => {
  const resolveStartYear = (number: number): number => Math.floor(number / 10) * 10;
  const { selected = '', onSelectYear, minYear, maxYear } = props;
  const [startYear, setStartYear] = useState(resolveStartYear(parseInt(selected, 10) || 2010));

  useEffect(() => {
    const selectedYear: number = parseInt(selected, 10);
    if (selectedYear && selectedYear >= minYear && selectedYear <= maxYear) {
      setStartYear(resolveStartYear(selectedYear));
    }
  }, [selected, minYear, maxYear]);

  return (
    <Row className={styles.panel}>
      <div className={styles.head}>
        <Col>
          <Icon
            id="back"
            icon={faCaretLeft}
            hover={minYear <= startYear - 10}
            onClick={() => {
              if (minYear <= startYear - 10) {
                setStartYear(resolveStartYear(startYear - 10));
              }
            }}
          />
        </Col>
        <Col>{`${startYear} - ${startYear + 11}`}</Col>
        <Col>
          <Icon
            id="forward"
            icon={faCaretRight}
            hover={startYear + 10 < maxYear}
            onClick={() => {
              if (startYear + 10 < maxYear) {
                setStartYear(resolveStartYear(startYear + 10));
              }
            }}
          />
        </Col>
      </div>
      <Row>
        <div className={styles.years}>
          {Array(12)
            .fill('')
            .map((each: any, index: number) => (
              <div
                key={index}
                id="year"
                onClick={() => onSelectYear(startYear + index)}
                className={`${styles.year} ${
                  selected.toString() === (startYear + index).toString() ? styles.selected : ''
                } ${startYear + index < minYear || startYear + index > maxYear ? styles.disabled : ''}`}
              >
                {startYear + index}
              </div>
            ))}
        </div>
      </Row>
    </Row>
  );
};

const Picker: React.FC<Props> = (props) => {
  const {
    label,
    value = '',
    disabled,
    onSelectYear,
    suffix,
    maxYear,
    minYear,
    dropdownProps,
    inputProps,
    onChange,
    visible,
    onBlur,
  } = props;

  const [showDropdown, setShowDropdown] = useState<boolean>(!!visible);
  const [inputValue, setInputValue] = useState<string>(value.toString());

  useEffect(() => {
    setInputValue(value.toString());
  }, [value]);

  useEffect(() => {
    setShowDropdown(!!visible);
  }, [visible]);

  const handleChange = (e: any) => {
    setInputValue(e.target.value);
    onChange && onChange(e);
  };

  const selectYear = (value: number) => {
    const year = value.toString();
    setInputValue(year);
    onSelectYear && onSelectYear(value);
    setShowDropdown(false);
  };

  return (
    <>
      <Dropdown
        disabled={disabled}
        overlay={
          <YearDropdown
            minYear={minYear || 1900}
            maxYear={maxYear || 2100}
            onSelectYear={selectYear}
            selected={inputValue}
          />
        }
        onVisibleChange={setShowDropdown}
        visible={showDropdown}
        trigger={['click']}
        getPopupContainer={() => document.getElementById('year-picker')}
        {...dropdownProps}
      >
        <Input
          disabled={disabled}
          prefix={<Icon className={styles.icon} icon={fasFaCalendarAlt} />}
          label={label}
          suffix={suffix}
          value={inputValue}
          minLength={4}
          maxLength={4}
          onChange={handleChange}
          onBlur={onBlur}
          {...inputProps}
        />
      </Dropdown>
      <span id="year-picker" />
    </>
  );
};

class YearPicker extends PureComponent<Props> {
  public render = () => <Picker {...this.props} />;
}

export default YearPicker;
