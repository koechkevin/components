import { faTrashAlt } from '@fortawesome/pro-regular-svg-icons';
import { Col, Row } from 'antd';
import React, { CSSProperties, ReactNode } from 'react';

import { Icon } from '../Icon';
import { Tooltip } from '../Tooltip';

import styles from './InputCard.module.scss';

interface Props {
  type?: 'flex';
  title?: ReactNode;
  className?: string;
  removable?: boolean;
  style?: CSSProperties;
  justify?: 'start' | 'end' | 'center' | 'space-around' | 'space-between';
  align?: 'top' | 'middle' | 'bottom' | 'stretch';
  onDismiss?: () => void;
}

const InputCard: React.FC<Props> = (props) => {
  const { children, removable, onDismiss, title, className, ...restProps } = props;
  const classNames = [styles.inputCard, className ? className : ''].join(' ');

  return (
    <Row className={classNames} {...restProps}>
      {(title || removable) && (
        <Row type="flex" align="middle" justify="space-between" className={styles.header}>
          <Col className={styles.title}>{title}</Col>
          {removable && (
            <Tooltip title="Remove" placement="top">
              <Icon icon={faTrashAlt} onClick={onDismiss} hover />
            </Tooltip>
          )}
        </Row>
      )}
      <Row className={styles.container}>{children}</Row>
    </Row>
  );
};

export default InputCard;
