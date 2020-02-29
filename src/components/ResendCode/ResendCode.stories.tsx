import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { Col, Row } from 'antd';
import React, { FC, useState } from 'react';

import { Button } from '../Button';
import ResendCode from './ResendCode';

const stories = storiesOf('Resend Code', module);

stories.addDecorator(withKnobs);

const Default: FC<{ email: string; loading: boolean }> = (props) => {
  const { email, loading } = props;
  const [visible, setIsVisible] = useState<boolean>(false);

  const handleOnOk = () => {
    setIsVisible(false);
  };

  return (
    <Row style={{ height: '100vh' }} type="flex" justify="space-around" align="middle">
      <Col>
        <Button onClick={() => setIsVisible(true)} type="primary">
          Click to open modal to resend verification code
        </Button>
        <ResendCode
          loading={loading}
          visible={visible}
          email={email}
          onOk={() => handleOnOk()}
          onCancel={() => setIsVisible(false)}
        />
      </Col>
    </Row>
  );
};

stories.add('default', () => {
  const email = text('Email', 'username@aurora.app');
  const loading = boolean('Loading', false);
  return <Default email={email} loading={loading} />;
});
