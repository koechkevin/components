import { Radio } from 'antd';
import { mount, ReactWrapper } from 'enzyme';
import React from 'react';

import RadioButton from '../RadioButton';

describe('radio button', () => {
  it('renders checked button without crashing', () => {
    const wrapper: ReactWrapper = mount(<RadioButton checked={true} label="Owner" onSelect={jest.fn()} />);
    expect(wrapper.find(Radio)).toHaveLength(1);
  });

  it('renders unchecked button without crashing', () => {
    const wrapper: ReactWrapper = mount(<RadioButton checked={false} label="Owner" onSelect={jest.fn()} />);
    expect(wrapper.find(Radio)).toHaveLength(1);
  });
});
