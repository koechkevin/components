import { faPencil, faTrash } from '@fortawesome/pro-regular-svg-icons';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { List } from 'antd';
import { RcFile } from 'antd/lib/upload';
import { BrowserRouter } from 'dva/router';
import React from 'react';

import { FileExtension } from '../../utils';
import Divider from './Divider/Divider';
import FileUploadModal from './FileUploadModal/FileUploadModal';
import HoverMenu from './HoverMenu/HoverMenu';
import MessageDeleteModal from './MessageDeleteModal/MessageDeleteModal';
import MessageEditableItem from './MessageEditableItem/MessageEditableItem';
import MessageInput from './MessageInput/MessageInput';
import MessageItem from './MessageItem/MessageItem';
import MessageTextualItem from './MessageTextualItem/MessageTextualItem';
import WithTimeStamp from './MessageWithTimeStamp';
import MoreActionsMenu from './MoreActionsMenu/MoreActionsMenu';
import NewMessageDivider from './NewMessageDivider/NewMessageDivider';
import StartThreadMenu from './StartThreadMenu/StartThreadMenu';
import ThreadReplyItem from './ThreadReplyItem/ThreadReplyItem';
import Typing from './Typing/Typing';

import styles from './styles.module.scss';

import { file, messages, texts, users } from './mock';

const props = {
  author: users[0],
  menuShown: true,
  poppedMenu: (
    <HoverMenu
      actionMenu={
        <MoreActionsMenu
          message={messages[0]}
          isResponsive={true}
          menu={[
            {
              icon: faPencil,
              text: 'Edit Message',
              handler: (message: object) => null,
            },
            {
              icon: faTrash,
              text: 'Delete Message',
              isDanger: true,
              handler: (message: object) => null,
            },
          ]}
        />
      }
      startThreadMenu={<StartThreadMenu />}
    />
  ),
  startThread: () => null,
};

const messageRender = (item: any) => {
  return (
    <>
      <Divider dateTime={new Date(item.createdAt)} />
      <MessageItem {...item} {...props} />
    </>
  );
};

const threadReplyRender = (item: any) => {
  return (
    <>
      <Divider dateTime={new Date(item.createdAt)} />
      <ThreadReplyItem {...item} {...props} />
    </>
  );
};

const newMessageRender = (item: any) => {
  return (
    <>
      <NewMessageDivider />
      <Divider dateTime={new Date(item.createdAt)} />
      <MessageItem {...item} {...props} />
    </>
  );
};

const mixtureRender = (item: any) => {
  if (item.author) {
    return <MessageItem {...item} onDownload={action('onDownload')} />;
  } else {
    return <MessageTextualItem {...item} />;
  }
};

storiesOf('Chat', module)
  .add('Textual Messages', () => (
    <List
      split={false}
      dataSource={texts}
      style={{ paddingTop: 8 }}
      renderItem={(item) => (
        <MessageTextualItem {...item} {...props} menuShown={item.id !== 'c5aadd40-6752-4d24-b27f-78aba29b0f71'} />
      )}
    />
  ))
  .add('Normal Messages', () => (
    <BrowserRouter>
      <List style={{ paddingTop: 20 }} split={false} dataSource={messages} renderItem={messageRender} />
    </BrowserRouter>
  ))
  .add('Thread Replies', () => (
    <BrowserRouter>
      <List style={{ paddingTop: 20 }} split={false} dataSource={[messages[1]]} renderItem={threadReplyRender} />
    </BrowserRouter>
  ))
  .add('New Messages', () => (
    <BrowserRouter>
      <List style={{ paddingTop: 20 }} split={false} dataSource={[messages[5]]} renderItem={newMessageRender} />
    </BrowserRouter>
  ))
  .add('Mixture of Messages', () => (
    <BrowserRouter>
      <List
        split={false}
        renderItem={mixtureRender}
        style={{ paddingTop: 20 }}
        dataSource={[messages[5], texts[0], texts[1]]}
      />
    </BrowserRouter>
  ))
  .add('Message Delete Modal', () => <MessageDeleteModal visible message={messages[0]} />)
  .add('File Upload Modal', () => <FileUploadModal visible file={file as RcFile} extension={FileExtension.pdf} />)
  .add('File Upload Modal with default text', () => (
    <FileUploadModal visible text="File upload modal" file={file as RcFile} extension={FileExtension.pdf} />
  ))
  .add('Message Editable', () => (
    <MessageEditableItem {...messages[0]} suggestions={[]} save={() => null} cancel={() => null} />
  ))
  .add('Default Message Input ', () => (
    <div className={styles.messageInputWrapper}>
      <MessageInput suggestions={users} onEnter={() => null} onUpload={action('onUpload')} />
    </div>
  ))
  .add('Message Input with typing label', () => (
    <div className={styles.messageInputWrapper}>
      <MessageInput suggestions={users} typingUsers={['John Doe', 'Jane Doe', 'Baby Doe']} onEnter={() => null} />
    </div>
  ))
  .add('TimeStamp', () => <WithTimeStamp />)
  .add('Date Division Line', () => (
    <div>
      <Divider dateTime={new Date('Sat Dec 07 2019 17:28:38')} />
      <Divider dateTime={new Date()} />
    </div>
  ))
  .add('Typing', () => (
    <div className={styles.typing}>
      <Typing visibility={'visible'} typingUsers={['John Doe']} />
    </div>
  ))
  .add('New Message Divider', () => (
    <div>
      <NewMessageDivider />
    </div>
  ));
