import { faPencil, faTrash } from '@fortawesome/pro-regular-svg-icons';
import { Menu } from 'antd';
import { mount } from 'enzyme';
import React from 'react';

import MoreActionsMenu from '../MoreActionsMenu';

describe('Tests for MoreActionsMenu component', () => {
  const props = {
    message: {
      id: 'sampleMessageId',
      threadId: 'sampleThreadId',
      createdAt: '2019-10-08 06:22:09',
      updatedAt: '2020-10-08 06:22:09',
      author: {
        avatarColor: '#4224',
        name: 'Jane Doe',
        productId: 'company-portal',
        chatStatus: 'sample chat status',
      },
    },
    menu: [
      {
        icon: faPencil,
        text: 'Edit Message',
        handler: jest.fn(),
      },
      {
        icon: faPencil,
        text: 'Delete Message',
        handler: jest.fn(),
      },
    ],
  };

  const wrapper = mount(<MoreActionsMenu {...props} />);

  it('should render MoreActionsMenu without crushing', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should simulate click of menu items', () => {
    const menuItems = wrapper.find(Menu.Item);

    menuItems.forEach((menuItem) => {
      menuItem.simulate('click');
    });

    expect(props.menu[0].handler).toHaveBeenCalled();
    expect(props.menu[1].handler).toHaveBeenCalled();
  });
});
