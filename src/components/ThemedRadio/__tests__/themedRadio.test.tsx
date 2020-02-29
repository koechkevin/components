import { mount, ReactWrapper } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';

import RadioButton from '../../RadioButton/RadioButton';
import ThemedRadio from '../ThemedRadio';

describe('themed radio button', () => {
  it('renders checked button without crashing', () => {
    const wrapper: ReactWrapper = mount(
      <ThemedRadio checked={true} label="Owner" theme={'blue'} onSelect={jest.fn()} />,
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders unchecked button without crashing', () => {
    const wrapper: ReactWrapper = mount(
      <ThemedRadio checked={false} label="Owner" theme={'primary'} onSelect={jest.fn()} />,
    );
    expect(wrapper.find(RadioButton)).toHaveLength(1);
  });
});
