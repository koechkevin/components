import { array, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { Col, Menu as AntMenu, Row } from 'antd';
import { MemoryRouter } from 'dva/router';
import React from 'react';

import { Menu } from '../Menu';
import UserListItem from './UserListItem';

const stories = storiesOf('UserListItem', module);

const users = [
  {
    name: 'John Doe',
    email: 'john.doe@airbus.uk',
    department: 'Human Resource',
    roles: array('roles', ['company-admin', 'company-owner']),
    avatarUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/bowbrick/128.jpg',
    signature: 'Finance, Manager',
    status: select('status', ['offline', 'online'], 'online', 'status'),
    isInvited: false,
    avatarColor: '#fb6d77',
  },
  {
    name: 'Samuel Jackson',
    email: 'samuel.jackson@airbus.uk',
    department: 'Software Development',
    roles: array('member-roles', ['company-member']),
    avatarUrl: undefined,
    signature: 'Developer',
    status: select('status', ['offline', 'online'], 'online', 'status'),
    isInvited: false,
    avatarColor: '#5d85ce',
  },
  {
    name: '',
    email: 'john.doe@airbus.uk',
    department: '',
    signature: '',
    roles: array('role', ['company-guest']),
    avatarUrl: undefined,
    status: select('status', ['offline', 'online'], 'online', 'id'),
    isInvited: true,
    avatarColor: '#fb6d77',
  },
];

stories.addDecorator((story) => (
  <MemoryRouter>
    <Row type="flex" justify="center" gutter={12}>
      <Col span={16}>{story()}</Col>
    </Row>
  </MemoryRouter>
));

stories.add('User List View', () => {
  return (
    <>
      {users.map((member: any, index: number) => (
        <UserListItem
          key={index}
          status={member.status}
          name={member.name}
          email={member.email}
          roles={member.roles}
          dropdownProps={{
            overlay: (
              <Menu>
                <AntMenu.Item>User Profile</AntMenu.Item>
                <AntMenu.Item>Activity Log</AntMenu.Item>
                <AntMenu.Item>Login History</AntMenu.Item>
                <AntMenu.Item>Reset Password</AntMenu.Item>
              </Menu>
            ),
          }}
          signature={member.signature}
          isInvited={member.isInvited}
          avatarUrl={member.avatarUrl}
          department={member.department}
          avatarColor={member.avatarColor}
        />
      ))}
    </>
  );
});
