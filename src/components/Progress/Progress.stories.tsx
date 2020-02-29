import { storiesOf } from '@storybook/react';
import { Row } from 'antd';
import React from 'react';

import { Center } from '../Center';
import Progress from './Progress';

storiesOf('Progress', module)
  .addDecorator((story) => (
    <Center>
      <Row style={{ padding: 16, width: '100%' }} align="middle" justify="center">
        {story()}
      </Row>
    </Center>
  ))
  .add('default', () => <Progress />)
  .add('with percent', () => <Progress percent={50} />)
  .add('square progress', () => <Progress percent={50} square />, {
    notes: `<Progress percent={50} square />`,
  })
  .add('without percent info', () => <Progress percent={50} showInfo={false} />, {
    notes: `<Progress percent={50} showInfo={false} />`,
  });
