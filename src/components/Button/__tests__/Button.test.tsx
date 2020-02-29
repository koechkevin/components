import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';

import Button from '../Button';
import { ToggleButton } from '../ToggleButton';

describe('Button Component Test', () => {
  it('renders without child element', () => {
    const wrapper = shallow(<Button>Button Test</Button>);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders with child element', () => {
    const wrapper = shallow(
      <Button>
        <span>Hello World!</span>
      </Button>,
    );

    expect(wrapper.contains(<span>Hello World!</span>)).toEqual(true);
  });

  it('renders ghost style with prop ghost', () => {
    const tree = shallow(<Button ghost>Button Test</Button>);
    const props = tree.props();

    expect(props.ghost).toEqual(true);
    expect(toJson(tree)).toMatchSnapshot();
  });

  it('renders button with a loading icon when prop loading is true', () => {
    const tree = shallow(<Button loading>Button Test</Button>);

    expect(tree.find(FontAwesomeIcon)).toHaveLength(1);
    expect(toJson(tree)).toMatchSnapshot();
  });

  it('renders a disabled button with prop disabled', () => {
    const tree = shallow(<Button disabled>Button Test</Button>);
    const props = tree.props();

    expect(props.disabled).toEqual(true);
    expect(toJson(tree)).toMatchSnapshot();
  });

  it('className', () => {
    const fakeClassName = 'test';
    const wrapper = shallow(<Button className={fakeClassName} />);

    expect(wrapper.hasClass('test')).toEqual(true);
  });

  it('Button styling', () => {
    const fakeClassName = 'test';
    const wrapper = shallow(<Button className={fakeClassName} />);
    const wrapperButton = wrapper.find('.test');

    expect(wrapperButton.length).toEqual(1);
  });
  it('Toggle Button has class toggle', () => {
    const fakeClassName = 'toggle';
    const wrapper = shallow(<ToggleButton className={fakeClassName} />);
    const wrapperButton = wrapper.find('.toggle');

    expect(wrapperButton.length).toEqual(1);
  });

  it('Button styling', () => {
    const style = { height: '36px' };
    const fakeClassName = 'test';
    const wrapper = shallow(<Button className={fakeClassName} style={style} />);

    expect(wrapper.hasClass('test')).toEqual(true);
    expect(wrapper.find('.test')).toHaveLength(1);
  });
});

it('simulates a click event', () => {
  const onClick = jest.fn();
  const tree = shallow(<Button onClick={onClick}>Button Test</Button>);
  const props = tree.props();

  props.onClick();
  expect(toJson(tree)).toMatchSnapshot();
});

it('button clicked', () => {
  const mockCallBack = jest.fn();
  const wrapper = shallow(<Button onClick={mockCallBack} />);
  wrapper
    .find('Button')
    .props()
    .onClick();

  expect(mockCallBack).toHaveBeenCalled();
});

it('button with mock click', () => {
  function MySpy() {
    this.calls = 0;
  }

  MySpy.prototype.fn = function() {
    return () => this.calls++;
  };

  const myspy = new MySpy();
  const mockCallBack = myspy.fn();
  const wrapper = shallow(<Button onClick={mockCallBack} />);
  wrapper
    .find('Button')
    .props()
    .onClick();
  wrapper.debug();

  expect(myspy.calls).toEqual(1);
});
