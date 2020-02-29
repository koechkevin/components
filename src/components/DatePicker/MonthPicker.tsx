import { faCalendarAlt as fasFaCalendarAlt } from '@fortawesome/pro-regular-svg-icons';
import { Dropdown } from 'antd';
import { InputProps } from 'antd/lib/input';
import React, { FC, PureComponent, useEffect, useState } from 'react';

import { Input } from '../Form';
import { Icon } from '../Icon';

import styles from './MonthPicker.module.scss';

interface Props extends InputProps {
  label?: string;
  value?: string;
  disabled?: boolean;
  visible?: boolean;
  inputProps?: any;
  dropdownProps?: any;
  width?: string | number;
  displayLength?: number;
  onSelectMonth?: (month: string) => void;
}

interface DropdownProps {
  selected: string;
  displayLength?: number;
  onSelectMonth: (month: string) => void;
}

const months: string[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const MonthDropdown: FC<DropdownProps> = (props) => {
  const { displayLength, onSelectMonth, selected } = props;
  const monthValues = displayLength ? months.map((e: string) => e.substring(0, displayLength)) : months;
  return (
    <div className={styles.picker}>
      {monthValues.map((month: string) => (
        <div
          key={month}
          id="month"
          onClick={() => onSelectMonth(month)}
          className={`${styles.calendarMonth} ${month.toLowerCase() === selected.toLowerCase() ? styles.selected : ''}`}
        >
          {month.substring(0, 3)}
        </div>
      ))}
    </div>
  );
};

export const Picker: React.FC<Props> = (props) => {
  const {
    label,
    value = '',
    onChange,
    disabled,
    displayLength,
    onSelectMonth,
    dropdownProps,
    inputProps,
    onBlur,
    visible,
  } = props;

  const [selected, setSelected] = useState<string>(value);
  const [showDropdown, setShowDropdown] = useState<boolean>(!!visible);

  useEffect(() => {
    setSelected(value);
  }, [value]);

  useEffect(() => {
    setShowDropdown(!!visible);
  }, [visible]);

  const selectMonth: (month: string) => void = (month: string) => {
    setSelected(month);
    onSelectMonth && onSelectMonth(month);
    setShowDropdown(false);
  };

  const handleChange = (e: any) => {
    setSelected(e.target.value);
    onChange && onChange(e);
  };

  return (
    <>
      <Dropdown
        trigger={['click']}
        disabled={disabled}
        getPopupContainer={() => document.getElementById('month-picker')}
        onVisibleChange={(visible: boolean) => setShowDropdown(visible)}
        visible={showDropdown}
        {...dropdownProps}
        overlay={<MonthDropdown selected={selected} displayLength={displayLength} onSelectMonth={selectMonth} />}
      >
        <Input
          label={label}
          onBlur={onBlur}
          value={selected}
          disabled={disabled}
          onChange={handleChange}
          prefix={<Icon className={styles.icon} icon={fasFaCalendarAlt} />}
          {...inputProps}
        />
      </Dropdown>
      <span id="month-picker" />
    </>
  );
};

class MonthPicker extends PureComponent<Props> {
  public render = () => <Picker {...this.props} />;
}

export default MonthPicker;
