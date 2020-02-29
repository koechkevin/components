import { storiesOf } from '@storybook/react';
import React from 'react';

import { Center } from '../Center';
import Switch from './Switch';

storiesOf('Switch', module)
  .addDecorator((story) => <Center>{story()}</Center>)
  .add('Default', () => <Switch />);
