import { Row } from 'antd';
import { mount } from 'enzyme';
import React from 'react';

import ResendCode from '../ResendCode';

describe('Resend Code component', () => {
  let wrapper = mount(<ResendCode email={''} visible loading={false} onCancel={() => {}} onOk={() => {}} />);

  afterEach(() => wrapper.unmount());

  it('render the provided email the input fields', () => {
    const testEmail = 'testing.account@aurora.app';
    wrapper = mount(<ResendCode email={testEmail} visible loading={false} onCancel={() => {}} onOk={() => {}} />);
    expect(wrapper.find(Row).filter(Row).length).toEqual(3);
    expect(
      wrapper
        .find(Row)
        .filter(Row)
        .first()
        .getDOMNode().textContent,
    ).toEqual('We sent you a verification email at testing.account@aurora.app Please:');
  });
});
