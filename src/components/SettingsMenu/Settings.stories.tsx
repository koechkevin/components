import { storiesOf } from '@storybook/react';
import { Col, Row, Typography } from 'antd';
import { MemoryRouter } from 'dva/router';
import React from 'react';

import { select, text } from '@storybook/addon-knobs';
import SettingsMenu from './Settings';

const stories = storiesOf('Settings Menu', module);

const style = {
  border: '1px solid lightgray',
  marginRight: 12,
  minHeight: '100vh',
};

stories.addDecorator((story) => (
  <Row type="flex" justify="center" gutter={12}>
    <MemoryRouter>{story()}</MemoryRouter>
  </Row>
));

stories.add('default', () => {
  const routes = [
    {
      name: text('name', 'Account'),
      path: '/app/settings/account',
      routes: [
        {
          name: text('name1', 'Profile'),
          path: '/app/settings/account/profile',
        },
      ],
    },
    {
      name: 'Company',
      path: '/app/settings/company',
      routes: [
        {
          name: 'Activity Log',
          path: '/app/settings/company/activity-log',
        },
        {
          name: 'Export Data',
          path: '/app/settings/company/export-data',
        },
        {
          name: 'Compliance',
          path: '/app/settings/company/compliance',
        },
      ],
    },
  ];

  const routes2 = [
    {
      name: 'Team',
      path: '/app/settings/team',
      routes: [
        {
          name: 'Members',
          path: '/app/settings/team/members',
        },
        {
          name: 'Permissions',
          path: '/app/settings/team/permissions',
        },
      ],
    },
    {
      name: 'Billing',
      path: '/app/settings/billing',
      routes: [
        {
          name: 'Payments',
          path: '/app/settings/billing/payments',
        },
        {
          name: 'History',
          path: '/app/settings/billing/history',
        },
        {
          name: 'Estimates',
          path: '/app/settings/billing/estimates',
        },
      ],
    },
  ];

  const pathOptions: string[] = [];
  [...routes, ...routes2].forEach((e) => {
    if (e.routes) {
      e.routes.forEach((route) => {
        pathOptions.push(route.path);
      });
    }
  });

  const location = {
    pathname: select('Active Link', pathOptions, pathOptions[0], 'id'),
  };

  return (
    <>
      <Col style={style} span={6}>
        <Typography.Text style={{ marginLeft: '30%', fontWeight: 'bold' }}>Sample Settings Menu</Typography.Text>
        <SettingsMenu
          logoUrl="https://res.cloudinary.com/dbk8ky24f/image/upload/v1575967304/djnntbzevzgj8oepi9ru.png"
          routes={routes}
          location={location}
        />
      </Col>
      <Col style={style} span={6}>
        <Typography.Text style={{ marginLeft: '30%', fontWeight: 'bold' }}>No Company Name</Typography.Text>
        <SettingsMenu routes={[...routes, ...routes2]} location={location} />
      </Col>
      <Col style={style} span={6}>
        <Typography.Text style={{ marginLeft: '30%', fontWeight: 'bold' }}>Sample Links</Typography.Text>
        <SettingsMenu
          logoUrl="https://res.cloudinary.com/dbk8ky24f/image/upload/v1575967304/djnntbzevzgj8oepi9ru.png"
          routes={routes2}
          location={{ pathname: '/app/settings/billing/payments' }}
        />
      </Col>
    </>
  );
});
