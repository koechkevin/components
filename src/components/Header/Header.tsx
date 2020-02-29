import { Layout } from 'antd';
import React, { CSSProperties, FC, ReactNode } from 'react';

import styles from './Header.module.scss';

interface Props {
  style?: CSSProperties;
  className?: string;
  children?: ReactNode;
}

const Header: FC<Props> = (props) => {
  const { className, style, children } = props;
  const cls = [styles.header, className ? className : ''].join(' ');

  return (
    <Layout.Header style={style} className={cls}>
      {children}
    </Layout.Header>
  );
};

export default Header;
