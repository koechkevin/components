import { RcFile } from 'antd/lib/upload';
import { mount } from 'enzyme';
import React from 'react';

import { FileExtension } from '../../../../utils';
import { Button } from '../../../Button';
import FileUploadModal from '../FileUploadModal';

export const file = {
  uid: '',
  size: 1024,
  name: 'Jane_Doe_Cv.pdf',
  lastModified: 1234,
  type: 'application/pdf',
  webkitRelativePath: '',
  lastModifiedDate: new Date(),
};

describe('Tests for file upload modal', () => {
  const props = {
    title: 'modal title',
    name: 'Jane_Doe_CV.pdf',
    onCancel: jest.fn(),
    onOk: jest.fn(),
    visible: true,
    file: file as RcFile,
    extension: FileExtension.pdf,
  };

  const wrapper = mount(<FileUploadModal {...props} />);

  it('should render the file upload modal without crushing', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should simulate click of cancel button', () => {
    const cancelButton = wrapper.find(Button).first();
    cancelButton.simulate('click');

    expect(cancelButton.contains('Cancel')).toEqual(true);
    expect(props.onCancel).toHaveBeenCalled();
  });

  it('should simulate clicking of upload button', () => {
    const okButton = wrapper.find(Button).last();
    okButton.simulate('click');

    expect(okButton.contains('Upload')).toEqual(true);
    expect(props.onOk).toHaveBeenCalled();
  });
});
