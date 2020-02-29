import { Row } from 'antd';
import React, { FC } from 'react';

export const Center: FC<any> = (props) => {
  return (
    <Row type="flex" align="middle" justify="center" {...props} style={{height: '100vh'}}>
      {props.children}
    </Row>
  );
};

export default Center;
