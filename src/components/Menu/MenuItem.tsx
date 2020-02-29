import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Menu, Row } from 'antd';
import { Badge } from 'antd';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { Tooltip } from '../Tooltip';
import { MenuItemProps } from './interface';
import TypingDots from './TypingDots';

import styles from './MenuItem.module.scss';

const { Item } = Menu;

export const MenuItem: FC<MenuItemProps> = (props) => {
  const {
    name,
    icon,
    path,
    count,
    tooltip,
    iconColor,
    iconHeight,
    iconWidth,
    showBadge,
    badgeCount,
    hideInMenu,
    isTyping,
    newMessagesCount,
    ...restProps
  } = props;

  if (hideInMenu) {
    return null;
  }

  return (
    <Link to={path}>
      <Tooltip title={tooltip} placement="right">
        <Item className={styles.menuItem} {...restProps}>
          <Row align="middle" type="flex">
            <Col>
              {icon && !count && (
                <FontAwesomeIcon icon={icon} style={{ color: iconColor, height: iconHeight, width: iconWidth }} />
              )}
            </Col>
            <Badge count={count} />
            <Col className={styles.title} style={{ paddingLeft: icon ? 12 : 0, paddingRight: 12 }}>
              {name}
              {isTyping && <TypingDots />}
            </Col>
            <Badge
              count={newMessagesCount}
              overflowCount={9}
              style={{ backgroundColor: '#fb6d77' }}
              className={styles.msgCountBadge}
            />
            {showBadge && (
              <span className={styles.badge}>{badgeCount ? (badgeCount < 100 ? badgeCount : '+99') : ''}</span>
            )}
          </Row>
        </Item>
      </Tooltip>
    </Link>
  );
};

export default MenuItem;
