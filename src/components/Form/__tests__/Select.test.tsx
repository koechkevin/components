import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { mount } from 'enzyme';
import React from 'react';

import NativeSelect from '../NativeSelect';
import Select from '../Select';

describe('Select test', () => {
  let wrapper = mount(<Select options={[]} />);
  it('renders appropriately', () => {
    wrapper = mount(<Select value="test value" options={[{ value: 'test value' }]} />);
    expect(wrapper.find(FontAwesomeIcon)).toHaveLength(1);
  });

  it('renders native select', () => {
    wrapper = mount(<NativeSelect value="test value" onChange={jest.fn} options={[{ value: 'test value' }]} />);
    expect(wrapper.find('option')).toHaveLength(2);
  });

  it('does not break without value', () => {
    wrapper = mount(<NativeSelect options={[{ value: 'test value' }]} />);
    expect(wrapper.find('select')).toHaveLength(1);
  });
});
