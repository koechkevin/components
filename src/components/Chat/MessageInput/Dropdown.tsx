import { faGoogleDrive } from '@fortawesome/free-brands-svg-icons';
import { faLaptop } from '@fortawesome/pro-solid-svg-icons';
import { Dropdown as AntdDropdown, Menu as AntdMenu, notification, Upload } from 'antd';
import { RcFile } from 'antd/lib/upload';
import React, { FC } from 'react';

import { Icon } from '../../Icon';
import { IconMenuItem, Menu } from '../../Menu';
import { Text } from '../../Typography';
import styles from './MessageInput.module.scss';

const { Item } = AntdMenu;

interface Props {
  uploadToGoogle?: () => void;
  onUpload?: (file: RcFile) => void;
}

const Dropdown: FC<Props> = (props) => {
  const { onUpload, uploadToGoogle, children } = props;

  const beforeUpload = (file: RcFile, fileList: RcFile[]): boolean => {
    if (file.size >= 100 * 1024 * 1024) {
      notification.warning({
        message: 'Oops! That file is too large, we only allow files up to 100mb to be uploaded here.',
      });
      return false;
    }

    onUpload && onUpload(file);
    return false;
  };

  return (
    <AntdDropdown
      trigger={['click']}
      overlay={
        <Menu>
          <Item onClick={uploadToGoogle}>
            <IconMenuItem icon={<Icon icon={faGoogleDrive} />}>Google Drive</IconMenuItem>
          </Item>
          <Item style={{ padding: 0 }}>
            <Upload showUploadList={false} multiple={false} className={styles.upload} beforeUpload={beforeUpload}>
              <Icon icon={faLaptop} style={{ marginRight: 16 }} />
              <Text style={{ fontSize: 16 }}>Your Computer</Text>
            </Upload>
          </Item>
        </Menu>
      }
    >
      {children}
    </AntdDropdown>
  );
};

export default Dropdown;
