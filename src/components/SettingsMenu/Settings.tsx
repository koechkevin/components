import { IconDefinition } from '@fortawesome/pro-regular-svg-icons';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { Avatar } from '../Avatar';
import { Title } from '../Typography';

import styles from './Settings.module.scss';

interface RouteConfig {
  name: string;
  path: string;
  query?: string;
  auth?: string;
  routes?: RouteConfig[];
  icon?: IconDefinition;
  hideInMenu?: boolean;
  component?: any;
}

interface Props {
  location: { pathname: string };
  routes: RouteConfig[];
  companyName?: string;
  logoUrl?: string;
  avatarColor?: string;
}

const SettingsMenu: FC<Props> = (props) => {
  const {
    routes,
    location: { pathname },
    companyName,
    logoUrl,
    avatarColor,
  } = props;

  return (
    <div className={styles.settingsSidebar}>
      {companyName && (
        <div className={styles.logo}>
          <Avatar src={logoUrl} shape="square" color={avatarColor} className={styles.logoAvatar} size="large" />
          <Title level={4} className={styles.companyName}>
            {companyName}
          </Title>
        </div>
      )}
      <div className={styles.items}>
        {routes.map((item: RouteConfig, index: number) => (
          <div key={index} className={styles.group}>
            <div className={styles.title}>{item.name}</div>
            {item.routes &&
              item.routes.map((route: RouteConfig) => {
                const className = [styles.link, pathname.includes(route.path) ? styles.active : ''].join(' ');
                return (
                  !route.hideInMenu && (
                    <div key={route.path} className={styles.menuItem}>
                      <Link key={route.path} to={route.path}>
                        <div className={className}>{route.name}</div>
                      </Link>
                    </div>
                  )
                );
              })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SettingsMenu;
