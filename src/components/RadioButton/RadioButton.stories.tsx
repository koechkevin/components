import { storiesOf } from '@storybook/react';
import { Col, Row, Typography } from 'antd';

import React from 'react';

import RadioButton from './RadioButton';

const stories = storiesOf('Radio Button', module);

stories.addDecorator((story) => <Row>{story()}</Row>);

stories.add('default', () => {
  return (
    <Row type="flex" style={{ padding: '5%' }} justify="center" gutter={12}>
      <Col span={24}>
        <Typography.Text strong>Normal button</Typography.Text>
        <br />
        <RadioButton>Yes</RadioButton>
      </Col>
      <Col span={24}>
        <Typography.Text strong>Disabled Button</Typography.Text>
        <br />
        <RadioButton disabled>Disabled</RadioButton>
      </Col>
    </Row>
  );
});
