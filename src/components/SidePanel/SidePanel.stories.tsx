import React from 'react';

import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import SidePanel from './SidePanel';

const visible = boolean('visible', true);
const title = text('title', 'Side Panel Title');

storiesOf('SidePanel', module)
  .add('default', () => <SidePanel visible={visible} onClose={action('onClose')} />, {
    notes: 'The default width of side panel is 360px, you can set side panel width through prop width.',
  })
  .add('withTitle', () => <SidePanel title={title} visible={visible} onClose={action('onClose')} />, {
    notes: 'The side panel with a title, you can title with prop title.',
  })
  .add(
    'withAnyContent',
    () => (
      <SidePanel title={title} visible={visible} onClose={action('onClose')}>
        This is a test content.
      </SidePanel>
    ),
    {
      notes: 'The side panel with a title, you can title with prop title.',
    },
  );
