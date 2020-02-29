import { Link, MemoryRouter } from 'dva/router';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';

import { SettingsMenu } from '../../..';

describe('Settings Menu Test', () => {
  it('mounts without crashing', () => {
    const wrapper = mount(<SettingsMenu routes={[]} location={{ pathname: '' }} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders all routes appropriately', () => {
    const routes = [
      {
        name: 'Account',
        path: '/app/settings/account',
        routes: [
          {
            name: 'Profile',
            path: '/app/settings/account/profile',
          },
          {
            name: 'Account',
            path: '/app/settings/account/account',
          },
        ],
      },
    ];
    const wrapper = mount(
      <MemoryRouter>
        <SettingsMenu companyName="Aurora Unit Test" routes={routes} location={{ pathname: '/app/settings/account/profile' }} />
      </MemoryRouter>,
    );
    const link = wrapper.find(Link);
    expect(link).toHaveLength(2);
  });
});
