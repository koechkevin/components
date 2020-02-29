import { action } from '@storybook/addon-actions';
import * as Knobs from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { Row } from 'antd';
import React from 'react';

import { Center } from '../Center';
import Input from './Input';
import InputCard from './InputCard';

storiesOf('InputCard', module)
  .addDecorator((story) => (
    <Center>
      <Row style={{ padding: '30px', minWidth: 320, maxWidth: 720, width: '100%', backgroundColor: 'white' }}>
        {story()}
      </Row>
    </Center>
  ))
  .add('default', () => <InputCard />, { notes: 'Input components library' })
  .add('with text', () => <InputCard>{Knobs.text('Text', 'Cool Text')}</InputCard>, { notes: 'Input card plain text' })
  .add('Dismissible', () => <InputCard removable onDismiss={() => alert('Dismissed')} />, {
    notes: 'Input card with dismiss icon',
  })
  .add(
    'with input text',
    () => (
      <InputCard removable onDismiss={() => alert('Dismissed')}>
        <Input label="Title" onChange={action('onChange')} value="Value" style={{ marginBottom: '0px' }} />
      </InputCard>
    ),
    { notes: 'Input card input text' },
  )
  .add(
    'With Title and Dismissible',
    () => (
      <InputCard title="Example Title" removable onDismiss={() => null}>
        <Input label="Example" onChange={action('onChange')} value="Value" style={{ marginBottom: '0px' }} />
      </InputCard>
    ),
    { notes: 'Input card with dismiss icon and title' },
  )
  .add(
    'With Child Card',
    () => (
      <InputCard title="Example Title" removable onDismiss={() => null}>
        <Input label="Example" onChange={action('onChange')} value="Value" style={{ marginBottom: '0px' }} />
        <InputCard removable onDismiss={() => null} title="Child Card" style={{ borderRadius: 4, marginTop: '16px' }}>
          <Input label="Child Input" onChange={action('onChange')} value="Value" style={{ marginBottom: '0px' }} />
        </InputCard>
      </InputCard>
    ),
    { notes: 'Input card with a child card' },
  );
