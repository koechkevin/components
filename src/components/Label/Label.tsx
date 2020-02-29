import React, { FC } from 'react';

import styles from './Label.module.scss';

export interface Props {
  leading?: React.ReactNode;
  trailing?: React.ReactNode;
  className?: string;
  color?: string;
  background?: string;
  style?: React.CSSProperties;
}

const Label: FC<Props> = (props) => {
  const { children, style, className, color, ...restProps } = props;
  const classNames: string = [styles.label, className ? className : ''].join(' ');

  return (
    <span
      style={{
        color: props.color,
        height: 32,
        borderRadius: 4,
        background: props.background,
        paddingLeft: props.leading ? 0 : 8,
        paddingRight: props.trailing ? 0 : 8,
        ...style,
      }}
      className={classNames}
      {...restProps}
    >
      {props.leading && props.leading}
      {children}
      {props.trailing && props.trailing}
    </span>
  );
};

export default Label;
