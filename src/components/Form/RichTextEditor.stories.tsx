import { storiesOf } from '@storybook/react';
import { Row } from 'antd';
import React from 'react';

import { Center } from '../Center';
import RichTextEditor from './RichTextEditor';

storiesOf('Rich Text Editor', module)
  .addDecorator((story) => (
    <Center>
      <Row style={{ padding: '30px', minWidth: 320, maxWidth: 720, width: '100%' }}>{story()}</Row>
    </Center>
  ))
  .add('Without file attachment', () => <RichTextEditor />)
  .add('With File attachment', () => <RichTextEditor hasAttachment />);
