import { Tag as AntdTag } from 'antd';
import React, { FC } from 'react';

import { IProps } from './interface';
import styles from './Typing.module.scss';

const Typing: FC<IProps> = (props) => {
  const { typingUsers, visibility } = props;
  let name;
  let others;
  if (typingUsers && typingUsers.length > 2) {
    others = typingUsers.length - 2 > 1 ? 'others' : 'other';
    name = typingUsers.slice(0, 2).join(', ') + ` and ${typingUsers.length - 2} ${others}`;
  } else {
    name = typingUsers && typingUsers.join(' and ');
  }

  const isOrAre = typingUsers && typingUsers.length >= 2 ? 'are' : 'is';

  return (
    <>
      {typingUsers && typingUsers.length !== 0 && (
        <AntdTag className={styles.label} style={{ visibility }}>
          <span className={styles.bold}>{name}</span>
          <span>{isOrAre} typing</span>
        </AntdTag>
      )}
    </>
  );
};

export default Typing;
