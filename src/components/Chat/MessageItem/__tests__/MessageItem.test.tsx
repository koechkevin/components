import { mount } from 'enzyme';
import React from 'react';

import { shortTimeStampFormat, timestampFormat } from '../../../../utils';
import { Avatar } from '../../../Avatar';
import { Tooltip } from '../../../Tooltip';
import MessageItem from '../MessageItem';

describe('Tests for MessageItem component', () => {
  const props = {
    id: 'sampleMessageId',
    createdAt: '2019-10-08 06:22:09',
    updatedAt: '2020-10-08 06:22:09',
    author: {
      id: 'user-fake-id',
      name: 'Jane Doe',
      avatarColor: '#4224',
      productId: 'company-portal',
      chatStatus: 'sample chat status',
    },
    text: 'sample text',
    poppedMenu: <div>Mock Node</div>,
    menuShown: true,
    startThread: jest.fn(),
    forwarding: null,
  };

  const wrapper = mount(<MessageItem {...props} />);

  it('should render message item without crushing', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render avatar for company portal', () => {
    const avatar = wrapper.find(Avatar).first();

    expect(avatar.props().size).toEqual(40);
    expect(avatar.props().shape).toEqual('circle');
    expect(avatar.props().status).toEqual(props.author.chatStatus);
  });

  it('should render correct timestamp', () => {
    expect(wrapper.contains(shortTimeStampFormat(new Date(props.createdAt)))).toEqual(true);
  });

  it('should render tooltip with timestamp title and is modified property if modified', () => {
    const updatedProps = {
      ...props,
      isModified: true,
    };

    const updatedWrapper = mount(<MessageItem {...updatedProps} />);
    const toolTip = updatedWrapper.find(Tooltip).first();

    expect(toolTip.props().title).toEqual(shortTimeStampFormat(new Date(updatedProps.updatedAt)));
    expect(toolTip.contains('(Edited)')).toEqual(true);
  });

  it('should render actual date and time if message is in a thread', () => {
    const updatedProps = {
      ...props,

      parentId: '5dcd77257d216a0022d2e803',
    };
    const updatedWrapper = mount(<MessageItem {...updatedProps} />);
    expect(updatedWrapper.contains(timestampFormat(new Date(props.createdAt)))).toEqual(true);
  });

  it('should render deleted message text if main message is deleted', () => {
    const updatedProps = {
      ...props,
      threadInfo: {
        lastMessageAt: '2020-10-08 06:22:09',
        count: 1,
        authors: [
          {
            id: 'mock user id',
            name: 'jane Doe',
            status: 'mock status',
            avatarColor: '#5D85CE',
            chatStatus: 'online',
            productId: 'candidate-portal',
            createdAt: '2019-10-08 06:22:09',
          },
        ],
      },
      isDeleted: true,
    };

    const updatedWrapper = mount(<MessageItem {...updatedProps} />);
    expect(updatedWrapper.find('.deletedMessage').exists()).toEqual(true);
    expect(updatedWrapper.contains('This message was deleted')).toBeTruthy();
  });

  it('should test for description prop', () => {
    const updatedProps = {
      ...props,
      threadInfo: {
        lastMessageAt: '2020-10-08 06:22:09',
        count: 1,
        authors: [
          {
            id: 'mock user id',
            name: 'jane Doe',
            status: 'mock status',
            productId: 'candidate-portal',
            createdAt: '2019-10-08 06:22:09',
            avatarColor: '#dfc475',
            chatStatus: 'offline',
          },
        ],
      },
    };

    const updatedWrapper = mount(<MessageItem {...updatedProps} />);
    expect(updatedWrapper.find('span.blue').exists()).toEqual(true);
    expect(
      updatedWrapper.contains(`Last reply ${shortTimeStampFormat(new Date(updatedProps.threadInfo.lastMessageAt))}`),
    );
    expect(wrapper.contains('View Thread'));
  });
});
