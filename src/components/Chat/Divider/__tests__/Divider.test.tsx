import { Divider as AntdDivider } from 'antd';
import { shallow } from 'enzyme';
import React from 'react';

import Divider from '../Divider';

describe('Tests for chat divider', () => {
  const props = {
    dateTime: new Date(),
  };

  const wrapper = shallow(<Divider {...props} />);

  it('should test for mounting of divider component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render antd divider', () => {
    expect(wrapper.find(AntdDivider).exists()).toEqual(true);
  });

  it('should render dateFormat time in divider', () => {
    expect(wrapper.contains('Today')).toEqual(true);
  });

  // FIXME: fix this test case
  // it('should render Just now text', () => {
  //   expect(wrapper.contains('Just now')).toEqual(true);
  // });
});
