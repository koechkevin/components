import { Divider as AntDivider } from 'antd';
import React, { CSSProperties, FC } from 'react';

import { dateFormat } from '../../../utils';

import styles from './Divider.module.scss';

interface Props {
  style?: CSSProperties;
  dateTime: Date;
}

const Divider: FC<Props> = (props) => {
  const { style } = props;

  return (
    <AntDivider className={styles.divider} style={style}>
      {dateFormat(props.dateTime)}
    </AntDivider>
  );
};

export default Divider;
