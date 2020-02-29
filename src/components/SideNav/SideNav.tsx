import { Col, Layout, Row } from 'antd';
import React, { CSSProperties, FC } from 'react';
import { NavLink } from 'react-router-dom';

import { Avatar } from '../Avatar';
import { Tooltip } from '../Tooltip';
import styles from './SideNav.module.scss';

const { Sider } = Layout;

export interface MenuItem {
  icon: string;
  name: string;
  path?: any;
  activePath?: string;
  avatarColor: string;
}

interface NavItemProps extends MenuItem {
  light?: boolean;
}

export const NavItem: FC<NavItemProps> = (props) => {
  const { light, name, icon, path, activePath, avatarColor } = props;

  return (
    <Tooltip light={light} placement="right" title={name}>
      <NavLink
        to={path}
        className={styles.menuItem}
        activeClassName={styles.active}
        isActive={() => path === activePath}
      >
        <Avatar src={icon} size={38} className={styles.avatar} color={avatarColor} shape="square">
          {name && name[0]}
        </Avatar>
      </NavLink>
    </Tooltip>
  );
};

interface InternalProps {
  menu: MenuItem[];
  style?: CSSProperties;
  activePath?: string;
  lightTooltip?: boolean;
}

const SideNav: FC<InternalProps> = (props) => {
  const { lightTooltip, menu, style, activePath } = props;

  return (
    <Sider className={styles.sideNav} collapsed collapsedWidth={64} style={style}>
      <Row type="flex" justify="space-between">
        <Col>
          {menu &&
            menu.length &&
            menu.map((item: MenuItem, index: number) => (
              <NavItem key={index} activePath={activePath} {...item} light={lightTooltip} />
            ))}
        </Col>
      </Row>
    </Sider>
  );
};

export default SideNav;
