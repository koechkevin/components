import { Typography } from 'antd';
import React, { FC } from 'react';

import styles from './Typography.module.scss';

export const Title: FC<any> = (props) => {
  const { className } = props;
  const cls = [styles.title, className || ''].join(' ');

  return <Typography.Title {...props} className={cls} />;
};

export const Paragraph: FC<any> = (props) => {
  const { className } = props;
  const cls = [styles.paragraph, className || ''].join(' ');

  return <Typography.Paragraph {...props} className={cls} />;
};

export const Text: FC<any> = (props) => {
  const { className } = props;
  const cls = [styles.text, className || ''].join(' ');

  return <Typography.Text {...props} className={cls} />;
};
