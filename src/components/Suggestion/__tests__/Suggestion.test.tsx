import { faCircle } from '@fortawesome/pro-light-svg-icons';
import { mount } from 'enzyme';
import React from 'react';

import { Avatar } from '../../Avatar/Avatar';
import Suggestion from '../Suggestion';

describe('Tests for Typing component', () => {
  const props = {
    id: '1',
    name: 'Test User',
    productId: 'candidate-portal',
    chatStatus: 'online',
    avatarColor: 'red',
    signature: 'CEO',
    label: 'label',
    status: '',
    inCall: true,
    icon: faCircle,
    iconColor: 'red',
    isActive: true,
    onClick: jest.fn(),
    onMouseOver: jest.fn(),
  };

  const wrapper = mount(<Suggestion {...props} />);

  it('should render Typing without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correct avatar in suggestions', () => {
    expect(
      wrapper
        .find(Avatar)
        .first()
        .props().shape,
    ).toEqual('square');
  });

  it('should contain circle avatar for company portal user', () => {
    const companyUserProps = {
      ...props,
      productId: 'company-portal',
    };

    const updatedWrapper = mount(<Suggestion {...companyUserProps} />);
    expect(
      updatedWrapper
        .find(Avatar)
        .first()
        .props().shape,
    ).toEqual('circle');
  });

  it('should render the name of users in the list', () => {
    expect(wrapper.contains('Test User')).toBe(true);
  });

  it('should render the signature of users in the list', () => {
    expect(wrapper.contains('CEO')).toBe(true);
  });

  it('should handle onClick for listed users', () => {
    const suggestion = wrapper.find('.suggestion').first();
    suggestion.simulate('click');

    expect(props.onClick).toHaveBeenCalled();
  });

  it('should render in call when true', () => {
    expect(wrapper.contains('In Call')).toBe(true);
  });

  it('should render not render in call when false', () => {
    const updatedProps = {
      ...props,
      inCall: false,
    };

    const updatedWrapper = mount(<Suggestion {...updatedProps} />);
    expect(updatedWrapper.contains('In Call')).toBe(false);
  });
});
