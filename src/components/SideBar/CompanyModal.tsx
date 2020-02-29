import { Col, Row } from 'antd';
import React, { FC, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import { getNameInitials } from '../../utils';
import { Avatar } from '../Avatar';
import { Text } from '../Typography';
import styles from './CompanyModal.module.scss';

export interface ListItem {
  name: string;
  count?: number;
  companyId?: string;
  avatarUrl: string;
  avatarColor?: string;
}

interface Props {
  list?: any[];
  visible: boolean;
  companyId?: string;
  onClose?: (visible?: boolean) => void;
  onSelect?: (item: ListItem) => void;
}

export const CompanyModal: FC<Props> = (props) => {
  const { list, visible, companyId, onClose, onSelect } = props;
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    setDisplay(visible);
  }, [visible]);

  const handleSelect = (item: ListItem) => {
    onSelect && onSelect(item);
  };

  const handleClose = () => {
    setDisplay(false);
    onClose && onClose(false);
  };

  const modal = display && (
    <div className={styles.mask} onClick={handleClose}>
      <Row className={styles.companyModal}>
        {list && list.length
          ? list.map((item: ListItem, index: number) => (
              <Row
                key={index}
                type="flex"
                align="middle"
                onClick={() => handleSelect(item)}
                className={[styles.listItem, companyId === item.companyId ? styles.active : ''].join(' ')}
              >
                <Avatar
                  size={38}
                  shape="square"
                  src={item.avatarUrl}
                  className={styles.avatar}
                  color={item.avatarColor}
                >
                  {getNameInitials(item.name)}
                </Avatar>
                <Col className={styles.info}>
                  <Text>{item.name}</Text>
                </Col>
                {item.count && <span className={styles.badge}>{item.count < 100 ? item.count : '+99'}</span>}
              </Row>
            ))
          : null}
      </Row>
    </div>
  );

  return ReactDOM.createPortal(modal, document.body);
};

export default CompanyModal;
