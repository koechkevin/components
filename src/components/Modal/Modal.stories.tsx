import { boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

import { Center } from '../Center';
import ImageCrop from './ImageCrop';
import Modal from './Modal';

const visible = boolean('visible', true);
const stories = storiesOf('Modal', module);

stories
  .addDecorator((story) => <Center>{story()}</Center>)
  .add(
    'Default modal',
    () => (
      <Modal visible={visible} title="Modal Example">
        Modal Content
      </Modal>
    ),
    {
      notes: 'A modal component customized with Antd Modal, the component props is the same with Ant ModalProps',
    },
  )
  .add('Modal without title and footer', () => (
    <Modal visible={visible} title={null} footer={null}>
      Modal Content
    </Modal>
  ))
  .add('Modal without footer', () => (
    <Modal visible={visible} title="Modal Example" footer={null}>
      Modal Content
    </Modal>
  ))
  .add('Image crop modal', () => <ImageCrop visible={visible} />);
