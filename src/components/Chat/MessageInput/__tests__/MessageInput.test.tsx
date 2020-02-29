import { mount } from 'enzyme';
import React from 'react';
import TextArea from 'react-textarea-autosize';

import MessageInput from '../MessageInput';

describe('Tests for message input component', () => {
  const props = {
    showAt: true,
    hitShown: true,
    text: 'sample text',
    suggestions: [
      {
        id: 'sample user id',
        name: 'Jane Doe',
        avatar: 'sample avatar',
        avatarColor: '#FFF',
        status: 'sample status',
        isRobot: false,
        inCall: true,
        productId: 'candidate-portal',
      },
    ],
    onChange: jest.fn(),
    onEnter: jest.fn(),
  };
  const wrapper = mount(<MessageInput {...props} />);

  it('should render message input component without crushing', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should simulate clicking of at icon', () => {
    const atIcon = wrapper.find('span').first();
    let textArea = wrapper.find(TextArea).first();

    expect(textArea.props().value).toEqual(props.text);

    atIcon.simulate('click');
    textArea = wrapper.find(TextArea).first();

    expect(textArea.props().value).toEqual('sample text@');
  });

  it('should simulate typing of text in the text area', () => {
    let textArea = wrapper.find(TextArea).first();

    textArea.simulate('change', {
      target: {
        value: 'Hello there I am Jane Doe',
      },
    });

    textArea = wrapper.find(TextArea).first();

    expect(textArea.props().value).toEqual('Hello there I am Jane Doe');
  });

  it('should simulate hit of enter key on text area', () => {
    const textArea = wrapper.find(TextArea).first();

    textArea.simulate('keypress', { key: 'Enter' });
  });
});
