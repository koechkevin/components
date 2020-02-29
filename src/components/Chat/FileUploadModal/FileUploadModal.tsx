import { Col, Row } from 'antd';
import { ModalProps } from 'antd/lib/modal';
import { RcFile } from 'antd/lib/upload';
import React, { ChangeEvent, FC, MouseEvent, useEffect, useState } from 'react';
import TextArea from 'react-textarea-autosize';
import { useMedia } from 'react-use';

import { FileExtension, selectIcon } from '../../../utils';
import { Icon } from '../../Icon';
import { Modal } from '../../Modal';
import { Tooltip } from '../../Tooltip';

import styles from './FileUploadModal.module.scss';

interface Props extends ModalProps {
  file: RcFile;
  text?: string;
  extension?: FileExtension;
}

const FileUploadModal: FC<Props> = (props) => {
  const { extension, text, file, onOk, onCancel, ...otherProps } = props;
  const [value, setValue] = useState<any>(text);
  const isMobile = useMedia('(max-width: 575px)');

  useEffect(() => {
    if (text) {
      setValue(text);
    }
  }, [setValue, text]);

  const handleCancel = (e: MouseEvent<HTMLElement>) => {
    onCancel && onCancel(e);
  };

  const handleOk = () => {
    onOk && onOk(value);
  };

  return (
    <Modal
      centered
      width={500}
      okText="Upload"
      onOk={handleOk}
      title="Upload a file"
      onCancel={handleCancel}
      afterClose={() => setValue('')}
      {...otherProps}
    >
      <Row>
        <Row className={styles.fileContainer}>
          <Row className={styles.content} type="flex" align="middle">
            <Col className={styles.file}>
              <Icon icon={selectIcon(extension)} className={styles.icon} />
            </Col>
            <Tooltip title={file?.name}>
              <Col className={styles.fileName}>{file?.name}</Col>
            </Tooltip>
          </Row>
        </Row>
        <Row className={styles.textArea}>
          <TextArea
            min={3}
            autoFocus
            value={value}
            className="ant-input"
            maxRows={isMobile ? 5 : 8}
            style={{ minHeight: 80 }}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setValue(e.target.value)}
          />
        </Row>
      </Row>
    </Modal>
  );
};

export default FileUploadModal;
