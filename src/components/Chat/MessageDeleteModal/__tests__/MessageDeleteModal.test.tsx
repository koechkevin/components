import { mount } from 'enzyme';
import React from 'react';

import { Avatar } from '../../../Avatar';
import MessageDeleteModal from '../MessageDeleteModal';

describe('Tests for message delete modal', () => {
  const props = {
    visible: true,
    message: {
      id: 'sampleMessageId',
      createdAt: '2019-10-08 06:22:09',
      author: {
        id: 'user-fake-id',
        name: 'Jane Doe',
        avatarColor: '#4224',
        chatStatus: 'online',
        productId: 'company-portal',
      },
      text: 'sample text',
    },
  };

  const wrapper = mount(<MessageDeleteModal {...props} />);

  it('should mount the delete modal component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should contain a warning message', () => {
    expect(wrapper.contains('Are you sure you want to delete this message?')).toEqual(true);
  });

  it('should render author name', () => {
    expect(wrapper.contains(props.message.author.name)).toEqual(true);
  });

  it('should contain a circular avatar for company portal', () => {
    const avatar = wrapper.find(Avatar).first();

    expect(avatar.props().shape).toEqual('circle');
  });

  it('should contain square avatar for candidate portal', () => {
    const candidateProps = {
      ...props,
      message: {
        ...props.message,
        author: {
          ...props.message.author,
          productId: 'candidate-portal',
        },
      },
    };

    const candidateWrapper = mount(<MessageDeleteModal {...candidateProps} />);
    expect(
      candidateWrapper
        .find(Avatar)
        .first()
        .props().shape,
    ).toEqual('square');
  });
});
