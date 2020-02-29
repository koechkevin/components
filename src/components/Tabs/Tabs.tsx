import { Tabs as AntTabs } from 'antd';
import { TabsProps } from 'antd/lib/tabs';
import React, { FC } from 'react';

import styles from './Tabs.module.scss';

const Tabs: FC<TabsProps> = (props) => {
  const { children, className, ...restProps } = props;
  const classNames: string = [styles.tabs, className].join(' ');

  return (
    <AntTabs className={classNames} {...restProps} animated={{ tabPane: false, inkBar: true }}>
      {children}
    </AntTabs>
  );
};

export default Tabs;
