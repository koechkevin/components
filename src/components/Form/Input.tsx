import { Form, Input as AntdInput } from 'antd';
import { FormItemProps } from 'antd/lib/form';
import { InputProps } from 'antd/lib/input';
import React, { ChangeEvent, PureComponent, ReactNode } from 'react';

import styles from './Input.module.scss';

const { Item } = Form;

interface Props extends InputProps, FormItemProps {
  data?: any;
  password?: boolean;
  suffix?: string | ReactNode;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export enum InputTypes {
  TEXT = 'text',
  PASSWORD = 'password',
  EMAIL = 'email',
  NUMBER = 'number',
}

export class Input extends PureComponent<Props> {
  public render() {
    const {
      label,
      style,
      data,
      help,
      password,
      required,
      labelCol,
      className,
      wrapperCol,
      hasFeedback,
      validateStatus,
      ...restProps
    } = this.props;
    const { value } = restProps;
    const hasFilled: boolean = typeof value === 'string' && value.trim() !== '';
    const hasSuccess: boolean = validateStatus === 'success';
    const hasError: boolean = validateStatus === 'error';
    const classNames = [
      styles.input,
      hasFilled ? styles.hasFilled : '',
      hasSuccess ? styles.hasSuccess : '',
      hasError ? styles.hasError : '',
      this.props.disabled ? styles.isDisabled : '',
      this.props.prefix ? styles.hasPrefix : '',
      this.props.suffix ? styles.hasSuffix : '',
      className,
    ].join(' ');

    if (password) {
      return (
        <Item
          help={help}
          label={label}
          style={style}
          labelCol={labelCol}
          required={required}
          className={classNames}
          wrapperCol={wrapperCol}
          hasFeedback={hasFeedback}
          validateStatus={validateStatus}
        >
          <AntdInput.Password {...restProps} />
        </Item>
      );
    }

    return (
      <Item
        help={help}
        label={label}
        style={style}
        labelCol={labelCol}
        required={required}
        className={classNames}
        wrapperCol={wrapperCol}
        hasFeedback={hasFeedback}
        validateStatus={validateStatus}
      >
        <AntdInput {...restProps} />
      </Item>
    );
  }
}

export default Input;
