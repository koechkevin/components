import { boolean, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { Col, Row, Typography } from 'antd';

import React from 'react';

import ThemedRadio from './ThemedRadio';

const stories = storiesOf('Radio Button', module);

stories.addDecorator((story) => <Row>{story()}</Row>);

stories.add('Themed Radio', () => {
  return (
    <Row type="flex" style={{ padding: '5%'}} justify="center" gutter={12}>
      <Col span={8}>
        <Typography.Text strong>Blue or Primary Theme</Typography.Text>
        <ThemedRadio checked={true} label="Admin" theme="blue" onSelect={() => {}} />
      </Col>
      <Col span={8}>
        <Typography.Text strong>Green Theme</Typography.Text>
        <ThemedRadio checked={true} label="Recruiter" theme="green" onSelect={() => {}} />
      </Col>
      <Col span={8}>
        <Typography.Text strong>Gold Theme</Typography.Text>
        <ThemedRadio checked={true} label="Owner" theme="gold" onSelect={() => {}} />
      </Col>
      <Col span={8}>
        <Typography.Text strong>Purple Theme</Typography.Text>
        <ThemedRadio checked={true} label="Billing" theme="purple" onSelect={() => {}} />
      </Col>

      <Col span={8}>
        <Typography.Text strong>Toggle theme and Checked using knobs</Typography.Text>
        <ThemedRadio
          checked={boolean('checked', true)}
          label="Owner"
          theme={select('theme', ['purple', 'green', 'blue', 'gold'], 'green')}
          onSelect={() => {}}
        />
      </Col>
    </Row>
  );
});
