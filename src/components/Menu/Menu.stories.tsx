import { faBell, faCog, faFolder, faShareAlt, faStar, faUser } from '@fortawesome/pro-solid-svg-icons';
import { storiesOf } from '@storybook/react';
import { Col, Menu as AntMenu, Row } from 'antd';
import React from 'react';

import { Icon } from '../Icon';
import { IconMenuItem, Menu, SubMenu } from './Menu';

const stories = storiesOf('Menu', module);

stories.add('default', () => {
  return (
    <Row type="flex" justify="center" style={{ padding: 32 }}>
      <Col sm={12} md={8}>
        <Menu>
          <AntMenu.Item>List Item 1</AntMenu.Item>
          <AntMenu.Item>List Item 2</AntMenu.Item>
          <AntMenu.Item>List Item 3</AntMenu.Item>
          <AntMenu.Item>List Item 4</AntMenu.Item>
          <AntMenu.Item>List Item 5</AntMenu.Item>
        </Menu>
      </Col>
      <Col sm={12} md={8}>
        <Menu>
          <AntMenu.Item>
            <IconMenuItem icon={<Icon icon={faCog} />}>Settings</IconMenuItem>
          </AntMenu.Item>
          <SubMenu title={<IconMenuItem icon={<Icon icon={faFolder} />}>Folder</IconMenuItem>}>
            <AntMenu.Item>
              <IconMenuItem>New Files</IconMenuItem>
            </AntMenu.Item>
            <AntMenu.Item>
              <IconMenuItem>Old Files</IconMenuItem>
            </AntMenu.Item>
            <AntMenu.Item>
              <IconMenuItem>History</IconMenuItem>
            </AntMenu.Item>
          </SubMenu>
          <AntMenu.Item>
            <IconMenuItem icon={<Icon icon={faUser} />}>Profile</IconMenuItem>
          </AntMenu.Item>
          <AntMenu.Item>
            <IconMenuItem icon={<Icon icon={faBell} />}>Notifications</IconMenuItem>
          </AntMenu.Item>
          <AntMenu.Item>
            <IconMenuItem icon={<Icon icon={faStar} />}>Favorites</IconMenuItem>
          </AntMenu.Item>
          <AntMenu.Item>
            <IconMenuItem icon={<Icon icon={faShareAlt} />}>Share</IconMenuItem>
          </AntMenu.Item>
        </Menu>
      </Col>
      <Col sm={12} md={8}>
        <Menu>
          <AntMenu.Item>
            <IconMenuItem icon={<Icon icon={faCog} />}>Settings</IconMenuItem>
          </AntMenu.Item>
          <AntMenu.Item>
            <IconMenuItem icon={<Icon icon={faFolder} />}>Folder</IconMenuItem>
          </AntMenu.Item>
          <AntMenu.Item>
            <IconMenuItem icon={<Icon icon={faUser} />}>Profile</IconMenuItem>
          </AntMenu.Item>
          <AntMenu.Item>
            <IconMenuItem icon={<Icon icon={faBell} />}>Notifications</IconMenuItem>
          </AntMenu.Item>
          <AntMenu.Item>
            <IconMenuItem icon={<Icon icon={faStar} />}>Favorites</IconMenuItem>
          </AntMenu.Item>
          <AntMenu.Item>
            <IconMenuItem icon={<Icon icon={faShareAlt} />}>Share</IconMenuItem>
          </AntMenu.Item>
        </Menu>
      </Col>
    </Row>
  );
});
