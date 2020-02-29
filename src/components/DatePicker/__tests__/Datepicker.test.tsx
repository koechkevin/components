import { mount } from 'enzyme';
import moment from 'moment';
import React from 'react';

import DatePicker, { DateDropdown } from '../DatePicker';

describe('Date picker tests', () => {
  const date = moment();
  const mockFunction = jest.fn();

  it('calls onselect function', () => {
    const wrapper = mount(<DateDropdown selected={date} format="MM/DD/YYYY" onSelectDate={mockFunction} />);
    const dateToSelect = wrapper.find('#date').at(15);
    dateToSelect.simulate('click');
    expect(mockFunction).toHaveBeenCalled();
  });

  it('navigates the months', () => {
    const wrapper = mount(<DateDropdown format="MM/DD/YYYY" onSelectDate={mockFunction} />);
    const forward = wrapper.find('#forward').first();
    forward.simulate('click');
  });

  it('renders date picker with input field', () => {
    const wrapper = mount(
      <DatePicker
        format="MM/DD/YYYY"
        onSelectDate={mockFunction}
        dropdownProps={{
          getPopupContainer: () => ({
            appendChild: jest.fn(),
          }),
        }}
      />,
    );
    wrapper.find('input').simulate('click');
    const dateToSelect = wrapper.find('#date').at(15);
    dateToSelect.simulate('click');
    expect(mockFunction).toHaveBeenCalled();
    expect(wrapper.find(DateDropdown)).toHaveLength(1);
  });
});
