import { Row } from 'antd';
import React, { FC, FormEvent } from 'react';

import Button from '../Button/Button';
import { Modal } from '../Modal';
import { Paragraph, Text } from '../Typography';
import styles from './ResendCode.module.scss';

interface Props {
  email: string;
  visible: boolean;
  loading: boolean;
  onCancel: () => void;
  onOk: () => void;
}

const ResendCode: FC<Props> = (props) => {
  const { email, onOk, visible, loading, onCancel } = props;

  const handleOk = (e: FormEvent) => {
    e.preventDefault();
    onOk();
  };

  const handleCancel = (e: FormEvent) => {
    onCancel();
  };

  return (
    <Modal
      visible={visible}
      title="Resend a verification code"
      okText="Resend"
      onCancel={handleCancel}
      footer={[
        <Button className={styles.button} key="back" onClick={handleCancel}>
          Cancel
        </Button>,
        <Button className={styles.button} key="submit" type="primary" loading={loading} onClick={handleOk}>
          Resend
        </Button>,
      ]}
      className={styles.modalContent}
    >
      <Row type="flex" align="middle" justify="start" className={styles.formDetails}>
        <Paragraph type="secondary">
          We sent you a verification email at{' '}
          <Text className={styles.emailText} strong type="primary">
            {email}
          </Text>{' '}
          Please:
        </Paragraph>
      </Row>
      <Row className={styles.formOptions}>
        <Paragraph type="secondary">1) Verify the email is correct.</Paragraph>
      </Row>
      <Row className={styles.formOptions}>
        <Paragraph type="secondary">2) Check your SPAM folder.</Paragraph>
      </Row>
    </Modal>
  );
};

export default ResendCode;
