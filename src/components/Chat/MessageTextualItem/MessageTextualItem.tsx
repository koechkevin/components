import { List } from 'antd';
import { formatRelative } from 'date-fns';
import React, { FC, ReactNode, useState } from 'react';

import { FileModel, MessageItemProps } from '../../../typings/Message';
import { FileExtension, shortTimeStampFormat, urlConverter } from '../../../utils';
import { FileItem } from '../../FileUpload';
import { Tooltip } from '../../Tooltip';
import styles from './MessageTextualItem.module.scss';

const { Item } = List;

interface TextMessageProps extends MessageItemProps {
  menuShown: boolean;
  poppedMenu?: ReactNode;
  onCancel?: (file: FileModel) => void;
  onDownload?: (file: FileModel) => void;
}

const TextualItem: FC<TextMessageProps> = (props) => {
  const { menuShown, id, text, file, createdAt, updatedAt, isModified, onDownload, onCancel, poppedMenu } = props;
  const [shown, setShown] = useState(false);

  return (
    <Item className={styles.root} onMouseEnter={() => setShown(true)} onMouseLeave={() => setShown(false)}>
      {menuShown && shown && id && poppedMenu}
      <div className="ant-list-item-meta">
        <span className={styles.timestamp}>{createdAt && shortTimeStampFormat(new Date(createdAt))}</span>
        <div style={{ flex: '1 auto' }}>
          <span className={styles.text} dangerouslySetInnerHTML={{ __html: urlConverter(text) || '' }} />
          {isModified && (
            <Tooltip placement="top" title={updatedAt && `${formatRelative(new Date(updatedAt), new Date())}`}>
              <span className={styles.tag}>(Edited)</span>
            </Tooltip>
          )}
          {file && (
            <FileItem
              {...file}
              downloadable={!!file.fileId}
              style={{ margin: '8px 0' }}
              name={file.filename || file.name}
              extension={file.extension as FileExtension}
              onCancel={() => onCancel && onCancel(file)}
              onDownload={() => onDownload && onDownload(file)}
            />
          )}
        </div>
      </div>
    </Item>
  );
};

export default TextualItem;
