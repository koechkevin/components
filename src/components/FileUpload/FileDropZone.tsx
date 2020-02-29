import { faRedoAlt } from '@fortawesome/pro-regular-svg-icons';
import { faArrowUp, faExclamationTriangle, faTimesCircle } from '@fortawesome/pro-solid-svg-icons';
import { Row, Upload } from 'antd';
import { UploadProps } from 'antd/lib/upload';
import React, { CSSProperties, FC, ReactNode } from 'react';

import { Button } from '../Button';
import { Icon } from '../Icon';
import { Tooltip } from '../Tooltip';
import { UploadFileStatus } from './interface.d';

import styles from './FileDropZone.module.scss';

const { Dragger } = Upload;

interface Props extends UploadProps {
  name?: string;
  title?: ReactNode;
  statusInfo?: string;
  buttonText?: string;
  wrapStyle?: CSSProperties;
  contentStyle?: CSSProperties;
  status?: UploadFileStatus;
  wrapClassName?: string;
  contentClassName?: string;
  handleUpload?: (e: any) => void;
}

export const FileDropZone: FC<Props> = (props) => {
  const {
    title,
    name,
    status,
    wrapStyle,
    statusInfo,
    buttonText,
    contentStyle,
    wrapClassName,
    contentClassName,
    handleUpload,
    ...restProps
  } = props;
  const isCanceled = status === 'error';
  const visible = status === 'error' || status === 'removed';
  const cls = [styles.container, wrapClassName || ''].join(' ');
  const content = [styles.content, contentClassName || ''].join(' ');
  const statusCls = [styles.statusIcon, isCanceled ? styles.exclamationTriangle : styles.timesCircle].join(' ');

  return (
    <Row className={cls} style={wrapStyle}>
      <Row className={content} style={contentStyle}>
        {visible && (
          <Row className={styles.fileWrapper} type="flex" align="middle" justify="space-between">
            <Row type="flex" align="middle" style={{ flex: '1 auto' }}>
              <Icon icon={isCanceled ? faExclamationTriangle : faTimesCircle} className={statusCls} />
              <Row>
                <Tooltip placement="top" title={name}>
                  <Row className={styles.filename}>{name}</Row>
                </Tooltip>
                <Row className={styles.statusInfo}>{statusInfo}</Row>
              </Row>
            </Row>
            {isCanceled && (
              <Tooltip placement="top" title="Upload Again">
                <Icon hover icon={faRedoAlt} onClick={handleUpload} />
              </Tooltip>
            )}
          </Row>
        )}
        <Dragger showUploadList={false} openFileDialogOnClick={false} {...restProps}>
          {title && <Row className={styles.title}>{title}</Row>}
          <Upload showUploadList={false} {...restProps}>
            <Button type="primary" style={{ height: 40, borderRadius: 8 }}>
              <Icon icon={faArrowUp} className={styles.uploadIcon} />
              <span style={{ fontSize: 16 }}>{buttonText || 'Upload'}</span>
            </Button>
          </Upload>
        </Dragger>
      </Row>
    </Row>
  );
};

export default FileDropZone;
