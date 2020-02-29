import { select, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

import { Center } from '../Center';
import { Signature } from '../Signature';

const stories = storiesOf('Signature', module);

stories.addDecorator((story) => <Center>{story()}</Center>);

stories.add('Default', () => {
  const name = text('Name', 'Signature');
  const label = text('Label', 'Label');
  const status = select(
    'Status',
    {
      owner: 'Owner',
      candidate: 'candidate',
    },
    'Owner',
  );
  const visibility = select(
    'visibility',
    {
      default: 'visible',
      hidden: 'hidden',
    },
    'visible',
  );
  const props = { visibility, name, status, label };

  return <Signature {...props} />;
});
