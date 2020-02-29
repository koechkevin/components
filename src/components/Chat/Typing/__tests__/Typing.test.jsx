import { mount } from 'enzyme';
import React from 'react';

import Typing from '../Typing';

describe('Tests for Typing component', () => {
  const props = {
    typingUsers: ['John Doe'],
  };

  const wrapper = mount(<Typing visibility={'visible'} {...props} />);

  it('should render Typing without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render name of who is typing', () => {
    expect(wrapper.contains('John Doe')).toBe(true);
  });

  it('should render truncated names when more people are typing', () => {
    const updatedProps = {
      typingUsers: ['John Doe', 'Jane Doe', 'Baby Doe'],
    };

    const updatedWrapper = mount(<Typing visibility={'visible'} {...updatedProps} />);
    expect(updatedWrapper.contains('John Doe, Jane Doe and 1 other')).toBe(true);
  });
});
