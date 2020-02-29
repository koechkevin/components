import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';

import Loading from '../Loading';

describe('Loading Component Test', () => {
  it('renders with loading icon', () => {
    const tree = shallow(<Loading />);
    expect(toJson(tree)).toMatchSnapshot();
  });

  it('renders with tip', () => {
    const tree = shallow(<Loading tip="Please wait, loading..." />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
