import { Dropdown } from 'antd';
import { mount } from 'enzyme';
import React from 'react';

import { Tooltip } from '../../../Tooltip';
import StartThreadMenu from '../../StartThreadMenu/StartThreadMenu';
import HoverMenu from '../HoverMenu';

describe('Tests for Hover menu component', () => {
  const startThreadFn = jest.fn();
  const actionMenu = <div>Mock Component</div>;
  const startThreadMenu = <StartThreadMenu startThread={startThreadFn} messageId={'sample message id'} />;

  const props = {
    actionMenu,
    startThreadMenu,
  };

  const wrapper = mount(<HoverMenu {...props} />);

  it('should mount hover menu component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should simulate hover on the tooltip', () => {
    const toolTipComponent = wrapper.find(Tooltip).first();

    expect(toolTipComponent.simulate('mouseOver').contains('Start a thread'));
  });

  it('should simulate clicking of start thread tooltip', () => {
    const toolTipComponent = wrapper.find(Tooltip).first();
    const clickableDivElement = toolTipComponent.find('div').first();

    clickableDivElement.simulate('click');

    expect(startThreadFn).toHaveBeenCalled();
  });

  it('should simulate rendering of drop down to the bottom right', () => {
    const dropDown = wrapper.find(Dropdown).first();

    expect(dropDown.props().placement).toEqual('bottomRight');
  });

  it('should simulate clicking of the bottom right drop down', () => {
    const dropDown = wrapper.find(Dropdown).first();
    dropDown
      .find('div')
      .first()
      .simulate('click');

    expect(wrapper.props().actionMenu).toEqual(actionMenu);
  });

  it('should render more actions tooltip', () => {
    const toolTip = wrapper.find('Tooltip').last();

    expect(toolTip.props().title).toEqual('More actions');
  });

  it('should simulate click of more actions tooltip to set color', () => {
    const toolTip = wrapper
      .find('Tooltip')
      .last()
      .find('div')
      .first()
      .simulate('click');

    expect(toolTip.find('.select').exists()).toEqual(true);
  });
});
