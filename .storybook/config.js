import {
  configure,
  addDecorator
} from '@storybook/react';
import {
  withConsole,
  setConsoleOptions
} from '@storybook/addon-console';
import StoryRouter from 'storybook-react-router';
import {
  withKnobs
} from '@storybook/addon-knobs';
import requireContext from "require-context.macro";

import 'antd/dist/antd.css';
import '../src/index.scss';

addDecorator(withKnobs);
addDecorator(StoryRouter());
addDecorator((storyFn, context) => withConsole()(storyFn)(context));

setConsoleOptions({
  panelExclude: []
});

// automatically import all files ending in *.stories.tsx
// const req = requireContext('../src', true, /\.stories\.tsx$/);
const req = require.context('../src', true, /\.stories\.tsx$/);

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);