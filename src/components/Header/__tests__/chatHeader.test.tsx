import { faCircle } from '@fortawesome/pro-light-svg-icons';
import { mount } from 'enzyme';
import React from 'react';

import ChatHeader from '../ChatHeader';

describe('Tests for the ChatHeader component', () => {
  const props = {
    statusIcon: faCircle,
    iconColor: 'red',
    jobPosition: 'CEO',
    chatRoomStatus: 'open',
  };

  const wrapper = mount(<ChatHeader {...props} />);

  it('should render ChatHeader without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render the props', () => {
    expect(wrapper.props().iconColor).toEqual('red');
    expect(wrapper.props().jobPosition).toEqual('CEO');
    expect(wrapper.props().chatRoomStatus).toEqual('open');
  });
});
