import { faTimesCircle } from '@fortawesome/pro-light-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row } from 'antd';
import { Badge } from 'antd';
import React, { CSSProperties, FC, MouseEvent, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

import { Tooltip } from '../Tooltip';
import { ChannelItem } from './interface';
import TypingDots from './TypingDots';

import styles from './ChannelMenu.module.scss';

interface Props {
  list: ChannelItem[];
  className?: string;
  style?: CSSProperties;
  title: string | ReactNode;
  titleButton?: React.ReactNode;
  onRemove?: (item: ChannelItem) => void;
}

export const ChannelMenu: FC<Props> = (props) => {
  const { title, list, onRemove, className, titleButton, style } = props;
  const cls = [styles.channelMenu, className ? className : ''].join(' ');

  const handleRemove = (event: MouseEvent, item: ChannelItem) => {
    event.preventDefault();
    if (onRemove) {
      onRemove(item);
    }
  };

  return (
    <div className={cls} style={style}>
      <Row className={styles.title} type="flex" align="middle">
        <div className={styles.titleContent}>{title}</div>
        {titleButton && titleButton}
      </Row>
      <ul className={styles.list}>
        {list && list.length
          ? list.map((item: ChannelItem) => {
              return (
                <li key={item.id}>
                  <Tooltip placement="right" title={item.tooltip}>
                    <NavLink to={item.path || '/'} activeClassName="active" className={styles.menuItem}>
                      {item.icon && !item.count ? (
                        <>
                          <span className={styles.name}>
                            <span className={styles.iconName}>
                              <FontAwesomeIcon
                                icon={item.icon}
                                style={{
                                  color: item.iconColor,
                                  height: item.iconHeight ? item.iconHeight : 9,
                                  width: item.iconWidth ? item.iconWidth : 9,
                                }}
                              />
                            </span>
                            {item.name}
                            {item.isTyping && <TypingDots />}
                          </span>
                          <Badge
                            count={item.newMessagesCount}
                            overflowCount={9}
                            style={{ backgroundColor: '#fb6d77' }}
                            className={styles.msgCountBadge}
                          />
                        </>
                      ) : (
                        <>
                          <Badge count={item.count!} />
                          <span className={styles.name}>
                            {item.name}
                            {item.isTyping && <TypingDots />}
                          </span>
                          <Badge
                            count={item.newMessagesCount}
                            overflowCount={9}
                            style={{ backgroundColor: '#fb6d77' }}
                            className={styles.msgCountBadge}
                          />
                        </>
                      )}
                      {item.removable && !item.newMessagesCount && (
                        <span
                          className={styles.removeButton}
                          onClick={(event: MouseEvent) => handleRemove(event, item)}
                        >
                          <FontAwesomeIcon icon={faTimesCircle} />
                        </span>
                      )}
                    </NavLink>
                  </Tooltip>
                </li>
              );
            })
          : null}
      </ul>
    </div>
  );
};

export default ChannelMenu;
