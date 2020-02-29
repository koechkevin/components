import { List } from 'antd';
import React, { FC, ReactNode } from 'react';

import { FileModel, MessageItemProps } from '../../../typings/Message';
import { FileExtension, shortTimeStampFormat, timestampFormat, urlConverter } from '../../../utils';
import { FileItem } from '../../FileUpload';
import styles from '../MessageTextualItem/MessageTextualItem.module.scss';

const { Item } = List;

interface TextMessageProps extends MessageItemProps {
  menuShown: boolean;
  poppedMenu?: ReactNode;
  onCancel?: (file: FileModel) => void;
  onDownload?: (file: FileModel) => void;
  startThread: (messageId: string) => void;
}

const ThreadReplyItem: FC<TextMessageProps> = (props) => {
  const { text, file, createdAt, onDownload, onCancel, author, startThread, id } = props;

  const handleReply = () => {
    if (startThread && id) {
      startThread(id);
    }
  };

  return (
    <Item className={styles.root}>
      <div className="ant-list-item-meta">
        <span className={styles.timestamp}>{createdAt && shortTimeStampFormat(new Date(createdAt))}</span>
        <div style={{ flex: '1 auto' }}>
          <span className={styles.repliesText}>
            <span className={styles.username}>@{author && author.name}</span> replied to
            <span className={styles.replyLink} onClick={handleReply}>
              this thread
            </span>
            at
            <span className={styles.replyTime}>{createdAt && timestampFormat(new Date(createdAt))}</span>
          </span>
          <br />
          <span className={styles.repliesText} dangerouslySetInnerHTML={{ __html: urlConverter(text) || '' }} />
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

export default ThreadReplyItem;
