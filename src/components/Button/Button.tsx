import { faSpinnerThird } from '@fortawesome/pro-duotone-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button as AntdButton } from 'antd';
import { ButtonProps } from 'antd/lib/button';
import React, { FC } from 'react';

import styles from './Button.module.scss';

const Button: FC<ButtonProps> = (props) => {
  const { loading, children, className, ...resetProps } = props;
  const classNames = [styles.button, loading ? styles.loading : '', className].join(' ');

  return (
    <AntdButton className={classNames} {...resetProps}>
      {loading ? (
        <FontAwesomeIcon style={{ fontSize: 22, animationDuration: '1.2s' }} icon={faSpinnerThird} spin />
      ) : (
        children
      )}
    </AntdButton>
  );
};

export default Button;
