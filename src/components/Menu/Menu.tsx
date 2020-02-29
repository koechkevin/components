import { faChevronRight } from '@fortawesome/pro-regular-svg-icons';
import { Col, Menu as AntdMenu, Row } from 'antd';
import React, { FC } from 'react';

import { Icon } from '../Icon';
import { IconMenuProps, MenuProps } from './interface';

import styles from './Menu.module.scss';

export const Menu: FC<MenuProps> = (props) => {
  const { width, className, ...restProps } = props;
  const cls = [styles.menu, className || ''].join(' ');

  return (
    <AntdMenu
      className={cls}
      style={{ width: width || 240 }}
      expandIcon={<Icon className={styles.titleIcon} icon={faChevronRight} />}
      {...restProps}
    />
  );
};

export const SubMenu: FC<any> = (props) => {
  const { popupClassName, ...restProps } = props;
  const cls = [styles.menu, popupClassName || ''].join(' ');
  return <AntdMenu.SubMenu popupClassName={cls} {...restProps} />;
};

export const IconMenuItem: FC<IconMenuProps> = (props) => {
  const { icon } = props;

  return (
    <Row type="flex" align="middle">
      {icon && <Col style={{ marginRight: 16 }}>{icon}</Col>}
      <span>{props.children}</span>
    </Row>
  );
};
