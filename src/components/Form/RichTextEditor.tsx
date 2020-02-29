import { faPaperclip } from '@fortawesome/pro-regular-svg-icons';
import { Upload } from 'antd';
import { UploadProps } from 'antd/lib/upload/Upload';
import React from 'react';
import { Editor, EditorProps } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import Icon from '../Icon/Icon';

import styles from './RichTextEditor.module.scss';

interface Props extends EditorProps {
  linkCallback?: any;
  fileUploadProps?: UploadProps;
  hasAttachment?: boolean;
  className?: any;
}

const FileUpload: React.FC<UploadProps> = (props) => {
  const { showUploadList, ...restProps } = props;

  return (
    <Upload showUploadList={false} {...restProps}>
      <Icon icon={faPaperclip} style={{ color: '#979797', cursor: 'pointer' }} />
    </Upload>
  );
};

const RichTextEditor: React.FC<Props> = (props) => {
  const {
    toolbar,
    toolbarStyle,
    editorStyle,
    fileUploadProps,
    toolbarCustomButtons,
    hasAttachment,
    className,
    ...restProps
  } = props;

  const getToolBarCustomButtons = (): React.ReactElement<HTMLElement>[] => {
    if (toolbarCustomButtons) {
      return hasAttachment
        ? [<FileUpload {...fileUploadProps} key="fileUpload" />, ...toolbarCustomButtons]
        : toolbarCustomButtons;
    }

    return hasAttachment ? [<FileUpload {...fileUploadProps} key="fileUpload" />] : [];
  };

  const classNames: string = [styles.richTextStyles, className ? className : ''].join(' ');

  return (
    <div className={classNames}>
      <Editor
        toolbarStyle={{ background: '#f3f3f3', fontSize: '16px', height: '48px' }}
        editorStyle={{
          fontSize: '16px',
          color: '#1d1d1d',
          fontWeight: 'normal',
          lineHeight: '24px',
        }}
        toolbar={{
          options: ['inline', 'textAlign', 'list'],
          inline: { options: ['bold', 'italic', 'underline'] },
          list: { options: ['unordered'] },
        }}
        toolbarCustomButtons={getToolBarCustomButtons()}
        {...restProps}
      />
    </div>
  );
};

export default RichTextEditor;
