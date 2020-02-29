import { Row } from 'antd';
import React, { FC } from 'react';

import { MessageItemProps } from '../../../typings/Message';
import { getNameInitials, ProductType, shortTimeStampFormat } from '../../../utils';
import { Avatar } from '../../Avatar';
import { Text } from '../../Typography';
import styles from './ForwardedMessage.module.scss';

const ForwardingMessage: FC<MessageItemProps> = (props) => {
  const { author, text, createdAt } = props;

  return (
    <Row className={styles.root}>
      <Row className={styles.avatar}>
        <Avatar
          src={author && author.avatar}
          size={24}
          style={{ background: author && author.avatarColor, fontSize: 'auto' }}
          shape={author && author.productId === ProductType.Candidate ? 'square' : 'circle'}
        >
          {author && getNameInitials(author.name)}
        </Avatar>
        <span className={styles.author}>{author && author.name}</span>
        <span className={styles.timestamp}>{createdAt && shortTimeStampFormat(new Date(createdAt))}</span>
      </Row>
      <Row className={styles.content}>
        <Text style={{ fontSize: 14 }}>{text}</Text>
      </Row>
    </Row>
  );
};

export default ForwardingMessage;
