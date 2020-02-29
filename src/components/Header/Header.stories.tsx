import { faCircle } from '@fortawesome/pro-solid-svg-icons';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { Row } from 'antd';
import React from 'react';

import { Center } from '../Center/Center';
import ChatHeader from './ChatHeader';
import Header from './Header';

const stories = storiesOf('Header', module);
const title = text('title', 'Basic Header');
const statusIcon = faCircle;
const iconColor = '#39c049';
const jobPosition = '# Snr. UI / UX Designer';
const chatRoomStatus = 'Open';

stories.addDecorator((story) => <Center>{story()}</Center>);

stories
  .add('default', () => <Header>{title}</Header>)
  .add('with chatroom details', () => (
    <Header>
      <Row type="flex" style={{ flexWrap: 'nowrap' }}>
        <span style={{ whiteSpace: 'nowrap'}}>John Doe</span>
        <ChatHeader
          statusIcon={statusIcon}
          iconColor={iconColor}
          jobPosition={jobPosition}
          chatRoomStatus={chatRoomStatus}
        />
      </Row>
    </Header>
  ));
