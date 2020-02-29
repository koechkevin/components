import { mount } from 'enzyme';
import React from 'react';

import { shortTimeStampFormat } from '../../../../utils';
import ThreadReplyItem from '../ThreadReplyItem';

describe('Tests for MessageItemTextualItem', () => {
  const props = {
    id: 'sampleMessageId',
    createdAt: '2019-10-08 06:22:09',
    updatedAt: '2020-10-08 06:22:09',
    author: {
      id: 'user-fake-id',
      avatarColor: '#4224',
      name: 'Jane Doe',
      productId: 'company-portal',
      chatStatus: 'sample chat status',
    },
    text: 'sample text',
    poppedMenu: <div>Mock Node</div>,
    menuShown: true,
    forwarding: null,
    startThread: jest.fn(),
  };

  const wrapper = mount(<ThreadReplyItem {...props} />);

  it('should render ThreadReplyItem without crushing', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render createdAt timestamp', () => {
    expect(wrapper.contains(shortTimeStampFormat(new Date(props.createdAt)))).toEqual(true);
  });

  it('should render name of the author and time message was replied', () => {
    expect(wrapper.find('span.username').exists()).toEqual(true);
    expect(wrapper.find('span.replyTime').exists()).toEqual(true);
  });

  it('should render link to message in replies', () => {
    expect(wrapper.find('span.replyLink').exists()).toEqual(true);
    expect(wrapper.find('span.replyLink').contains('this thread')).toBe(true);
  });
});
