import { faCheckCircle, faExclamationCircle, faSearch } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { action } from '@storybook/addon-actions';
import * as Knobs from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { Col, Form, Row, Typography } from 'antd';
import React from 'react';

import Input from './Input';
import Textarea from './Textarea';

const { Title, Text } = Typography;
const text: string =
  'This is the third article of a three-part series. I’m illustrating the marketing challenges of PrescottWeddings.com, a small business. If you don’t remember anything else about marketing, remember this: Frequency is king.\nThe more often you can get your name in front of your potential and current customers, the more likely you will make a sale.';

storiesOf('Input', module)
  .addDecorator((story) => <div style={{ padding: 24 }}>{story()}</div>)
  .add(
    'default',
    () => (
      <Form>
        <Row>
          <Title level={2} style={{ marginBottom: 0 }}>
            Inputs
          </Title>
          <Text>Main</Text>
        </Row>
        <Row gutter={24} align="middle" type="flex" style={{ marginTop: 32 }}>
          <Col span={4} />
          <Col span={6}>
            <Text strong>Empty state</Text>
          </Col>
          <Col span={6}>
            <Text strong>Value</Text>
          </Col>
          <Col span={6}>
            <Text strong>Input + Hint</Text>
          </Col>
        </Row>
        <Row gutter={24} align="middle" type="flex" style={{ marginTop: 32 }}>
          <Col span={4}>
            <Text strong>Rest</Text>
          </Col>
          <Col span={6}>
            <Input label={Knobs.text('First Rest Label', 'Label')} onChange={action('onChange')} />
          </Col>
          <Col span={6}>
            <Input label={Knobs.text('Second Rest Label', 'Label')} value="Value" onChange={action('onChange')} />
          </Col>
          <Col span={6}>
            <Input label={Knobs.text('Third Rest Label', 'Label')} value="Value" onChange={action('onChange')} />
          </Col>
        </Row>
        <Row gutter={24} align="middle" type="flex" style={{ marginTop: 32 }}>
          <Col span={4}>
            <Text strong>Hover</Text>
          </Col>
          <Col span={6}>
            <Input label={Knobs.text('First Hover Label', 'Label')} onChange={action('onChange')} />
          </Col>
          <Col span={6}>
            <Input label={Knobs.text('Second Hover Label', 'Label')} value="Value" onChange={action('onChange')} />
          </Col>
          <Col span={6} />
        </Row>
        <Row gutter={24} align="middle" type="flex" style={{ marginTop: 32 }}>
          <Col span={4}>
            <Text strong>Active</Text>
          </Col>
          <Col span={6}>
            <Input label={Knobs.text('First Active Label', 'Label')} onChange={action('onChange')} />
          </Col>
          <Col span={6}>
            <Input label={Knobs.text('Second Active Label', 'Label')} value="Value" onChange={action('onChange')} />
          </Col>
          <Col span={6}>
            <Input label={Knobs.text('Third Active Label', 'Label')} value="Value" onChange={action('onChange')} />
          </Col>
        </Row>
        <Row gutter={24} align="middle" type="flex" style={{ marginTop: 32 }}>
          <Col span={4}>
            <Text strong>Success</Text>
          </Col>
          <Col span={6}>
            <Input
              validateStatus="success"
              label={Knobs.text('First Success Label', 'Label')}
              help={Knobs.text('Success field message', ' ')}
              onChange={action('onChange')}
            />
          </Col>
          <Col span={6}>
            <Input
              label={Knobs.text('Second Success label', 'Label')}
              value="Value"
              validateStatus="success"
              help={Knobs.text('Success field message', ' ')}
              onChange={action('onChange')}
            />
          </Col>
          <Col span={6}>
            <Input
              label={Knobs.text('Third Success label', 'Label')}
              value="Value"
              validateStatus="success"
              help={Knobs.text('Third Success field message', 'Hint')}
              onChange={action('onChange')}
              suffix={
                <Row type="flex" align="middle" justify="center" style={{ width: '32px', height: '32px' }}>
                  <FontAwesomeIcon icon={faCheckCircle} />
                </Row>
              }
            />
          </Col>
        </Row>
        <Row gutter={24} align="middle" type="flex" style={{ marginTop: 32 }}>
          <Col span={4}>
            <Text strong>Error</Text>
          </Col>
          <Col span={6}>
            <Input
              validateStatus="error"
              help={Knobs.text('First error field Message', 'Error Message')}
              label={Knobs.text('First Error Label', 'Label')}
              onChange={action('onChange')}
            />
          </Col>
          <Col span={6}>
            <Input
              label={Knobs.text('Second Error label', 'Label')}
              value="Value"
              help={Knobs.text('Second field error message', 'Error Message')}
              validateStatus="error"
              onChange={action('onChange')}
            />
          </Col>
          <Col span={6}>
            <Input
              label={Knobs.text('Third Error label', 'Label')}
              value="Value"
              validateStatus="error"
              help={Knobs.text('Third error field message', 'Error Message')}
              onChange={action('onChange')}
              suffix={
                <Row type="flex" align="middle" justify="center" style={{ width: '32px', height: '32px' }}>
                  <FontAwesomeIcon icon={faExclamationCircle} />
                </Row>
              }
            />
          </Col>
        </Row>
        <Row gutter={24} align="middle" type="flex" style={{ marginTop: 32 }}>
          <Col span={4}>
            <Text strong>Disabled</Text>
          </Col>
          <Col span={6}>
            <Input
              label={Knobs.text('Disabled Label', 'Label')}
              onChange={action('onChange')}
              value="Value"
              disabled={Knobs.boolean('disabled', true)}
            />
          </Col>
        </Row>
        <Row gutter={24} align="middle" type="flex" style={{ marginTop: 32 }}>
          <Col span={4}>
            <Text strong>Password</Text>
          </Col>
          <Col span={6}>
            <Input label={Knobs.text('Label', 'Password')} onChange={action('onChange')} password />
          </Col>
        </Row>
        <Row gutter={24} align="middle" type="flex" style={{ marginTop: 32 }}>
          <Col span={4}>
            <Text strong>With Prefix</Text>
          </Col>
          <Col span={6}>
            <Input
              label={Knobs.text('Prefix Label', 'Search')}
              onChange={action('onChange')}
              prefix={
                <Row type="flex" align="middle" justify="center" style={{ width: '32px', height: '32px' }}>
                  <FontAwesomeIcon icon={faSearch} />
                </Row>
              }
            />
          </Col>
        </Row>
        <Title level={2} style={{ marginBottom: 0 }}>
          Textarea
        </Title>
        <Row gutter={24} align="middle" type="flex" style={{ marginTop: 32 }}>
          <Col span={4}>
            <Text strong>Rest</Text>
          </Col>
          <Col span={12}>
            <Textarea label={Knobs.text('First textarea Label', 'Label')} onChange={action('onChange')} />
          </Col>
        </Row>
        <Row gutter={24} align="middle" type="flex" style={{ marginTop: 32 }}>
          <Col span={4}>
            <Text strong>Calm + Value</Text>
          </Col>
          <Col span={12}>
            <Textarea
              label={Knobs.text('Second textarea Label', 'Label')}
              value={text}
              autosize={{ minRows: 2, maxRows: 3 }}
              onChange={action('onChange')}
            />
          </Col>
        </Row>
        <Row gutter={24} align="middle" type="flex" style={{ marginTop: 32 }}>
          <Col span={4}>
            <Text strong>Text Area with Error and help</Text>
          </Col>
          <Col span={12}>
            <Textarea
              label={Knobs.text('Text area with help validate status', 'Label')}
              onChange={action('onChange')}
              help={'Error message'}
              validateStatus={'error'}
            />
          </Col>
        </Row>
        <Row gutter={24} align="middle" type="flex" style={{ marginTop: 32 }}>
          <Col span={4}>
            <Text strong>Text Area Success</Text>
          </Col>
          <Col span={12}>
            <Textarea
              label={Knobs.text('Text area with help validate status', 'Label')}
              onChange={action('onChange')}
              help={'Hint'}
              validateStatus={'success'}
              value={text}
            />
          </Col>
        </Row>
      </Form>
    ),
    {
      notes: 'Input components library',
    },
  );
