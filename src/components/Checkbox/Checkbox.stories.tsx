// React libraries
import { storiesOf } from '@storybook/react';
import { Card, Row } from 'antd';
import React, { CSSProperties } from 'react';

import { Center } from '../Center';
import Checkbox from './Checkbox';

const stories = storiesOf('CheckBox', module).addDecorator((story) => <Center>{story()}</Center>);
const item1 = {
  name: 'Off',
};
const item2 = {
  name: 'On',
};
const item3 = {
  name: 'Off Disabled',
};
const item4 = {
  name: 'On Disabled',
  disabled: true,
};
const item5 = {
  name: 'As Button',
};
const gridStyle: CSSProperties = {
  marginTop: '5rem',
};

const handleCheckBoxChange = (event: any) => null;

stories.add(
  'CheckBox',
  () => (
    <>
      <Row gutter={24}>
        <Card style={gridStyle}>
          <Checkbox name={item1.name} onChange={handleCheckBoxChange}>
            {item1.name}
          </Checkbox>
          <br />
          <Checkbox name={item2.name} onChange={handleCheckBoxChange}>
            {item2.name}
          </Checkbox>
          <br />
          <Checkbox name={item3.name} onChange={handleCheckBoxChange}>
            {item3.name}
          </Checkbox>
          <br />
          <Checkbox name={item4.name} disabled={item4.disabled} onChange={handleCheckBoxChange}>
            {item4.name}
          </Checkbox>
          <br />
          <Checkbox name={item5.name} button onChange={handleCheckBoxChange}>
            {item5.name}
          </Checkbox>
        </Card>
      </Row>
    </>
  ),
  {
    notes: 'CheckBox component',
  },
);
