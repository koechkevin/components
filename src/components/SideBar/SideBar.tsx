import { Layout } from 'antd';
import { CollapseType } from 'antd/lib/layout/Sider';
import React, { CSSProperties, FC } from 'react';

import styles from './SideBar.module.scss';

const { Sider } = Layout;

interface Props {
  style?: CSSProperties;
  className?: string;
  width?: number | 200;
  collapsed?: boolean;
  theme?: 'light' | 'dark';
  onCollapse?: (collapsed: boolean, type: CollapseType) => void;
}

export const SideBar: FC<Props> = (props) => {
  const { theme, width, onCollapse, collapsed, children, className, ...restProps } = props;
  const cls = [styles.sideBar, className ? className : ''].join(' ');

  return (
    <Sider
      collapsible
      theme={theme}
      width={width}
      trigger={null}
      className={cls}
      collapsedWidth={0}
      collapsed={collapsed}
      onCollapse={onCollapse}
      {...restProps}
    >
      {children}
    </Sider>
  );
};

export default SideBar;
