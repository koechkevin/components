import { mount } from 'enzyme';
import React from 'react';

import { Avatar } from '../../../Avatar/Avatar';
import Button from '../../../Button/Button';
import MessageInput from '../../MessageInput/MessageInput';
import MessageEditableItem from '../MessageEditableItem';

describe('Tests for message editable item component', () => {
  const props = {
    id: 'sample id',
    threadId: 'sampleThreadId',
    createdAt: '2019-10-08 06:22:09',
    author: {
      id: 'user id',
      avatar: 'sample avatar',
      status: 'sample status',
      isRobot: false,
      avatarColor: '#4224',
      name: 'Jane Doe',
      productId: 'company-portal',
    },
    text: 'sample text',
    suggestions: [
      {
        id: 'suggestion id',
        name: 'sample name',
        avatar: 'sample avatar',
        avatarColor: '#FFF',
        status: 'sample status',
        isRobot: false,
      },
    ],
    save: jest.fn(),
    cancel: jest.fn(),
  };

  const wrapper = mount(<MessageEditableItem {...props} />);

  it('should test for the mounting of the message editable component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should be able to render circular avatar for company profile', () => {
    const avatar = wrapper.find(Avatar);

    expect(avatar.props().shape).toEqual('circle');
  });

  it('should render square avatar for candidate profile', () => {
    const candidateProps = {
      ...props,
      author: {
        ...props.author,
        productId: 'candidate-portal',
      },
    };
    const candidateWrapper = mount(<MessageEditableItem {...candidateProps} />);
    const avatar = candidateWrapper.find(Avatar);

    expect(avatar.props().shape).toEqual('square');
  });

  it('should simulate onChange for message input', () => {
    const messageInput = wrapper.find(MessageInput);

    messageInput.simulate('change');

    expect(messageInput.props().text).toEqual('sample text');
  });

  it('should render author name', () => {
    expect(wrapper.contains(props.author.name)).toEqual(true);
  });

  it('should save message on click of save button', () => {
    const button = wrapper.find(Button).last();

    expect(button.props().type).toEqual('primary');
    expect(button.contains('Save Changes')).toEqual(true);

    button.simulate('click');

    expect(props.save).toHaveBeenCalled();
  });

  it('should simulate cancelling on message editable component', () => {
    const cancelButton = wrapper.find(Button).first();

    expect(cancelButton.props().ghost).toEqual(true);
    expect(cancelButton.contains('Cancel')).toEqual(true);

    cancelButton.simulate('click');

    expect(props.cancel).toHaveBeenCalled();
  });
});
