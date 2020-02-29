import { faEllipsisH, faLink } from '@fortawesome/pro-light-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dropdown, Row } from 'antd';
import React, { FC, ReactNode, useState } from 'react';

import { Tooltip } from '../../Tooltip';
import styles from './HoverMenu.module.scss';

interface Props {
  messageId?: string;
  actionMenu: ReactNode;
  startThreadMenu?: ReactNode;
  copyLink?: () => void;
}

const HoverMenu: FC<Props> = (props) => {
  const { actionMenu, copyLink, messageId, startThreadMenu } = props;
  const [visible, setVisible] = useState(false);
  const [dropDownColor, setColor] = useState('');

  const onMore = () => {
    setVisible(true);
    setColor(styles.select);
  };

  return (
    <Row className={styles.root}>
      {startThreadMenu}
      <Tooltip title="Copy link">
        <div onClick={() => messageId && copyLink}>
          <FontAwesomeIcon icon={faLink} />
        </div>
      </Tooltip>
      <Dropdown
        visible={visible}
        trigger={['click']}
        placement="bottomRight"
        overlay={<div onClick={() => setVisible(false)}>{actionMenu}</div>}
      >
        <Tooltip title="More actions">
          <div onClick={onMore} className={dropDownColor}>
            <FontAwesomeIcon icon={faEllipsisH} />
          </div>
        </Tooltip>
      </Dropdown>
    </Row>
  );
};

export default HoverMenu;
