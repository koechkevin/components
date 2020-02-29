import { Divider as AntDivider } from 'antd';
import React, { CSSProperties, FC } from 'react';

import styles from './NewMessageDivider.module.scss';

interface Props {
  style?: CSSProperties;
}

const NewMessageDivider: FC<Props> = (props) => {
  const { style } = props;

  return (
    <AntDivider className={styles.newMessageDivider} style={style}>
      <span className={styles.text}>New Messages</span>
    </AntDivider>
  );
};

export default NewMessageDivider;
