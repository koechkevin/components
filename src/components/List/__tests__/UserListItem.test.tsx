import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dropdown } from 'antd';
import { MemoryRouter } from 'dva/router';
import { mount } from 'enzyme';
import React from 'react';

import { ChatStatus } from '../../../utils';
import UserListItem from '../UserListItem';

describe('User List Component', () => {
  const More: React.FC = () => <div id="dropdown" />;
  const props = {
    avatarUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/bowbrick/128.jpg',
    status: ChatStatus.online,
    signature: 'Finance, Manager',
    department: 'Human Resource',
    name: 'John Doe',
    email: 'john.doe@airbus.uk',
    moreMenuDropDown: More,
    roles: ['company-admin'],
    isInvited: false,
    dropdownProps: {
      items: [],
    },
  };

  it('renders without crashing', () => {
    const wrapper = mount(
      <MemoryRouter>
        <UserListItem {...props} />
      </MemoryRouter>,
    );
    expect(wrapper.find(FontAwesomeIcon)).toHaveLength(2);
  });

  it('does not break for invited user', () => {
    const wrapper = mount(
      <MemoryRouter>
        <UserListItem {...props} signature="" department="" name="" />
      </MemoryRouter>,
    );
    expect(wrapper.find(Dropdown)).toHaveLength(1);
  });

  it('renders both status online and offline appropriately', () => {
    const wrapper = mount(
      <MemoryRouter>
        <UserListItem {...props} status={ChatStatus.offline} />
      </MemoryRouter>,
    );
    expect(wrapper.find(Dropdown)).toHaveLength(1);
  });
});
