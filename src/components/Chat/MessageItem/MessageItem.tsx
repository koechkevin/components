import { faBan } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/pro-light-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { List, Row } from 'antd';
import React, { FC, useEffect, useState } from 'react';

import { FileModel, MessageAuthor, MessageItemProps } from '../../../typings/Message';
import {
  FileExtension,
  getNameInitials,
  ProductType,
  shortTimeStampFormat,
  timestampFormat,
  urlConverter,
} from '../../../utils';
import { Avatar } from '../../Avatar';
import { FileItem } from '../../FileUpload';
import { Tooltip } from '../../Tooltip';
import ForwardedMessage from '../ForwardedMessage/ForwardedMessage';
import { Signature } from './../../Signature';

import styles from './MessageItem.module.scss';

const { Item } = List;
let element: any;

const repliesRender = (replies: number): string => {
  if (replies > 1) {
    return `${replies} Replies`;
  }

  if (replies === 1) {
    return `1 Reply`;
  }

  return '';
};

const replyPeopleRender = (authors: MessageAuthor[]): string => {
  const count: number = authors.length - 3;
  return `+ ${count} ${count > 1 ? 'People' : 'Person'}`;
};

interface MessageProps extends MessageItemProps {
  menuShown?: boolean;
  poppedMenu: React.ReactNode;
  onCancel?: (file: FileModel) => void;
  onDownload?: (file: FileModel) => void;
  startThread: (messageId: string) => void;
}

const MessageItem: FC<MessageProps> = (props) => {
  const {
    id,
    text,
    file,
    author,
    onCancel,
    createdAt,
    updatedAt,
    forwarding,
    threadInfo,
    isModified,
    isDeleted,
    parentId,
    menuShown,
    poppedMenu,
    startThread,
    onDownload,
  } = props;
  const [shown, setShown] = useState(false);

  const handleReply = () => {
    if (startThread && id) {
      startThread(id);
    }
  };
  const addTouchStart = (event: any) => {
    event.preventDefault();
    const touch = event.touches[0];
    element = document.elementFromPoint(touch.pageX, touch.pageY);
  };

  const addTouchMove = (event: any) => {
    event.preventDefault();
    const touch = event.touches[0];
    if (element !== document.elementFromPoint(touch.pageX, touch.pageY)) {
      setShown(false);
    }
  };

  useEffect(() => {
    document.addEventListener('touchstart', addTouchStart, false);
    document.addEventListener('touchmove', addTouchMove, false);

    return () => {
      document.removeEventListener('touchstart', addTouchStart, false);
      document.removeEventListener('touchmove', addTouchMove, false);
    };
  }, []);

  return (
    <>
      {isDeleted && (
        <Row className={styles.deletedWrapper}>
          <Item className={styles.deletedMessage}>
            <span>
              <FontAwesomeIcon icon={faBan} className={styles.banIcon} />
            </span>
            <span>This message was deleted</span>
          </Item>
        </Row>
      )}
      <Item
        key={id}
        className={styles.messageItem}
        onMouseEnter={() => setShown(true)}
        onMouseLeave={() => setShown(false)}
        onTouchStart={() => setShown(true)}
      >
        {/** popover menu */}
        {menuShown && shown && id && poppedMenu}
        {/** message item detail */}
        <Item.Meta
          avatar={
            <>
              {isDeleted ? (
                <span className={styles.emptyAvatar} />
              ) : (
                <Avatar
                  size={40}
                  src={author && author.avatar}
                  status={author && author.chatStatus}
                  style={{ background: author && author.avatarColor, fontWeight: 'bold' }}
                  shape={author && author.productId === ProductType.Candidate ? 'square' : 'circle'}
                >
                  {author && getNameInitials(author.name)}
                </Avatar>
              )}
            </>
          }
          title={
            <Row>
              {!isDeleted && (
                <>
                  <Row>
                    <span className={styles.name}>{author && author.name}</span>
                    <span className={styles.created}>
                      {parentId
                        ? createdAt && timestampFormat(new Date(createdAt))
                        : createdAt && shortTimeStampFormat(new Date(createdAt))}
                    </span>
                  </Row>
                  {author && author.signature && (
                    <Row>
                      <Signature
                        status={'Owner'}
                        visibility={'visible'}
                        label={author && author.label}
                        name={author && author.signature}
                      />
                    </Row>
                  )}
                  <Row className={styles.text}>
                    <span dangerouslySetInnerHTML={{ __html: urlConverter(text) || '' }} />
                    {isModified && (
                      <Tooltip placement="top" title={updatedAt && `${shortTimeStampFormat(new Date(updatedAt))}`}>
                        <span className={styles.tag}>(Edited)</span>
                      </Tooltip>
                    )}
                  </Row>
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
                </>
              )}
            </Row>
          }
          description={
            <>
              {forwarding && <ForwardedMessage {...forwarding} />}
              {threadInfo && threadInfo.authors && (
                <Row
                  type="flex"
                  align="middle"
                  justify="space-between"
                  onClick={handleReply}
                  className={styles.replies}
                >
                  <Row className={styles.replyInfo}>
                    {threadInfo.authors.slice(0, 3).map((author: MessageAuthor, idx: number) => {
                      return (
                        <Avatar
                          size={24}
                          key={idx}
                          src={author.avatar}
                          style={{
                            fontSize: 12,
                            fontWeight: 'bold',
                            backgroundColor: author.avatarColor,
                          }}
                          shape={author.productId === 'candidate-portal' ? 'square' : 'circle'}
                        >
                          {getNameInitials(author.name)}
                        </Avatar>
                      );
                    })}
                    {threadInfo.authors.length > 3 && (
                      <span className={styles.blue}>{replyPeopleRender(threadInfo.authors)}</span>
                    )}
                    {threadInfo.authors.length > 3 && <span className={styles.divider}>-</span>}
                    <span className={`${threadInfo.authors.length > 3 ? styles.gray : styles.blue}`}>
                      {repliesRender(threadInfo.count)}
                    </span>
                    {threadInfo.authors.length > 3 && <span className={styles.divider}>-</span>}
                    <span className={`${styles.gray} ${styles.timestamp}`}>
                      Last reply {threadInfo.lastMessageAt && shortTimeStampFormat(new Date(threadInfo.lastMessageAt))}
                    </span>
                    <span className={styles.viewThreadText}> View Thread </span>
                  </Row>
                  <span className={styles.threadChevron}>
                    <FontAwesomeIcon icon={faChevronRight} />
                  </span>
                </Row>
              )}
            </>
          }
        />
      </Item>
    </>
  );
};

export default MessageItem;
