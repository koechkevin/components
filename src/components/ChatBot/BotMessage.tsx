import { faEye } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { List, Row } from 'antd';
import React, { FC, ReactNode, useState } from 'react';
import { Link } from 'react-router-dom';

import avatar from '../../icons/chat-bot-avatar/bot-avatar-default.png';
import { BotMessage as BotMessageTyped } from '../../typings/Message';
import { shortTimeStampFormat } from '../../utils';
import { Avatar } from '../Avatar';
import { Button } from '../Button';
import { Text } from '../Typography';
import styles from './Message.module.scss';

const { Item } = List;

interface Props {
  visible?: boolean;
  message: BotMessageTyped;
  poppedMenu?: ReactNode;
  onMark?: () => void;
  onSnooze?: () => void;
  onRemove?: () => void;
}

export const BotMessage: FC<Props> = (props) => {
  const { message, onMark, onSnooze, onRemove, poppedMenu } = props;
  const { id, createdAt, isPrivate } = message;
  const [visible, setVisible] = useState(false);

  return (
    <Item className={styles.botMessage} onMouseEnter={() => setVisible(true)} onMouseLeave={() => setVisible(false)}>
      {visible && id && poppedMenu}
      <Item.Meta
        avatar={
          <Avatar size={40} src={avatar}>
            Aida
          </Avatar>
        }
        title={
          <Row>
            <Row>
              <span className={styles.name}>Aida</span>
              <span className={styles.created}>{createdAt && shortTimeStampFormat(new Date(createdAt))}</span>
              {isPrivate && (
                <span style={{ color: '#0050c8', marginLeft: 12 }}>
                  <FontAwesomeIcon icon={faEye} /> Private : Only you can see this
                </span>
              )}
            </Row>
            <Row className={styles.text}>
              Got it! I'll remind you in <Text strong>20 minutes at 11.30 A.M today</Text> about{' '}
              <Link to={'/'}>this message</Link> from <Text strong>@JaneDoe</Text>
            </Row>
          </Row>
        }
        description={
          <Row className={styles.buttonGroup}>
            <Button ghost onClick={onMark}>
              Mark as Complete
            </Button>
            <Button ghost onClick={onSnooze}>
              Snooze
            </Button>
            <Button type="danger" ghost onClick={onRemove}>
              Delete
            </Button>
          </Row>
        }
      />
    </Item>
  );
};

export default BotMessage;
