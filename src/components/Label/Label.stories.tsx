import { faCheck, faSquare, faTimes} from '@fortawesome/pro-regular-svg-icons';
import { storiesOf } from '@storybook/react';
import React from 'react';

import { Center } from '../Center/Center';
import { Icon } from '../Icon';
import Label from './Label';

storiesOf('Label', module)
  .addDecorator((story: any) => <Center>{story()}</Center>)
  .add('default', () => <Label>Choice Label</Label>)
  .add('trailing icon', () => <Label trailing={<Icon icon={faTimes} />}>Choice Label</Label>)
  .add('Double Icon', () => (
    <Label trailing={<Icon icon={faSquare} />} leading={<Icon icon={faSquare} />}>
      Double Icon
    </Label>
  ))
  .add('With leading only', () => <Label leading={<Icon icon={faCheck} />}>Choice Label</Label>)
  .add('with custom colors', () => (
    <>
      <Label color="#2b9037" background="#dfece1">
        Recruiter
      </Label>
      <Label color="#9c43d6" background="#eedff8">
        Billing
      </Label>
      <Label color="#d7a84b" background="#faeccb">
        Owner
      </Label>
      <Label color="#565656" background="#eaeaea">
        Guest
      </Label>
      <Label color="#565656" background="#eaeaea">
        Team Member
      </Label>
    </>
  ));
