import { number, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { Col, Row, Typography } from 'antd';
import React from 'react';

import { Center } from '../Center';
import { ListItem } from '../SideBar/CompanyModal';
import Avatar from './Avatar';

import logo from '../../icons/logo.svg';
import mockLogo from '../../icons/mocks/company.png';

const src = 'https://s3.amazonaws.com/uifaces/faces/twitter/bowbrick/128.jpg';
const size = number('size', 200);
const initials = text('initials', 'AA');
const { Text } = Typography;
const companyList: ListItem[] = [
  { companyId: '123', avatarUrl: logo, name: 'Airbus', count: 4, avatarColor: '#fb6d77' },
  { companyId: '1234', avatarUrl: mockLogo, name: 'Pepsi', count: 21, avatarColor: '#46a094' },
  { companyId: '12345', avatarUrl: '', name: 'Airbus', avatarColor: '#5d85ce' },
];

storiesOf('Avatar', module)
  .addDecorator((story) => <Center>{story()}</Center>)
  .add('default', () => <Avatar />, { notes: 'Avatar default styles' })
  .add(
    'with circle shape and image',
    () => (
      <Row>
        <Row gutter={36}>
          <Col span={8}>
            <Text strong>24</Text> xsmall{' '}
          </Col>
          <Col span={8}>
            <Text strong>40</Text> small{' '}
          </Col>
          <Col span={8}>
            <Text strong>80</Text> medium{' '}
          </Col>
        </Row>
        <Row gutter={36}>
          <Col span={8}>
            <Avatar src={src} size="small" />
          </Col>
          <Col span={8}>
            <Avatar src={src} size="medium" />
          </Col>
          <Col span={8}>
            <Avatar src={src} size="large" />
          </Col>
        </Row>
      </Row>
    ),
    {
      notes: 'Avatar with Circle shape and image',
    },
  )
  .add(
    'with square shape and image',
    () => (
      <Row>
        <Row gutter={36}>
          <Col span={8}>
            <Text strong>24</Text> xsmall
          </Col>
          <Col span={8}>
            <Text strong>40</Text> small
          </Col>
          <Col span={8}>
            <Text strong>80</Text> medium
          </Col>
        </Row>
        <Row gutter={36}>
          <Col span={8}>
            <Avatar src={src} shape="square" size="small" />
          </Col>
          <Col span={8}>
            <Avatar src={src} shape="square" size="medium" />
          </Col>
          <Col span={8}>
            <Avatar src={src} shape="square" size="large" />
          </Col>
        </Row>
      </Row>
    ),
    {
      notes: 'Avatar with square shape and image',
    },
  )
  .add(
    'with square shape and initials',
    () => (
      <Row>
        <Row>
          <Col span={12}>
            <Text strong>32</Text> small
          </Col>
          <Col span={12}>
            <Text strong>40</Text> large
          </Col>
        </Row>
        <Row gutter={36}>
          <Col span={12}>
            <Avatar size="small" shape="square" color="#46a094" style={{ fontWeight: 'bold', fontSize: 10 }}>
              {initials}
            </Avatar>
          </Col>
          <Col span={12}>
            <Avatar size="medium" shape="square" color="#8260da" style={{ fontWeight: 'bold', fontSize: 20 }}>
              {initials}
            </Avatar>
          </Col>
        </Row>
      </Row>
    ),
    {
      notes: 'Avatar with Square shape and initials',
    },
  )
  .add(
    'with circle shape and initials',
    () => (
      <Row>
        <Row gutter={36}>
          <Col span={8}>
            <Text strong>32</Text> small
          </Col>
          <Col span={8}>
            <Text strong>40</Text> medium
          </Col>
          <Col span={8}>
            <Text strong>80</Text> large
          </Col>
        </Row>
        <Row gutter={36}>
          <Col span={8}>
            <Avatar size="small" shape="circle" color="#46a094" style={{ fontWeight: 'bold', fontSize: 10 }}>
              {initials}
            </Avatar>
          </Col>
          <Col span={8}>
            <Avatar size="medium" shape="circle" color="#8260da" style={{ fontWeight: 'bold', fontSize: 20 }}>
              {initials}
            </Avatar>
          </Col>
          <Col span={8}>
            <Avatar size="large" shape="circle" color="#8260da" style={{ fontWeight: 'bold', fontSize: 20 }}>
              {initials}
            </Avatar>
          </Col>
        </Row>
      </Row>
    ),
    {
      notes: 'Avatar with Square shape and initials',
    },
  )
  .add('with custom size', () => <Avatar src={src} size={size} />, {
    notes: 'Avatar with custom size',
  })
  .add('with an icon', () => <Avatar icon="user" />, {
    notes: 'Avatar with an icon',
  })
  .add('company logo', () => (
    <Row gutter={32}>
      {companyList.map((company) => (
        <Col span={8} key={company.companyId}>
          <Avatar src={company.avatarUrl} size="medium" shape="square" color={company.avatarColor}>
            {company.name[0]}
          </Avatar>
        </Col>
      ))}
    </Row>
  ));
