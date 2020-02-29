import { faFolder } from '@fortawesome/pro-solid-svg-icons';
import { Menu as AntMenu } from 'antd';
import { mount } from 'enzyme';
import React from 'react';

import { Icon } from '../../Icon';
import { IconMenuItem, Menu, SubMenu } from '../Menu';

describe('Dropdown tests', () => {
  let wrapper = mount(
    <Menu>
      <AntMenu.Item>submenu</AntMenu.Item>
    </Menu>,
  );

  afterAll(() => {
    wrapper.unmount();
  });

  it('renders antd dropdown', () => {
    wrapper = mount(
      <Menu>
        <SubMenu>
          <AntMenu.Item>submenu</AntMenu.Item>
        </SubMenu>
      </Menu>,
    );
    expect(wrapper.find(SubMenu)).toHaveLength(1);
  });

  it('renders Menu Items', () => {
    wrapper = mount(
      <Menu>
        <AntMenu.SubMenu title={<IconMenuItem icon={<Icon icon={faFolder} />}>Folder</IconMenuItem>}>
          <AntMenu.Item>
            <IconMenuItem>New Files</IconMenuItem>
          </AntMenu.Item>
        </AntMenu.SubMenu>
      </Menu>,
    );
    expect(wrapper.find(IconMenuItem)).toHaveLength(1);
    expect(wrapper.find(Icon)).toHaveLength(2);
  });
});
