import { List, Row } from 'antd';
import React, { FC, useState } from 'react';

import { MessageItemProps, SuggestionsUser } from '../../../typings/Message';
import { getNameInitials, ProductType, shortTimeStampFormat } from '../../../utils';
import { Avatar } from '../../Avatar';
import { Button } from '../../Button';
import { Text } from '../../Typography';
import MessageInput from '../MessageInput/MessageInput';

import styles from './MessageEditableItem.module.scss';

const { Item } = List;

export interface EditableMessageProps extends MessageItemProps {
  suggestions: SuggestionsUser[];
  save: (text: string) => void;
  cancel: (messageId: string) => void;
}

const EditableItem: FC<EditableMessageProps> = (props) => {
  const { id, author, text, cancel, save, suggestions, createdAt } = props;
  const [msg, setMsg] = useState(text);

  return (
    <Item className={styles.editableItem}>
      <Item.Meta
        avatar={
          <Avatar
            size={40}
            src={author && author.avatar}
            status={author && author.chatStatus}
            shape={author && author.productId === ProductType.Candidate ? 'square' : 'circle'}
            style={{ background: author && author.avatarColor, fontWeight: 'bold' }}
          >
            {author && getNameInitials(author.name)}
          </Avatar>
        }
        title={
          <Row>
            <Text strong>{author ? author.name : ''}</Text>
            <Text className={styles.timestamp}>{createdAt && shortTimeStampFormat(new Date(createdAt))}</Text>
          </Row>
        }
        description={
          <MessageInput
            text={msg}
            showAt={false}
            onEnter={save}
            suggestions={suggestions}
            onChange={(text: string) => setMsg(text)}
          />
        }
      />
      <Row className={styles.buttonGroup}>
        <Button ghost onClick={() => id && cancel(id)}>
          Cancel
        </Button>
        <Button type="primary" onClick={() => msg && save(msg)}>
          Save Changes
        </Button>
      </Row>
    </Item>
  );
};

export default EditableItem;
