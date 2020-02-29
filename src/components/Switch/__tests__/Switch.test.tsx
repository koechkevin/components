import { Switch as AntdSwitch } from 'antd';
import { SwitchProps } from 'antd/lib/switch';
import { mount, ReactWrapper } from 'enzyme';
import React from 'react';

import Switch from '../Switch';

describe('Tests for switch component', () => {
  const props: SwitchProps = { onChange: jest.fn() };
  const wrapper: ReactWrapper = mount(<Switch {...props} />);

  it('should tests for the mounting of the switch component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should contain antd switch component', () => {
    expect(wrapper.find(AntdSwitch).exists()).toEqual(true);
  });

  it('should should switch on the switch', () => {
    const switchBtn: ReactWrapper = wrapper.find('.ant-switch');
    switchBtn.simulate('click');

    expect(props.onChange).toHaveBeenCalledTimes(1);
  });

  it('it should switch off the switch', () => {
    const switchBtn: ReactWrapper = wrapper.find('.ant-switch-checked');
    switchBtn.simulate('click');

    expect(props.onChange).toHaveBeenCalledTimes(2);
  });
});
