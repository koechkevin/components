import { mount } from 'enzyme';
import React from 'react';

import YearPicker, { YearDropdown } from '../YearPicker';

describe('year picker test', () => {
  it('renders without crashing and renders dropdown', () => {
    const mockFunction = jest.fn();
    const wrapper = mount(
      <YearPicker
        dropdownProps={{
          getPopupContainer: () => ({
            appendChild: jest.fn(),
          }),
        }}
        width="275px"
        value={2020}
        label="With Value"
        onSelectYear={mockFunction}
      />,
    );

    wrapper.find('input').simulate('click');
    wrapper.find('input').simulate('change');

    const year = wrapper.find('#year');

    year.first().simulate('click');
    expect(mockFunction).toHaveBeenCalledWith(2020);
  });

  it('renders year options', () => {
    const mockFunction = jest.fn();
    const wrapper = mount(<YearDropdown minYear={1900} maxYear={2100} selected="2010" onSelectYear={mockFunction} />);
    const year = wrapper.find('#year');

    year.first().simulate('click');
    expect(mockFunction).toHaveBeenCalled();
    expect(year).toHaveLength(12);
  });

  it('navigates to previous page if 2010 was selected, then onclick back 2000 should be first', () => {
    const mockFunction = jest.fn();
    const wrapper = mount(<YearDropdown minYear={1900} maxYear={2100} selected="2012" onSelectYear={mockFunction} />);

    wrapper
      .find('#back')
      .first()
      .simulate('click');

    const year = wrapper.find('#year');
    year.first().simulate('click');
    expect(mockFunction).toHaveBeenCalledWith(2000);
  });

  it('navigates to previous page if 2020 was selected, then onclick forward 2030 should be first year', () => {
    const mockFunction = jest.fn();
    const wrapper = mount(<YearDropdown minYear={1900} maxYear={2100} selected="2022" onSelectYear={mockFunction} />);

    wrapper
      .find('#forward')
      .first()
      .simulate('click');

    const year = wrapper.find('#year');
    year.first().simulate('click');
    expect(mockFunction).toHaveBeenCalledWith(2030);
  });
});
