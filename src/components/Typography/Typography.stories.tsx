import { storiesOf } from '@storybook/react';
import { Col, Row } from 'antd';
import React from 'react';

import { Paragraph, Text, Title } from './Typography';

storiesOf('Typography', module)
  .addDecorator((story) => <div style={{ padding: 32 }}>{story()}</div>)
  .add('default', () => (
    <>
      <Row gutter={24} align="middle" type="flex">
        <Col span={12}>
          <Text strong>NAME</Text>
        </Col>
        <Col span={6}>
          <Text strong>FONT SIZE</Text>
        </Col>
        <Col span={6}>
          <Text strong>LINE HEIGHT</Text>
        </Col>
      </Row>
      <Row gutter={24} align="middle" type="flex" style={{ marginTop: 24 }}>
        <Col span={12}>
          <Title level={1}>Heading 01</Title>
        </Col>
        <Col span={6}>
          <Title level={1}>48px</Title>
        </Col>
        <Col span={6}>
          <Title level={1}>72px</Title>
        </Col>
      </Row>
      <Row gutter={24} align="middle" type="flex" style={{ marginTop: 24 }}>
        <Col span={12}>
          <Title level={2}>Heading 02</Title>
        </Col>
        <Col span={6}>
          <Title level={2}>32px</Title>
        </Col>
        <Col span={6}>
          <Title level={2}>48px</Title>
        </Col>
      </Row>
      <Row gutter={24} align="middle" type="flex" style={{ marginTop: 24 }}>
        <Col span={12}>
          <Title level={3}>Heading 03</Title>
        </Col>
        <Col span={6}>
          <Title level={3}>24px</Title>
        </Col>
        <Col span={6}>
          <Title level={3}>32px</Title>
        </Col>
      </Row>
      <Row gutter={24} align="middle" type="flex" style={{ marginTop: 24 }}>
        <Col span={12}>
          <Paragraph strong>Paragraph</Paragraph>
        </Col>
        <Col span={6}>
          <Paragraph strong>16px</Paragraph>
        </Col>
        <Col span={6}>
          <Paragraph strong>24px</Paragraph>
        </Col>
      </Row>
      <Row gutter={24} align="middle" type="flex" style={{ marginTop: 24 }}>
        <Col span={12}>
          <Text strong style={{ fontSize: 12 }}>
            Labels
          </Text>
        </Col>
        <Col span={6}>
          <Text strong style={{ fontSize: 12 }}>
            12px
          </Text>
        </Col>
        <Col span={6}>
          <Text strong style={{ fontSize: 12 }}>
            18px
          </Text>
        </Col>
      </Row>
    </>
  ));
