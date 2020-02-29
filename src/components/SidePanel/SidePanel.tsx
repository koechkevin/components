import { faTimes } from '@fortawesome/pro-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Drawer } from 'antd';
import React, { CSSProperties, FC, ReactNode } from 'react';

import styles from './SidePanel.module.scss';

interface Props {
  width?: number;
  title?: ReactNode;
  visible: boolean;
  offsetTop?: number;
  onClose: () => void;
  style?: CSSProperties;
  className?: string;
  bodyStyle?: CSSProperties;
  container?: string | HTMLElement;
}

export const SidePanel: FC<Props> = (props) => {
  const { style, bodyStyle, className, width, visible, container, title, onClose } = props;
  const classNames = [styles.sidePanel, className].join(' ');

  return (
    <Drawer
      mask={false}
      title={title}
      style={style}
      closable={false}
      visible={visible}
      width={width || 360}
      bodyStyle={bodyStyle}
      className={classNames}
      getContainer={container}
    >
      <span className={styles.closeBtn} onClick={onClose}>
        <FontAwesomeIcon icon={faTimes} />
      </span>
      {props.children}
    </Drawer>
  );
};

export default SidePanel;
