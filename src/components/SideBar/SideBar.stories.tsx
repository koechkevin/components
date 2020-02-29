import { faHome, faSuitcase } from '@fortawesome/pro-regular-svg-icons';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { action } from '@storybook/addon-actions';
import { boolean, object } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import logo from '../../icons/logo.svg';
import mockLogo from '../../icons/mocks/company.png';
import { getFlatMenuKeys, ProductType } from '../../utils';
import { BaseMenu, ChannelMenu } from '../Menu';
import { ChannelItem, MenuItemProps } from '../Menu/interface';
import CompanyModal, { ListItem } from './CompanyModal';
import SideBar from './SideBar';
import SideBarHeader from './SideBarHeader';

const collapsed = boolean('collapsed', false);
const companyList: ListItem[] = [
  { companyId: '123', avatarUrl: logo, name: 'Airbus', count: 4, avatarColor: '#fb6d77' },
  { companyId: '1234', avatarUrl: mockLogo, name: 'Pepsi', count: 21, avatarColor: '#46a094' },
  { companyId: '12345', avatarUrl: '', name: 'Airbus', avatarColor: '#5d85ce' },
];

const menu = [
  {
    name: 'Home',
    icon: faHome,
    path: '/app/home',
  },
  {
    name: 'Jobs',
    icon: faSuitcase,
    path: '/app/jobs',
  },
];
const channels: ChannelItem[] = [
  {
    id: '1',
    name: 'Direct Message 1',
    path: '/1',
    isTyping: true,
  },
  {
    id: '2',
    name: 'Example Message 2',
    path: '/2',
  },
  {
    id: '3',
    name: 'Example Message 3',
    path: '/3',
  },
];
const jobsMenu: MenuItemProps[] = [
  {
    name: 'Base Menu',
    path: '/app/example',
    routes: [
      {
        name: 'Page 1',
        path: '/app/example/page-1',
      },
      {
        name: 'Page 2',
        path: '/app/example/page-2',
      },
      {
        name: 'Page 3',
        path: '/app/example/page-3',
      },
    ],
  },
];
const location = object('location', {
  pathname: '/app/example/page-1',
}) as Location;
const pathname = '/app/example';
const defaultOpenKeys = [pathname];
const flatMenuKeys = getFlatMenuKeys(menu);

storiesOf('SideBar', module)
  .addDecorator((story) => <BrowserRouter>{story()}</BrowserRouter>)
  .add('default', () => (
    <SideBar width={320} collapsed={collapsed}>
      <SideBarHeader name="Aurora" logo={logo} />
      <BaseMenu
        menu={menu}
        openKeys={[]}
        inlineIndent={12}
        location={location}
        flatMenuKeys={flatMenuKeys}
        style={{ marginTop: 16 }}
      />
      <ChannelMenu title="Team" list={channels} onRemove={action('onRemove')} />
      <BaseMenu
        menu={jobsMenu}
        location={location}
        openKeys={defaultOpenKeys}
        flatMenuKeys={flatMenuKeys}
        defaultOpenKeys={defaultOpenKeys}
        onOpenChange={action('onPenChange')}
      />
    </SideBar>
  ))
  .add('Mobile', () => (
    <SideBar width={320} collapsed={collapsed}>
      <SideBarHeader name="Aurora" logo={logo} isMobile={true} />
      <BaseMenu
        menu={menu}
        openKeys={[]}
        inlineIndent={12}
        location={location}
        style={{ marginTop: 16 }}
        flatMenuKeys={flatMenuKeys}
      />
      <ChannelMenu title="Team" list={channels} onRemove={action('onRemove')} />
      <BaseMenu
        menu={jobsMenu}
        location={location}
        openKeys={defaultOpenKeys}
        flatMenuKeys={flatMenuKeys}
        defaultOpenKeys={defaultOpenKeys}
        onOpenChange={action('onPenChange')}
      />
    </SideBar>
  ))
  .add('SidBar in Candidate mobile', () => (
    <SideBar width={320} collapsed={collapsed}>
      <SideBarHeader name="Aurora" logo={logo} isMobile={true} productId={ProductType.Candidate} />
      <ChannelMenu title="Team" list={channels} onRemove={action('onRemove')} />
      <BaseMenu
        menu={jobsMenu}
        location={location}
        openKeys={defaultOpenKeys}
        flatMenuKeys={flatMenuKeys}
        defaultOpenKeys={defaultOpenKeys}
        onOpenChange={action('onPenChange')}
      />
    </SideBar>
  ))
  .add('SidBar in Candidate', () => (
    <SideBar width={320} collapsed={collapsed}>
      <SideBarHeader name="Aurora" logo={logo} productId={ProductType.Candidate} />
      <ChannelMenu title="Team" list={channels} onRemove={action('onRemove')} />
      <BaseMenu
        menu={jobsMenu}
        location={location}
        openKeys={defaultOpenKeys}
        flatMenuKeys={flatMenuKeys}
        defaultOpenKeys={defaultOpenKeys}
        onOpenChange={action('onPenChange')}
      />
    </SideBar>
  ))
  .add('CompanyList in Candidate', () => <CompanyModal visible list={companyList} companyId="123" />);
