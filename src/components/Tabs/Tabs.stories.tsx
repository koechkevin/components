import { faFolderOpen, faHeart, faStar } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { storiesOf } from '@storybook/react';
import { Tabs as AntdTabs } from 'antd';
import React from 'react';

import { Center } from '../Center';
import Tabs from './Tabs';

const { TabPane } = AntdTabs;
const stories = storiesOf('Tabs', module);

stories.addDecorator((story) => <Center>{story()}</Center>);

stories
  .add(
    'Tabs',
    () => (
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
      </Tabs>
    ),
    {
      notes: 'Tabs library component',
    },
  )
  .add(
    'Tabs with icons',
    () => (
      <Tabs>
        <TabPane
          tab={
            <span>
              <FontAwesomeIcon icon={faHeart} style={{ marginRight: 9 }} />
              Tab 1
            </span>
          }
          key="1"
        >
          Content of Tab Pane 1
        </TabPane>
        <TabPane
          tab={
            <span>
              <FontAwesomeIcon icon={faStar} style={{ marginRight: 9 }} />
              Tab 2
            </span>
          }
          key="2"
        >
          Content of Tab Pane 2
        </TabPane>
        <TabPane
          tab={
            <span>
              <FontAwesomeIcon icon={faFolderOpen} style={{ marginRight: 9 }} />
              Tab 3
            </span>
          }
          key="3"
        >
          Content of Tab Pane 3
        </TabPane>
      </Tabs>
    ),
    {
      notes: 'Tabs library component',
    },
  )
  .add(
    'Vertical position',
    () => (
      <Tabs tabPosition="left">
        <TabPane tab="Tab 1" key="1">
          Content of Tab Pane 1
        </TabPane>
        <TabPane tab={'Tab 2'} key="2">
          Content of Tab Pane 2
        </TabPane>
        <TabPane tab="Tab 3" key="3">
          Content of Tab Pane 3
        </TabPane>
      </Tabs>
    ),
    {
      notes: 'Tabs library component',
    },
  );
