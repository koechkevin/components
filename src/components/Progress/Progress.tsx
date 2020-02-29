import { Progress as AntdProgress } from 'antd';
import { ProgressProps } from 'antd/lib/progress';
import React, { FC } from 'react';

import styles from './Progress.module.scss';

interface Props extends ProgressProps {
  square?: boolean;
}

export const Progress: FC<Props> = (props) => {
  const { square, className, ...restProps } = props;
  const cls = [className, styles.progress, square ? styles.square : ''].join(' ');

  return <AntdProgress className={cls} {...restProps} />;
};

export default Progress;
