import { storiesOf } from '@storybook/react';
import { Row } from 'antd';
import React from 'react';

import { FileExtension } from '../../utils';
import { Center } from '../Center';
import FileDropZone from './FileDropZone';
import FileItem from './FileItem';

const accept: string = '.jpg, .jpeg, .png, .pdf, .docx, .doc, .pdf, .tiff, .xls, .xlsx, .mp4';

storiesOf('File Upload', module)
  .addDecorator((story) => (
    <Center>
      <Row style={{ padding: 16, width: '100%' }} align="middle" justify="center">
        {story()}
      </Row>
    </Center>
  ))
  .add('Default', () => <FileDropZone />)
  .add('File Upload Zone with title', () => <FileDropZone title="Drag and Drop or upload your resume" />)
  .add('File Upload Zone with customized button text', () => (
    <FileDropZone title="Drag and Drop or upload your resume" buttonText="Upload your file" />
  ))
  .add('Cancelled File Drop Zone', () => (
    <FileDropZone
      status="error"
      name="SampleFile.pdf"
      accept={accept}
      statusInfo="Upload Canceled"
      title="Drag and Drop or upload your resume"
    />
  ))
  .add('Removed File Drop Zone', () => (
    <FileDropZone
      name="SampleFile.pdf"
      status="removed"
      accept={accept}
      statusInfo="File Removed"
      title="Drag and Drop or upload your resume"
    />
  ))
  .add('FileItem with long file name', () => (
    <FileItem
      uid=""
      size={1000}
      percent={50}
      status="uploading"
      type="application/pdf"
      extension={FileExtension.pdf}
      style={{ maxWidth: 500, margin: '0 auto' }}
      name="This is a a long text file name Drag and drop or upload a resume.pdf"
    />
  ))
  .add('FileItem with progress', () => (
    <FileItem
      uid=""
      size={1000}
      percent={50}
      status="uploading"
      type="application/pdf"
      name="Sample Document.pdf"
      extension={FileExtension.pdf}
    />
  ))
  .add('FileItem with uploading finished', () => (
    <FileItem
      uid=""
      removable
      size={1000}
      type="application/xls"
      name="Sample Document.xls"
      extension={FileExtension.xls}
    />
  ))
  .add('FileItem with download', () => (
    <FileItem
      uid=""
      size={1000}
      downloadable
      name="Sample Document.xls"
      type="application/xls"
      extension={FileExtension.xls}
    />
  ))
  .add('File was deleted', () => (
    <FileItem
      uid=""
      size={1000}
      status="removed"
      type="application/xls"
      name="Sample Document.xls"
      extension={FileExtension.xls}
      statusInfo="This file was deleted"
    />
  ));
