import { storiesOf } from '@storybook/react';
import React from 'react';

import Loading from './Loading';

storiesOf('Loading', module).add('default', () => <Loading spinning />);
