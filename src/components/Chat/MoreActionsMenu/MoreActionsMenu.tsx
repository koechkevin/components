import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Menu } from 'antd';
import React, { FC } from 'react';
import { useWindowSize } from 'react-use';

import { MessageItemProps } from '../../../typings/Message';

import styles from './MoreActionsMenu.module.scss';

interface MenuItem {
  icon: any;
  text: string;
  isDanger?: boolean;
  handler: (message: MessageItemProps) => void;
}

interface Props {
  menu: MenuItem[];
  message: MessageItemProps;
  isResponsive?: boolean;
}

const MoreActionsMenu: FC<Props> = (props) => {
  const { isResponsive, message, menu } = props;
  const { width } = useWindowSize();

  if (!menu || menu.length === 0) {
    return null;
  }

  return (
    <div className={isResponsive ? styles.responsive : ''}>
      <Menu className={styles.root}>
        {menu.map(({ icon, text, isDanger, handler }: MenuItem, idx: number) => (
          <Menu.Item
            key={idx}
            className={isDanger ? styles.danger : styles.item}
            onClick={() => message && message.id && handler(message)}
          >
            {width <= 768 ? <FontAwesomeIcon icon={icon} /> : <span>{text}</span>}
          </Menu.Item>
        ))}
      </Menu>
    </div>
  );
};

export default MoreActionsMenu;
