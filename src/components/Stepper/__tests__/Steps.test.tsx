import { Steps as AntdSteps } from 'antd';
import { mount } from 'enzyme';
import React from 'react';

import Steps from '../Stepper';

const { Step: AntdStep } = AntdSteps

describe('Steps test', () => {
  let wrapper = mount(<Steps />);
  afterEach(() => wrapper.unmount());
  it('renders appropriately', () => {
    wrapper = mount(
      <Steps>
        <AntdSteps.Step title="Resume" />
        <AntdSteps.Step title="Resume" />
        <AntdSteps.Step title="Resume" />
      </Steps>,
    );

    const steps = wrapper.find(AntdStep);
    expect(steps).toHaveLength(3);
  });
});
