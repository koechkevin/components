import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Menu } from 'antd';
import React, { CSSProperties, PureComponent } from 'react';

import { getMenuMatches, urlToList } from '../../utils';
import { MenuItemProps } from './interface';
import MenuItem from './MenuItem';

import styles from './BaseMenu.module.scss';

const { SubMenu } = Menu;

interface InternalProps {
  location: Location;
  openKeys: string[];
  className?: string;
  style?: CSSProperties;
  inlineIndent?: number;
  menu: MenuItemProps[];
  flatMenuKeys: string[];
  theme?: 'light' | 'dark';
  defaultOpenKeys?: string[];
  mode?: 'vertical' | 'horizontal' | 'inline';
  onTitleClick?: (params: any) => void;
  onOpenChange?: (openKeys: string[]) => void;
}

interface InternalState {
  openKeys: string[];
}

class BaseMenu extends PureComponent<InternalProps, InternalState> {
  public readonly state: InternalState = {
    openKeys: [],
  };

  public getSelectedMenuKeys(pathname: string) {
    const { flatMenuKeys } = this.props;
    return urlToList(pathname).map((path: string) => getMenuMatches(flatMenuKeys, path).pop()) as string[];
  }

  public renderSubMenu(route: MenuItemProps) {
    const { onTitleClick } = this.props;
    const { name, icon, path, routes, hideInMenu } = route;

    if (hideInMenu) {
      return null;
    }

    return (
      <SubMenu
        key={path}
        onTitleClick={onTitleClick}
        title={
          icon ? (
            <span>
              <FontAwesomeIcon icon={icon} />
              <span style={{ marginLeft: 6 }} className={styles.baseMenuTitle}>
                {name}
              </span>
            </span>
          ) : (
            <span className={styles.baseMenuTitle}>{name}</span>
          )
        }
      >
        {routes && routes.length
          ? routes.map((item: MenuItemProps) => <MenuItem tooltip={item.tooltip} {...item} key={item.path} />)
          : null}
      </SubMenu>
    );
  }

  public render() {
    const {
      theme,
      mode,
      menu,
      style,
      openKeys,
      location,
      className,
      inlineIndent,
      onOpenChange,
      defaultOpenKeys,
    } = this.props;
    let selectedKeys = this.getSelectedMenuKeys(location.pathname);
    const cls = [styles.baseMenu, className ? className : ''].join(' ');

    if (!selectedKeys.length && openKeys) {
      selectedKeys = [openKeys[openKeys.length - 1]];
    }

    return (
      <Menu
        key="Menu"
        style={style}
        className={cls}
        forceSubMenuRender
        mode={mode || 'inline'}
        theme={theme || 'dark'}
        selectedKeys={selectedKeys}
        onOpenChange={onOpenChange}
        inlineIndent={inlineIndent || 16}
        defaultOpenKeys={defaultOpenKeys}
      >
        {menu &&
          menu.length &&
          menu.map((item: MenuItemProps) =>
            item.routes ? this.renderSubMenu(item) : <MenuItem {...item} key={item.path} />,
          )}
      </Menu>
    );
  }
}

export default BaseMenu;
