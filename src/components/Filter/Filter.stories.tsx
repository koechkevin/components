import { storiesOf } from '@storybook/react';
import { Avatar, Col, Input, Menu, Row, Typography } from 'antd';
import React from 'react';

import CheckBox from '../Checkbox/Checkbox';
import Filter from './Filter';

import styles from './Filter.module.scss';

const stories = storiesOf('Filter', module);

stories.addDecorator((story) => <Row>{story()}</Row>);

const location = [
  {
    name: 'Location',
    selected: 'San Diego Office',
    overlay: (
      <Menu className={styles.overlay}>
        <span>
          <Input placeholder="Search" style={{ margin: '5% 5% 5% 5%', width: '90%' }} className={styles.search} />
        </span>
        <Menu.Item className={styles.overlayItem}>All</Menu.Item>
        <Menu.Item className={styles.overlayItem}>San Diego Office</Menu.Item>
        <Menu.Item className={styles.overlayItem}>Los Angels Office</Menu.Item>
      </Menu>
    ),
  },
];

const users = [
  {
    name: 'Owner',
    selected: 'John Doe',
    overlay: (
      <Menu className={styles.overlay}>
        <span>
          <Input placeholder="Search" style={{ margin: '5% 5% 5% 5%', width: '90%' }} className={styles.search} />
        </span>
        <Menu.Item className={styles.overlayItem}>All</Menu.Item>
        <Menu.Item className={styles.overlayItem}>
          <Row type="flex">
            <Col>
              <Avatar src="https://s3.amazonaws.com/uifaces/faces/twitter/bowbrick/128.jpg" size={30} />
            </Col>
            <Col style={{ alignSelf: 'center', marginLeft: 6 }}>John Doe</Col>
          </Row>
        </Menu.Item>
        <Menu.Item className={styles.overlayItem}>
          <Row type="flex">
            <Col>
              <Avatar src="https://s3.amazonaws.com/uifaces/faces/twitter/bowbrick/128.jpg" size={30} />
            </Col>
            <Col style={{ alignSelf: 'center', marginLeft: 6 }}>Jane Doe</Col>
          </Row>
        </Menu.Item>
      </Menu>
    ),
  },
];

const roles = [
  {
    name: 'Role',
    selected: 'Various',
    overlay: (
      <Menu className={styles.overlay}>
        <Menu.Item className={styles.overlayItem}>
          <CheckBox name="All">All</CheckBox>
        </Menu.Item>
        <Menu.Item className={styles.overlayItem}>
          <CheckBox name="Admin">Admin</CheckBox>
        </Menu.Item>
        <Menu.Item className={styles.overlayItem}>
          <CheckBox name="Team Member">Team Member</CheckBox>
        </Menu.Item>
        <Menu.Item className={styles.overlayItem}>
          <CheckBox name="Guest">Guest</CheckBox>
        </Menu.Item>
        <Menu.Item className={styles.overlayItem}>
          <CheckBox name="Billing">Billing</CheckBox>
        </Menu.Item>
      </Menu>
    ),
  },
];

const allSelected = [
  {
    name: 'Role',
    selected: 'Various',
    overlay: (
      <Menu className={styles.overlay}>
        <Menu.Item className={styles.overlayItem}>
          <CheckBox checked name="All">
            All
          </CheckBox>
        </Menu.Item>
        <Menu.Item className={styles.overlayItem}>
          <CheckBox disabled checked name="Admin">
            Admin
          </CheckBox>
        </Menu.Item>
        <Menu.Item className={styles.overlayItem}>
          <CheckBox disabled checked name="Team Member">
            Team Member
          </CheckBox>
        </Menu.Item>
        <Menu.Item className={styles.overlayItem}>
          <CheckBox disabled checked name="Guest">
            Guest
          </CheckBox>
        </Menu.Item>
        <Menu.Item className={styles.overlayItem}>
          <CheckBox disabled checked name="Billing">
            Billing
          </CheckBox>
        </Menu.Item>
      </Menu>
    ),
  },
];

const { Text } = Typography;

stories.add('default', () => (
  <Row gutter={12} type="flex" justify="space-between">
    <Col style={{ textAlign: 'center', height: '30vh' }} span={12}>
      <Text strong>Location</Text>
      <Filter query={{}} filterOptions={location} onSearch={() => {}} onClear={() => {}} />
    </Col>
    <Col style={{ textAlign: 'center', height: '30vh' }} span={12}>
      <Text strong>Users</Text>
      <Filter query={{ name: '' }} filterOptions={users} onSearch={() => {}} onClear={() => {}} />
    </Col>
    <Col style={{ textAlign: 'center', height: '30vh' }} span={12}>
      <Text strong>Roles</Text>
      <Filter query={{}} filterOptions={roles} onSearch={() => {}} onClear={() => {}} />
    </Col>
    <Col style={{ textAlign: 'center', height: '30vh' }} span={12}>
      <Text strong>All roles selected</Text>
      <Filter query={{}} filterOptions={allSelected} onSearch={() => {}} onClear={() => {}} />
    </Col>
  </Row>
));
