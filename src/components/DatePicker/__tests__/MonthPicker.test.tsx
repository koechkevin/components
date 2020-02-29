import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { mount } from 'enzyme';
import React from 'react';

import MonthPicker, { MonthDropdown } from '../MonthPicker';

describe('month picker test', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = mount(<MonthPicker width="275px" value="January" label="With Value" onChange={() => {}} />);
  });

  afterAll(() => {
    wrapper.unmount();
  });

  it('renders without crashing and finds calender icon', () => {
    const wrapper = mount(<MonthPicker width="275px" value="January" label="With Value" onChange={() => {}} />);
    expect(wrapper.find(FontAwesomeIcon)).toHaveLength(1);
  });

  it('renders month dropdown', () => {
    const mockFunction = jest.fn();
    const wrapper = mount(<MonthDropdown selected="March" onSelectMonth={mockFunction} />);
    const month = wrapper.find('#month');
    month.first().simulate('click');
    expect(mockFunction).toHaveBeenCalledWith('January');
    expect(month).toHaveLength(12);
  });

  it('renders without crashing and finds calender icon', () => {
    const mock = jest.fn();
    const onSelect = jest.fn();
    const wrapper = mount(
      <MonthPicker
        dropdownProps={{
          getPopupContainer: () => ({
            appendChild: mock,
          }),
        }}
        onSelectMonth={onSelect}
        width="275px"
        value="January"
        label="With Value"
        onChange={jest.fn}
      />,
    );
    wrapper.find('input').simulate('click');
    wrapper.find('input').simulate('change');
    expect(mock).toHaveBeenCalled();
    const month = wrapper.find('#month');
    month.last().simulate('click');
    expect(onSelect).toHaveBeenCalledWith('December');
  });
});
