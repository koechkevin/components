import { faSquare } from '@fortawesome/pro-regular-svg-icons';
import { mount, ReactWrapper } from 'enzyme';
import React from 'react';

import { Icon } from '../../Icon';
import Label, { Props } from '../Label';

describe('Tests for label', () => {
  const props: Props = {
    leading: <Icon icon={faSquare} />,
    trailing: <Icon icon={faSquare} />,
  };
  const text: string = 'Text';
  const wrapper: ReactWrapper = mount(<Label {...props}>{text}</Label>);

  it('Should mount without crushing', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Should contain the label Text', () => {
    expect(wrapper.text()).toEqual(text);
  });

  it('Should have trailing and leading elements', () => {
    const leading: ReactWrapper = wrapper.prop('leading');
    const trailing: ReactWrapper = wrapper.prop('trailing');

    expect(leading).toEqual(props.leading);
    expect(trailing).toEqual(props.trailing);
  });
});
