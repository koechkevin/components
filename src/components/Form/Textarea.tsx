import { Form, Input as AntdInput } from 'antd';
import { FormItemProps } from 'antd/lib/form';
import { TextAreaProps } from 'antd/lib/input/TextArea';
import React, { ChangeEvent, CSSProperties, PureComponent } from 'react';

import styles from './Input.module.scss';

const { Item } = Form;

interface Props extends TextAreaProps, FormItemProps {
  data?: any;
  value?: any;
  label?: string;
  hasFeedback?: boolean;
  style?: CSSProperties;
  className?: string;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

export class TextArea extends PureComponent<Props> {
  public render() {
    const {
      label,
      style,
      data,
      help,
      className,
      hasFeedback,
      validateStatus,
      required,
      wrapperCol,
      labelCol,
      ...restProps
    } = this.props;
    const { value } = restProps;
    const hasFilled: boolean = typeof value === 'string' && value.trim() !== '';
    const hasSuccess: boolean = validateStatus === 'success';
    const hasError: boolean = validateStatus === 'error';
    const classNames = [
      styles.input,
      hasFilled ? styles.hasFilled : '',
      hasFilled ? styles.textAreaFilled : '',
      hasSuccess ? styles.hasSuccess : '',
      hasError ? styles.hasError : '',
      this.props.disabled ? styles.isDisabled : '',
      this.props.prefix ? styles.hasPrefix : '',
      className,
    ].join(' ');

    return (
      <Item
        label={label}
        style={style}
        help={help}
        labelCol={labelCol}
        required={required}
        className={classNames}
        wrapperCol={wrapperCol}
        hasFeedback={hasFeedback}
        validateStatus={validateStatus}
      >
        <AntdInput.TextArea {...restProps} />
      </Item>
    );
  }
}

export default TextArea;
