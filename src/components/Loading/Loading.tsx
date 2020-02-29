import { Icon, Spin } from 'antd';
import NProgress from 'nprogress';
import React, { FC, useEffect } from 'react';

import styles from './Loading.module.scss';

NProgress.configure({ showSpinner: false });

interface Props {
  spinning?: boolean;
}

export const Loading: FC<Props> = (props) => {
  const { spinning } = props;
  const antIcon = <Icon type="loading-3-quarters" spin />;

  useEffect(() => {
    NProgress.start();
    return () => {
      NProgress.done();
    };
  }, []);

  return <div className={styles.loading}>{spinning && <Spin size="large" indicator={antIcon} />}</div>;
};

export default Loading;
