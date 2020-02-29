import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { Col, Row, Steps as AntdSteps } from 'antd';

import React from 'react';

import Stepper, { StepTitle } from './Stepper';

const stories = storiesOf('Stepper', module);

const { Step } = AntdSteps;

stories.addDecorator((story) => <Row style={{ background: 'white', height: '100vh', padding: 32 }}>{story()}</Row>);

stories.add('default', () => (
  <Row gutter={12}>
    <Col span={8}>
      <Stepper onChange={action('change')} current={5}>
        <Step title={<StepTitle required title="Resume" />} />
        <Step title="Overview" />
        <Step title="Work History" />
        <Step title="Education" />
        <Step title="Skills" />
        <Step title={<StepTitle required title="Languages" />} />
        <Step title={<StepTitle required={false} title="Portfolio" />} disabled />
        <Step title={<StepTitle required title="Questions" />} disabled />
        <Step title="Military History" disabled />
        <Step title="Contact Information" disabled />
        <Step title="Cover Letter" disabled />
        <Step title="EOE Survey" disabled />
        <Step title="Review and Apply" disabled />
      </Stepper>
    </Col>
    <Col span={8}>
      <Stepper current={1}>
        <Step title="Step 1" description="Details, Location, Terms, description and requirements" />
        <Step title="Step 2" description="Other details" />
        <Step title="Step 3" description="Details, Location, Terms, description and requirements" />
      </Stepper>
    </Col>
  </Row>
));
