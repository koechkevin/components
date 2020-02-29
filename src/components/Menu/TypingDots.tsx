import React, { FC } from 'react';

import styles from './TypingDots.module.scss';

export const TypingDots: FC<{}> = () => {
  return (
    <>
      <span className={styles.typing}>
        <span>.</span>
        <span>.</span>
        <span>.</span>
      </span>
    </>
  );
};

export default TypingDots;
