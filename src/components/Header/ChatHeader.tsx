import { IconDefinition } from '@fortawesome/pro-solid-svg-icons';
import { Row } from 'antd';
import React, { FC } from 'react';

import { Icon } from '../Icon';
import Label from '../Label/Label';
import { Text } from '../Typography';
import styles from './ChatHeader.module.scss';

interface Props {
  statusIcon?: IconDefinition;
  iconColor?: string;
  jobPosition?: string;
  chatRoomStatus?: string;
}

const ChatHeader: FC<Props> = (props) => {
  const { statusIcon, iconColor, jobPosition, chatRoomStatus } = props;

  return (
    <Row align="middle" type="flex" className={styles.chatHeaderWrapper}>
      {statusIcon && <Icon className={styles.chatStatusIcon} icon={statusIcon} color={iconColor} />}
      {jobPosition && (
        <Text ellipsis style={{ paddingRight: 8 }} className={styles.jobPosition}>
          {jobPosition}
        </Text>
      )}
      {chatRoomStatus && <Label>{chatRoomStatus}</Label>}
    </Row>
  );
};

export default ChatHeader;
