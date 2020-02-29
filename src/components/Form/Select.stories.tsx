import { storiesOf } from '@storybook/react';
import { Col, Form as AntdForm, Row } from 'antd';
import React from 'react';

import NativeSelect from './NativeSelect';
import Select from './Select';

const sampleOptions1 = Array(100)
  .fill(1996)
  .map((e, i) => ({ value: e + i }));
const sampleOptions2 = [
  { value: 'January' },
  { value: 'February' },
  { value: 'March' },
  { value: 'April' },
  { value: 'May' },
  { value: 'June' },
];

// example with antd form functions
const TestForm: React.FC<any> = (props) => {
  return (
    <AntdForm>
      {props.form.getFieldDecorator(
        'decorator',
        {},
      )(<Select showSearch label="Months (Rest)" options={sampleOptions2} />)}
    </AntdForm>
  );
};

const Form = AntdForm.create<any>()(TestForm);

storiesOf('Select', module)
  .add('Select Component', () => (
    <Row style={{ height: '80vh', marginTop: '15%' }}>
      <Row type="flex" align="middle" justify="space-around" gutter={12}>
        <Col span={8}>
          <Select id="label-1" options={sampleOptions1} label={'Label'} defaultValue={2000} />
        </Col>
        <Col span={8}>
          <Form />
        </Col>
      </Row>
      <Row type="flex" align="middle" justify="space-around" gutter={12}>
        <Col span={8}>
          <Select
            id="label-3"
            label="Success"
            help="Hint"
            validateStatus="success"
            showSearch
            options={sampleOptions2}
            defaultValue={'January'}
          />
        </Col>
        <Col span={8}>
          <Select
            label="Error"
            id="label-4"
            showSearch
            options={sampleOptions2}
            validateStatus={'error'}
            help={'Error'}
          />
        </Col>
      </Row>
    </Row>
  ))
  .add('Native Select', () => {
    return (
      <Row gutter={12} type="flex" justify="space-around">
        <Col style={{ height: 100 }} sm={8}>
          <NativeSelect defaultValue={'April'} options={sampleOptions2} label="Label" />
        </Col>
        <Col sm={8}>
          <NativeSelect defaultValue={'June'} options={sampleOptions2} label="Label" />
        </Col>
        <Col sm={10}>
          <NativeSelect options={sampleOptions2} label="Rest Native Select" />
        </Col>
      </Row>
    );
  });
