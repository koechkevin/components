import { object, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import logo from '../../icons/logo.svg';

import mockLogo from '../../icons/mocks/company.png';
import SideNav from './SideNav';

const menu = [
  {
    name: 'Aurora',
    icon: logo,
    avatarColor: '#5d85ce',
    path: '/aurora',
  },
  {
    name: 'Aerotage',
    icon: mockLogo,
    avatarColor: '#46a094',
    path: '/aerotage',
  },
  {
    name: 'LinkedIn',
    icon: '',
    avatarColor: '#fb6d77',
    path: '/linkedin',
  },
];

storiesOf('SideNav', module)
  .addDecorator((story) => <MemoryRouter>{story()}</MemoryRouter>)
  .add('default', () => (
    <SideNav menu={menu} style={object('style', {})} activePath={text('activePath', '/aerotage')} />
  ));
