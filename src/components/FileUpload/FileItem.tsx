import { faArrowDown, faTimes, faTrashAlt } from '@fortawesome/pro-regular-svg-icons';
import { faCheckCircle } from '@fortawesome/pro-solid-svg-icons';
import { Row } from 'antd';
import { UploadFile } from 'antd/lib/upload/interface.d';
import React, { CSSProperties, FC } from 'react';

import { FileExtension, selectIcon } from '../../utils';
import { Icon } from '../Icon';
import { Progress } from '../Progress';
import { Tooltip } from '../Tooltip';

import styles from './FileItem.module.scss';

interface Props extends UploadFile {
  extension?: FileExtension;
  className?: string;
  statusInfo?: string;
  removable?: boolean;
  downloadable?: boolean;
  style?: CSSProperties;
  onRemove?: () => void;
  onCancel?: () => void;
  onDownload?: () => void;
}

const FileItem: FC<Props> = (props) => {
  const {
    name,
    style,
    status,
    percent,
    removable,
    extension,
    className,
    onRemove,
    onCancel,
    statusInfo,
    downloadable,
    onDownload,
  } = props;
  const isSuccess = status === 'done';
  const isRemoved = status === 'removed';
  const isUploading = status === 'uploading';
  const classNames = [styles.fileItem, className || ''].join(' ');
  const statusCls = [styles.statusIcon, isRemoved ? styles.timesCircle : ''].join(' ');

  return (
    <Row className={classNames} type="flex" justify="space-between" align="middle" style={style}>
      <Row className={styles.wrapper}>
        <Row
          type="flex"
          align="middle"
          justify="space-between"
          className={[styles.file, isSuccess ? styles.success : ''].join(' ')}
        >
          <Row type="flex" align="middle">
            <Icon icon={!isSuccess ? selectIcon(extension) : faCheckCircle} className={statusCls} />
            <Row>
              <Tooltip title={name}>
                <span className={styles.filename}>{name}</span>
              </Tooltip>
              {statusInfo && <Row className={styles.statusInfo}>{statusInfo}</Row>}
            </Row>
          </Row>
          {isUploading && (
            <Tooltip title="Cancel">
              <Icon hover icon={faTimes} onClick={onCancel} />
            </Tooltip>
          )}
        </Row>
        {isUploading && <Progress percent={percent} className={styles.progress} />}
      </Row>
      <Row className={styles.actions}>
        {downloadable && (
          <Tooltip title="Download">
            <Icon hover icon={faArrowDown} onClick={onDownload} style={{ margin: '0 16px' }} />
          </Tooltip>
        )}
        {removable && (
          <Tooltip title="Remove">
            <Icon hover icon={faTrashAlt} onClick={onRemove} style={{ margin: '0 16px' }} />
          </Tooltip>
        )}
      </Row>
    </Row>
  );
};

export default FileItem;
