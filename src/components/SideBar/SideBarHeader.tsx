import { faStream, faTimes } from '@fortawesome/pro-regular-svg-icons';
import { faCaretDown } from '@fortawesome/pro-solid-svg-icons';
import { Col, Row } from 'antd';
import React, { FC } from 'react';

import { getNameInitials, ProductType } from '../../utils';
import { Avatar } from '../Avatar';
import { Icon } from '../Icon';
import styles from './SideBar.module.scss';

export interface Props {
  name?: string;
  logo?: string;
  isMobile?: boolean;
  avatarColor?: string;
  productId?: ProductType;
  onOpen?: () => void;
  onCollapse?: () => void;
}

export const SideBarHeader: FC<Props> = (props) => {
  const { name, avatarColor, productId, isMobile, logo, onOpen, onCollapse } = props;
  const isCandidate = productId === ProductType.Candidate;

  return (
    <Row className={styles.sideHeader} type="flex" align="middle" justify="space-between">
      <Col className={styles.profile}>
        {!isCandidate || isMobile ? (
          <Avatar size={isCandidate ? 'medium' : 'small'} src={logo} color={avatarColor} shape="square">
            {getNameInitials(name)}
          </Avatar>
        ) : null}
        <Col onClick={onOpen}>
          {name && (
            <b className={styles.name} style={{ marginLeft: !isCandidate || isMobile ? 8 : 0, marginRight: 16 }}>
              {name}
            </b>
          )}
          {isMobile && isCandidate && <Icon icon={faCaretDown} className={styles.caretDown} />}
        </Col>
      </Col>
      <Col>
        <Icon
          onClick={onCollapse}
          style={{ marginRight: -8 }}
          icon={isMobile ? faTimes : faStream}
          className={isMobile ? styles.closeBtn : styles.menuBtn}
        />
      </Col>
    </Row>
  );
};

export default SideBarHeader;
