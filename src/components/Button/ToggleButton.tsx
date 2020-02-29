import React, { CSSProperties, FC, useState } from 'react';

import styles from './ToggleButton.module.scss';

interface Props {
  style?: CSSProperties;
  checked?: boolean;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
}

export const ToggleButton: FC<Props> = (props) => {
  const { checked, className, disabled, onClick, style } = props;
  const [isChecked, setIsChecked] = useState(checked);
  const classNames = [
    styles.toggle,
    isChecked ? styles.toggleOn : styles.toggleOff,
    className,
    disabled ? styles.disabled : '',
  ].join(' ');
  const click = (e: any) => {
    e.preventDefault();
    setIsChecked(!isChecked);
    onClick && onClick();
  };

  return (
    <button onClick={click} className={classNames} style={style}>
      &times;
    </button>
  );
};

export default ToggleButton;
