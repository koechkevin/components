import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { faCircle as faCircleOutline, faPencil, faPlusCircle } from '@fortawesome/pro-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import { Center } from '../Center/Center';
import { ChannelMenu } from './ChannelMenu';
import { ChannelItem } from './interface';

const title = text('title', 'Test title');
const channels: ChannelItem[] = [
  {
    id: '1',
    name: 'Direct Message 1',
    path: '/1',
    removable: false,
  },
  {
    id: '2',
    name: 'Example Message 2',
    path: '/2',
    removable: true,
  },
  {
    id: '3',
    name: 'Example Channel 1',
    path: '/3',
    removable: true,
  },
  {
    id: '4',
    name: 'Example Channel 2',
    path: '/4',
    removable: true,
  },
  {
    id: '5',
    name: 'Message 1',
    path: '/5',
    removable: true,
  },
  {
    id: '6',
    name: 'Message 2',
    path: '/6',
    removable: true,
  },
];

const channelsWithIcons: ChannelItem[] = [
  {
    id: '1',
    name: 'Direct Message 1',
    path: '/1',
    icon: faPencil,
  },
  {
    id: '2',
    name: 'Example Message 2',
    path: '/2',
    icon: faPencil,
  },
  {
    id: '3',
    name: 'Example Channel 1',
    path: '/3',
    icon: faPencil,
  },
  {
    id: '4',
    name: 'Example Channel 2',
    path: '/4',
    icon: faCircle,
    iconColor: '#39c049',
    iconHeight: 11,
    iconWidth: 11,
    isTyping: true,
  },
  {
    id: '5',
    name: 'Message 1',
    path: '/5',
    icon: faCircle,
    iconColor: '#39c049',
    count: 5,
    iconHeight: 11,
    iconWidth: 11,
    newMessagesCount: 10,
  },
  {
    id: '6',
    name: 'Message 2',
    path: '/6',
    icon: faCircleOutline,
    iconColor: '#959595',
    iconHeight: 11,
    iconWidth: 11,
    newMessagesCount: 5,
  },
];

storiesOf('ChannelMenu', module)
  .addDecorator((story) => (
    <BrowserRouter>
      <Center style={{ height: '100%' }}>{story()}</Center>
    </BrowserRouter>
  ))
  .add('default', () => <ChannelMenu title={title} list={channels} />)
  .add('withIcons', () => <ChannelMenu title={title} list={channelsWithIcons} />)
  .add('withTitleButton', () => (
    <ChannelMenu title={title} list={channels} titleButton={<FontAwesomeIcon icon={faPlusCircle} />} />
  ))
  .add('withRemoveButton', () => <ChannelMenu title={title} list={channels} onRemove={action('onRemove')} />);
