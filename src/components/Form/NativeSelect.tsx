import React, { FC } from 'react';

import styles from './Select.module.scss';

interface Props {
  label?: string;
  options: any[];
  value?: any;
  defaultValue?: any;
  onChange?: (e: any) => void;
}

const NativeSelect: FC<Props> = (props) => {
  const { options, ...restProps } = props;
  const { value, defaultValue } = restProps;
  const hasValue: boolean = options.map((option) => option.value).includes(value || defaultValue);
  const classNames: string = [styles.nativeSelect, !hasValue ? styles.empty : ''].join(' ');
  return (
    <div className={classNames}>
      <label>{props.label}</label>
      <select {...restProps}>
        <option value="">{''}</option>
        {options &&
          options.map((option: any, index: number) => (
            <option {...option} value={option.value} key={index}>
              {option.value}
            </option>
          ))}
      </select>
    </div>
  );
};

export default NativeSelect;
