import { faCircle as offline, faClock, faEllipsisH } from '@fortawesome/pro-regular-svg-icons';
import { faCircle } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Avatar, Col, Dropdown, Row, Typography } from 'antd';
import { DropDownProps } from 'antd/lib/dropdown';
import React, { FC } from 'react';

import { ChatStatus, getNameInitials, resolveRole } from '../../utils';
import CheckBox from '../Checkbox/Checkbox';

import styles from './UserListItem.module.scss';

const { Text } = Typography;

interface Props {
  name?: string;
  email: string;
  department?: string;
  roles: string[];
  avatarUrl?: string;
  avatarColor?: string;
  signature?: string;
  status: ChatStatus;
  isInvited: boolean;
  checkboxProps?: any;
  dropdownProps: DropDownProps;
}

const UserListItem: FC<Props> = (props) => {
  const {
    name,
    email,
    roles,
    status,
    avatarUrl,
    isInvited,
    signature,
    department,
    checkboxProps,
    dropdownProps,
    avatarColor,
  } = props;
  const avatarStyle = avatarUrl || isInvited ? {} : { backgroundColor: avatarColor };
  const isOnline = status === ChatStatus.online;

  return (
    <Row type="flex" className={styles.listItem}>
      <Col span={1} style={{ paddingLeft: 0 }}>
        <CheckBox className={styles.checkbox} {...checkboxProps} />
      </Col>
      <Col span={2} style={{ padding: 0 }}>
        <Avatar className={styles.avatar} style={avatarStyle} src={avatarUrl} size={40}>
          {isInvited ? <FontAwesomeIcon color="#959595" icon={faClock} /> : getNameInitials(name ? name : '')}
        </Avatar>
      </Col>
      <Col span={6} style={{ paddingLeft: 0 }}>
        <div style={{ display: 'flex' }}>
          <span className={styles.name}>{name || email}</span>
          {!isInvited && (
            <span className={styles.status}>
              <FontAwesomeIcon icon={isOnline ? faCircle : offline} color={isOnline ? '#39c049' : ''} />
            </span>
          )}
        </div>
        {isInvited ? (
          <span className={styles.invited}>
            <Text>Invited</Text>
          </span>
        ) : (
          <div className={styles.smallFont}>{email}</div>
        )}
      </Col>
      <Col span={8}>
        <div className={styles.smallFont}>{signature || '__'}</div>
        <div className={styles.smallFont}>{department || '__'}</div>
      </Col>
      <Col span={6}>
        <div className={styles.roles}>
          {roles.map((each: string, index: number) => {
            return (
              <div key={index} className={[styles.userRole, styles[each]].join(' ')}>
                {resolveRole(each)}
              </div>
            );
          })}
        </div>
      </Col>
      <Col span={1} style={{ paddingRight: 0 }}>
        <Dropdown {...dropdownProps}>
          <span style={{ float: 'right', cursor: 'pointer' }} className={styles.ellipsis}>
            <FontAwesomeIcon icon={faEllipsisH} />
          </span>
        </Dropdown>
      </Col>
    </Row>
  );
};

export default UserListItem;
