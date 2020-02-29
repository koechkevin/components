import { mount } from 'enzyme';
import React from 'react';

import { Button } from '../../..';
import SnoozeModal from '../SnoozeModal';

describe('Tests for snooze modal', () => {
  const props = {
    reminderList: [
      { label: 'Snooze for 20 minutes', value: 20 * 60 },
      { label: 'Snooze for 1 hour', value: 60 * 60 },
    ],
    onSnooze: jest.fn(),
  };

  const wrapper = mount(
    <div>
      <SnoozeModal visible {...props} />
    </div>,
  );

  it('should render snooze modal without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render the modal title', () => {
    expect(wrapper.contains('Snooze Reminder')).toEqual(true);
  });

  it('should display reminder list options', () => {
    expect(wrapper.contains('Snooze for 20 minutes')).toEqual(true);
    expect(wrapper.contains('Snooze for 1 hour')).toEqual(true);
  });

  it('should call onSnooze when reminder button is clicked', () => {
    const button = wrapper.find(Button).last();
    button.simulate('click');
    expect(button.contains('Snooze for 1 hour')).toEqual(true);
    expect(props.onSnooze).toHaveBeenCalled();
  });
});
