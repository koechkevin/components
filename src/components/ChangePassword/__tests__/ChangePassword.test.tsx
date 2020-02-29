import { Input } from 'antd';
import { mount } from 'enzyme';
import React from 'react';

import ChangePassword from '../../ChangePassword/ChangePassword';

describe('change password component', () => {
  let wrapper = mount(
    <ChangePassword visible errors={[]} loading={false} validateStatus="" onCancel={() => {}} onOk={() => {}} />,
  );

  afterEach(() => wrapper.unmount());

  it('renders all the input fields', () => {
    wrapper = mount(
      <ChangePassword visible errors={[]} loading={false} validateStatus="" onCancel={() => {}} onOk={() => {}} />,
    );
    expect(wrapper.find(Input)).toHaveLength(3);
  });

  it('gets form values, on click submit executes action with form values', () => {
    let value: any = {};

    wrapper = mount(
      <ChangePassword
        visible
        errors={[]}
        loading={false}
        validateStatus=""
        onCancel={() => {}}
        onOk={(data) => (value = data)}
      />,
    );
    const currentPassword = wrapper.find('input#currentPassword');
    const newPassword = wrapper.find('input#newPassword');
    const confirmNewPassword = wrapper.find('input#confirmNewPassword');

    currentPassword.simulate('change', { target: { value: 'currentPassword' } });
    newPassword.simulate('change', { target: { value: 'sample new password' } });
    confirmNewPassword.simulate('change', { target: { value: 'sample new password' } });

    const submitButton = wrapper.find('.ant-btn-primary.ant-btn-lg');
    expect(submitButton).toHaveLength(1);
    submitButton.simulate('click');

    expect(value.currentPassword).toEqual('currentPassword');
    expect(value.newPassword).toEqual('sample new password');
    expect(value.confirmNewPassword).toEqual('sample new password');
  });

  it('simulates error props change && closes modal on cancel', () => {
    const mockFunction = jest.fn();
    wrapper = mount(
      <ChangePassword
        visible
        onCancel={() => {}}
        errors={[
          {
            field: 'currentPassword',
            message: 'Password does not match',
          },
        ]}
        loading={false}
        validateStatus=""
        onOk={mockFunction}
      />,
    );
    const errors = [
      {
        field: 'currentPassword',
        message: 'Password does not match',
      },
      {
        field: 'newPassword',
        message: 'Password must contain at least: 1 lowercase char, 1 UPPERCASE char, 1 special char or number',
      },
      {
        field: 'confirmNewPassword',
        message: 'Confirm New Password must be equal to "New Password".',
      },
    ];
    wrapper.setProps({ errors });
    const cancelButton = wrapper.find('.ant-btn-link');
    const errorMessage = wrapper.find('.ant-form-explain');
    cancelButton.simulate('click');
    expect(cancelButton).toHaveLength(1);
    expect(errorMessage).toHaveLength(1);
  });
});
