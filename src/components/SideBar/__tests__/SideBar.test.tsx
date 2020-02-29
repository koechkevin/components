import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';

import SideBar from '../SideBar';

describe('SideBar Component Test', () => {
  it('renders with child element', () => {
    const tree = shallow(<SideBar>SideBar Test</SideBar>);
    expect(toJson(tree)).toMatchSnapshot();
  });

  it('renders side bar with prop width', () => {
    const tree = shallow(<SideBar width={200}>Button Test</SideBar>);
    const props = tree.props();

    expect(props.width).toEqual(200);
    expect(toJson(tree)).toMatchSnapshot();
  });

  it('renders dark theme with theme value "dark"', () => {
    const tree = shallow(<SideBar theme="dark" />);
    const props = tree.props();

    expect(props.theme).toEqual('dark');
    expect(toJson(tree)).toMatchSnapshot();
  });

  it('renders light theme with theme value "light"', () => {
    const tree = shallow(<SideBar theme="light" />);
    const props = tree.props();

    expect(props.theme).toEqual('light');
    expect(toJson(tree)).toMatchSnapshot();
  });
});
