import { CheckboxProps } from 'antd/lib/checkbox';
import { mount, ReactWrapper } from 'enzyme';
import React from 'react';

import CheckBox from '../Checkbox';

describe('Tests for CheckBox', () => {
  const props: CheckboxProps = {
    onClick: jest.fn(),
  };

  const wrapper: ReactWrapper = mount(<CheckBox {...props} />);

  it('Tests rendering of CheckBox without crushing', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should simulate checking of the checkBox', () => {
    const checkBoxInput: ReactWrapper = wrapper.find('.ant-checkbox-input').first();
    checkBoxInput.simulate('click');
    checkBoxInput.simulate('click');

    expect(props.onClick).toHaveBeenCalledTimes(2);
  });
});
