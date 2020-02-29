import { RadioProps } from 'antd/lib/radio';
import React, { FC } from 'react';
import RadioButton from '../RadioButton/RadioButton';

import { Text } from '../Typography';
import styles from './ThemedRadio.module.scss';

interface Props extends RadioProps {
  checked?: boolean;
  label?: string;
  theme: string;
  onSelect?: () => void;
}

const ThemedRadio: FC<Props> = (props) => {
  const { checked, label, theme } = props;

  return (
    <RadioButton {...props} className={[styles.radio, checked ? styles[theme] : ''].join(' ')}>
      <Text>{label}</Text>
    </RadioButton>
  );
};

export default ThemedRadio;
