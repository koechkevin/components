import { Radio as AntRadio } from 'antd';
import { RadioProps } from 'antd/lib/radio';
import React, { FC, PureComponent } from 'react';

import styles from './RadioButton.module.scss';

interface Props extends RadioProps {
  checked?: boolean;
  label?: string;
  onSelect?: () => void;
}

export const Radio: FC<RadioProps> = (props) => {
  const { className, ...restProps } = props;
  const classNames = [styles.radioButton, className].join(' ');

  return <AntRadio className={classNames} {...restProps} />;
};

class RadioButton extends PureComponent<Props> {
  public render = () => <Radio {...this.props} />;
}

export default RadioButton;
