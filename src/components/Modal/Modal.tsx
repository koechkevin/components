import { faTimes } from '@fortawesome/pro-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Modal as AntModal, Row } from 'antd';
import { ButtonProps } from 'antd/lib/button';
import { ModalProps } from 'antd/lib/modal';
import React, { FC, MouseEvent, ReactNode } from 'react';
import { useMedia } from 'react-use';

import Button from '../Button/Button';
import styles from './Modal.module.scss';

interface FooterProps {
  okText?: string | ReactNode;
  okButtonProps?: ButtonProps;
  cancelText?: string | ReactNode;
  cancelButtonProps?: ButtonProps;
  onOk?: (e: MouseEvent<any>) => void;
  onCancel?: (e: MouseEvent<any>) => void;
}

export const Footer: FC<FooterProps> = (props) => {
  const { onOk, okText, cancelText, onCancel, okButtonProps, cancelButtonProps } = props;
  const isMobile = useMedia('(max-width: 575px)');

  return (
    <Row type="flex" align="middle" justify="end">
      <Button onClick={onCancel} block={isMobile} type="link" {...cancelButtonProps}>
        {cancelText || 'Cancel'}
      </Button>
      <Button type="primary" block={isMobile} size="large" onClick={onOk} {...okButtonProps}>
        {okText || 'Ok'}
      </Button>
    </Row>
  );
};

export const Modal: React.FC<ModalProps> = (props) => {
  const {
    onOk,
    okText,
    onCancel,
    className,
    children,
    cancelText,
    okButtonProps,
    confirmLoading,
    cancelButtonProps,
    ...restProps
  } = props;
  const customProps = { ...okButtonProps, loading: confirmLoading };
  const classNames = [styles.modal, className ? className : ''].join(' ');

  return (
    <AntModal
      centered
      onCancel={onCancel}
      className={classNames}
      mask={window.innerWidth > 768}
      closeIcon={<FontAwesomeIcon icon={faTimes} />}
      footer={
        <Footer
          onOk={onOk}
          okText={okText}
          onCancel={onCancel}
          cancelText={cancelText}
          okButtonProps={customProps}
          cancelButtonProps={cancelButtonProps}
        />
      }
      {...restProps}
    >
      {children}
    </AntModal>
  );
};

export default Modal;
