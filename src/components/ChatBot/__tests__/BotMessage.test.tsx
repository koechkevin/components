import { BrowserRouter } from 'dva/router';
import { mount } from 'enzyme';
import React from 'react';

import { faEye } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { shortTimeStampFormat } from '../../../utils';
import Avatar from '../../Avatar/Avatar';
import BotMessage from '../BotMessage';
import { botDirectMessage } from '../mock';

describe('Tests for the BotMessage component', () => {
  const props = {
    poppedMenu: <div>Mock Node</div>,
    message: botDirectMessage,
    onMark: jest.fn(),
    onSnooze: jest.fn(),
    onRemove: jest.fn(),
  };

  const wrapper = mount(
    <BrowserRouter>
      <div>
        <BotMessage {...props} />
      </div>
    </BrowserRouter>,
  );

  const icon = <FontAwesomeIcon icon={faEye} />;

  it('should render Bot Message without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render the bot avatar', () => {
    const avatar = wrapper.find(Avatar).first();
    expect(avatar.props().size).toEqual(40);
  });

  it('should render correct timestamp for bot message', () => {
    expect(wrapper.contains(shortTimeStampFormat(new Date(props.message.createdAt)))).toEqual(true);
  });

  it('should render Private message icon', () => {
    expect(wrapper.contains(icon)).toEqual(true);
  });

  it('should render respective buttons for chat bot messages', () => {
    expect(wrapper.contains('Mark as Complete')).toEqual(true);
    expect(wrapper.contains('Snooze')).toEqual(true);
    expect(wrapper.contains('Delete')).toEqual(true);
  });

  it('should simulate clicking the mark as read button', () => {
    const markCompleteBtn = wrapper.findWhere((n) => n.text() === 'Mark as Complete').first();
    markCompleteBtn.simulate('click');

    expect(props.onMark).toHaveBeenCalled();
  });

  it('should simulate clicking the snooze button', () => {
    const markCompleteBtn = wrapper.findWhere((n) => n.text() === 'Snooze').first();
    markCompleteBtn.simulate('click');

    expect(props.onSnooze).toHaveBeenCalled();
  });

  it('should simulate clicking the delete button', () => {
    const markCompleteBtn = wrapper.findWhere((n) => n.text() === 'Delete').first();
    markCompleteBtn.simulate('click');

    expect(props.onRemove).toHaveBeenCalled();
  });
});
