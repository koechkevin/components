import { Col, Row } from 'antd';
import { ModalProps } from 'antd/lib/modal';
import React, { createRef, FC, useEffect } from 'react';

import { MessageItemProps } from '../../../typings/Message';
import { FileExtension, getNameInitials, timestampFormat } from '../../../utils';
import { ProductType } from '../../../utils';
import { Avatar } from '../../Avatar';
import { FileItem } from '../../FileUpload';
import { Modal } from '../../Modal';
import { Text } from '../../Typography';

import styles from './MessageDeleteModal.module.scss';

interface Props extends ModalProps {
  message: MessageItemProps;
}

const MessageDeleteModal: FC<Props> = (props) => {
  const { visible, message, ...otherProps } = props;
  const { author, text, createdAt, file } = message || {};
  const isCandidate: boolean = author && author.productId === ProductType.Company ? false : true;
  const textRef = createRef<HTMLDivElement>();

  useEffect(() => {
    setTimeout(() => {
      if (textRef && textRef.current) {
        textRef.current.innerHTML = text || '';
      }
    }, 100);
  }, [visible, textRef, text]);

  return (
    <Modal
      centered
      width={500}
      okText="Delete"
      visible={visible}
      title="Delete Message"
      className={styles.deleteModal}
      okButtonProps={{ type: 'danger' }}
      {...otherProps}
    >
      <Row>
        <Row type="flex" justify="center">
          <Text style={{ textAlign: 'center' }}>
            Are you sure you want to delete this message?
            <br /> This cannot be undone
          </Text>
        </Row>
        <Row className={styles.content} type="flex">
          <Col>
            {author && (
              <Avatar
                size={40}
                src={author.avatar}
                shape={isCandidate ? 'square' : 'circle'}
                style={{ background: author.avatarColor }}
              >
                {getNameInitials(author.name)}
              </Avatar>
            )}
          </Col>
          <Col className={styles.message}>
            {author && (
              <Row>
                <span className={styles.creator}>{author.name} </span>
                <span className={styles.createdAt}>{createdAt && timestampFormat(new Date(createdAt))} </span>
              </Row>
            )}
            <Row className={styles.text}>
              <div id="text" ref={textRef} />
              {file && (
                <FileItem
                  {...file}
                  name={file.filename || file.name}
                  extension={file.type as FileExtension}
                  style={{ margin: '8px 0' }}
                />
              )}
            </Row>
          </Col>
        </Row>
      </Row>
    </Modal>
  );
};

export default MessageDeleteModal;
