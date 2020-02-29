import { faPhone } from '@fortawesome/pro-light-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row } from 'antd';
import React, { FC, MouseEvent } from 'react';
import { useMedia } from 'react-use';
import { SuggestionsUser } from '../../typings/Message';

import { getNameInitials, ProductType } from '../../utils';
import Avatar from '../Avatar/Avatar';
import styles from './Suggestion.module.scss';

interface Props extends SuggestionsUser {
  isActive: boolean;
  onClick: (e: MouseEvent) => void;
  onMouseOver: (e: MouseEvent) => void;
}

const Suggestion: FC<Props> = (props) => {
  const {
    name,
    icon,
    avatar,
    isActive,
    status,
    inCall,
    onClick,
    productId,
    signature,
    iconColor,
    onMouseOver,
    avatarColor,
  } = props;
  const isCandidate: boolean = productId !== ProductType.Company;
  const avatarStyles = avatar ? {} : { backgroundColor: avatarColor };
  const isMobile = useMedia('(max-width: 575px)');

  return (
    <Row
      type="flex"
      align="middle"
      onClick={onClick}
      onMouseOver={onMouseOver}
      className={styles.suggestion}
      style={{ background: isActive ? '#0050c8' : '' }}
    >
      <div className={styles.avatar}>
        <Avatar
          size="xsmall"
          src={avatar}
          status={status}
          style={avatarStyles}
          shape={isCandidate ? 'square' : 'circle'}
        >
          {getNameInitials(name)}
        </Avatar>
      </div>
      <span className={`${styles.name} ${isActive ? styles.active : ''}`}>{name}</span>
      <div className={styles.main}>
        <span className={styles.status}>
          {icon && (
            <FontAwesomeIcon
              icon={icon}
              className={styles.onlineOffline}
              style={{
                color: iconColor,
              }}
            />
          )}
        </span>
        {!isMobile && <span className={`${styles.jobPosition} ${isActive ? styles.active : ''}`}>{signature}</span>}
      </div>
      {inCall && (
        <div className={styles.inCall}>
          <FontAwesomeIcon icon={faPhone} />
          <span>In Call</span>
        </div>
      )}
    </Row>
  );
};

export default Suggestion;
