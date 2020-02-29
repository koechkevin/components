import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/pro-light-svg-icons';
import { action } from '@storybook/addon-actions';
import { object } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { getFlatMenuKeys } from '../../utils';
import { Center } from '../Center/Center';
import BaseMenu from './BaseMenu';
import { MenuItemProps } from './interface';

const location = object('location', {
  pathname: '/app/example/page-1',
}) as Location;
const pathname = '/app/example';
const defaultOpenKeys = [pathname];

const menu: MenuItemProps[] = [
  {
    name: 'Base Menu',
    icon: faUser,
    path: '/app/example',
    routes: [
      {
        name: 'Page 1',
        path: '/app/example/page-1',
        tooltip: 'Page 1 tooltip, custom icon sizes and color',
      },
      {
        name: 'Page 2',
        path: '/app/example/page-2',
        isTyping: true,
      },
      {
        name: 'Page 3',
        path: '/app/example/page-3',
      },
    ],
  },
];

const menu2: MenuItemProps[] = [
  {
    name: 'Base Menu',
    icon: faUser,
    path: '/app/example',
    routes: [
      {
        name: 'Page 1',
        path: '/app/example/page-1',
        tooltip: 'Page 1 tooltip, custom icon sizes and color',
        icon: faCircle,
        iconColor: '#39c049',
        iconHeight: 9,
        iconWidth: 9,
      },
      {
        name: 'Page 2',
        path: '/app/example/page-2',
        icon: faCircle,
        tooltip: 'Page 2, with default icon properties',
        count: 4,
        isTyping: true,
        newMessagesCount: 3,
      },
      {
        name: 'Page 3',
        path: '/app/example/page-3',
        icon: faCircle,
        iconColor: '#39c049',
        iconHeight: 9,
        iconWidth: 9,
        newMessagesCount: 10,
      },
    ],
  },
];
const flatMenuKeys = getFlatMenuKeys(menu);

storiesOf('BaseMenu', module)
  .addDecorator((story) => (
    <BrowserRouter>
      <Center style={{ height: '100%' }}>{story()}</Center>
    </BrowserRouter>
  ))
  .add('default', () => (
    <BaseMenu
      menu={menu}
      location={location}
      openKeys={defaultOpenKeys}
      flatMenuKeys={flatMenuKeys}
      defaultOpenKeys={defaultOpenKeys}
      onOpenChange={action('onPenChange')}
    />
  ))

  .add('with icons', () => (
    <BaseMenu
      menu={menu2}
      location={location}
      openKeys={defaultOpenKeys}
      flatMenuKeys={flatMenuKeys}
      defaultOpenKeys={defaultOpenKeys}
      onOpenChange={action('onPenChange')}
    />
  ));
