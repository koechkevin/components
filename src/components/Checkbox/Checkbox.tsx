import { Checkbox as AntdCheckBox } from 'antd';
import { CheckboxProps } from 'antd/lib/checkbox';
import React, { FC } from 'react';

import styles from './Checkbox.module.scss';

interface Props extends CheckboxProps {
  name?: string;
  button?: boolean;
}

const Checkbox: FC<Props> = (props) => {
  const { className, button, ...restProps } = props;
  const classNames: string = [
    styles.checkBox,
    className ? className : '',
    button ? styles.checkboxButton : '',
  ].join(' ');

  return <AntdCheckBox className={classNames} {...restProps} />;
};

export default Checkbox;
