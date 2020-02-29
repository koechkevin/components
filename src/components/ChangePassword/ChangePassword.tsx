import { Form, Row } from 'antd';
import { FormComponentProps } from 'antd/lib/form';
import React, { FC, useEffect } from 'react';

import { Input } from '../Form';
import { Modal } from '../Modal';

type ValidateStatus = 'error' | 'warning' | 'success' | 'validating' | '';

interface Props extends FormComponentProps {
  errors: any[];
  visible: boolean;
  loading: boolean;
  validateStatus?: ValidateStatus;
  onCancel: () => void;
  onOk: (data: any) => void;
}

const ChangePassword: FC<Props> = (props) => {
  const { form, onOk, errors, visible, loading, onCancel, validateStatus } = props;
  const {
    setFields,
    resetFields,
    getFieldValue,
    getFieldsValue,
    getFieldError,
    validateFields,
    getFieldDecorator,
  } = form;
  const { currentPassword, newPassword, confirmNewPassword } = getFieldsValue();

  useEffect(() => {
    if (errors && errors.length > 0) {
      errors.forEach((error: any) => {
        setFields({
          [error.field]: {
            value: getFieldValue(error.field),
            errors: [error],
          },
        });
      });
    }
  }, [errors, setFields, getFieldValue]);

  const onSubmit = (e: any) => {
    e.preventDefault();

    validateFields((errors: any, values: any) => {
      if (!errors) {
        onOk(values);
      }
    });
  };

  return (
    <Modal
      width={500}
      visible={visible}
      afterClose={resetFields}
      title="Change Password"
      okText="Change Password"
      onOk={onSubmit}
      onCancel={onCancel}
      okButtonProps={{
        loading,
        style: { minWidth: 168 },
        disabled: !(currentPassword && newPassword && confirmNewPassword),
      }}
    >
      <Form>
        <Row>
          {getFieldDecorator('currentPassword')(
            <Input
              password
              maxLength={25}
              label="Current password"
              validateStatus={getFieldError('currentPassword') && !currentPassword ? 'error' : validateStatus}
              help={getFieldError('currentPassword') || ''}
            />,
          )}
        </Row>
        <Row>
          {getFieldDecorator('newPassword')(
            <Input
              password
              maxLength={25}
              label="New password"
              autoComplete="new-password"
              validateStatus={getFieldError('newPassword') && !newPassword ? 'error' : validateStatus}
              help={getFieldError('newPassword') || ''}
            />,
          )}
        </Row>
        <Row>
          {getFieldDecorator('confirmNewPassword')(
            <Input
              password
              maxLength={25}
              style={{ marginBottom: 0 }}
              label="Confirm new password"
              autoComplete="new-password"
              validateStatus={getFieldError('confirmNewPassword') && !confirmNewPassword ? 'error' : validateStatus}
              help={getFieldError('confirmNewPassword') || ''}
            />,
          )}
        </Row>
      </Form>
    </Modal>
  );
};

export default Form.create<Props>()(ChangePassword);
