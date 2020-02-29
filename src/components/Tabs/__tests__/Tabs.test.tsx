import { Tabs as AntdTabs } from 'antd';
import { mount } from 'enzyme';
import React from 'react';

import Tabs from '../Tabs';

const { TabPane } = AntdTabs;

describe('Tests for Tabs component', () => {
  const wrapper = mount(
    <Tabs>
      <TabPane tab="Tab 1" key="1">
        Content of Tab Pane 1
      </TabPane>
      <TabPane tab="Tab 2" key="2">
        Content of Tab Pane 2
      </TabPane>
      <TabPane tab="Tab 3" key="3">
        Content of Tab Pane 3
      </TabPane>
    </Tabs>,
  );

  it('should render Tabs without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render Tabs style class', () => {
    expect(wrapper.find('.tabs').exists()).toEqual(true);
  });
});
