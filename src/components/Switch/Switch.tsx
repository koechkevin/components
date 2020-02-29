import { Switch as AntdSwitch } from 'antd';
import { SwitchProps } from 'antd/lib/switch';
import React from 'react';

import styles from './Switch.module.scss';

const Switch: React.FC<SwitchProps> = (props) => {
  const { className, ...otherProps } = props;
  const classNames = [styles.switch, className ? className : ''].join(' ');

  return <AntdSwitch className={classNames} {...otherProps} />;
};

export default Switch;
