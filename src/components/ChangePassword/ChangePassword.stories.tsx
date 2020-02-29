import { storiesOf } from '@storybook/react';
import { Col, Row } from 'antd';
import React, { FC } from 'react';

import { Button } from '../Button';
import ChangePassword from './ChangePassword';

const stories = storiesOf('Change Password', module);

const Default: FC<{}> = () => {
  const [visible, setIsVisible] = React.useState<boolean>(false);

  return (
    <Row style={{ height: '100vh' }} type="flex" justify="space-around" align="middle">
      <Col>
        <Button onClick={() => setIsVisible(true)} type="primary">
          Click to open modal to change password
        </Button>
        <ChangePassword
          errors={[]}
          loading={false}
          visible={visible}
          validateStatus=""
          onOk={(values) => {}}
          onCancel={() => setIsVisible(false)}
        />
      </Col>
    </Row>
  );
};

const WithErrors: FC<{}> = () => {
  const [visible, setIsVisible] = React.useState<boolean>(false);
  const errors = [
    {
      field: 'currentPassword',
      message: 'Password does not match',
    },
    {
      field: 'newPassword',
      message: 'Password must contain at least: 1 lowercase char, 1 UPPERCASE char, 1 special char or number',
    },
    {
      field: 'confirmNewPassword',
      message: 'Confirm New Password must be equal to "New Password".',
    },
  ];

  return (
    <Row style={{ height: '100vh' }} type="flex" justify="space-around" align="middle">
      <Col>
        <Button onClick={() => setIsVisible(true)} type="primary">
          Click to open modal to change password with pre populated errors
        </Button>
        <ChangePassword
          visible={visible}
          errors={errors}
          loading={false}
          validateStatus=""
          onOk={() => {}}
          onCancel={() => setIsVisible(false)}
        />
      </Col>
    </Row>
  );
};

stories.add('default', () => {
  return <Default />;
});

stories.add('with errors', () => {
  return <WithErrors />;
});
