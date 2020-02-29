# Aurora UI Components Library

```Note
These instructions will get you how to add component to ui_library package and
how to use this library in Aurora project. And including library structures
and coding standard, please review it seriously.
```

## How to use it

### `npm i @aurora_app/ui-library` or `yarn add @aurora_app/ui-library`

Install the package

```Typescript
/* index.tsx or index.jsx */
import React from 'react;
import { Button } from '@aurora_app/ui-library';

// You have to import component styles in root component
import @aurora_app/ui-library/lib/index.css

export default () => <Button>This is a button</Button>
```

> This UI library need `React`, `antd`, `date-fns`, `react-input-trigger`these dependencies
> so you have to install these packages in your project, I will optimize these library's compatibility

## Component List

```Typescript
  Avatar,
  Label,
  BaseMenu,
  Button,
  ChannelMenu,
  Checkbox,
  CompanyModal,
  DateLabel,
  DatePicker,
  ErrorBoundary,
  FileDropZone,
  FileItem,
  Input,
  InputCard,
  InputTypes,
  ListItem,
  Loading,
  MenuItem,
  Modal,
  Progress,
  Select,
  SideBar,
  SideBarHeader,
  SidePanel,
  Signature,
  SortingIndicator,
  Suggestion,
  ThemedRadio,
  Tooltip,
  Header,
  ChatHeader,
  Switch,
  Tabs,
  Tag,
  Typing,
  SideNav,
  TextArea,
  Filter,
  YearPicker,
  MonthPicker,
  SettingsMenu,
  UserListItem,
  RadioButton,
  ChangePassword,
  Stepper,
  NativeSelect,
  Icon,
  Menu,
  SubMenu,
  IconMenuItem,
  Paragraph,
  ResendCode,
  Text,
  Title,
  /** chat */
  BotAvatar,
  DateDivisionLine,
  NewMessageDivider,
  ForwardedMessage,
  HoverMenu,
  MessageDeleteModal,
  MessageEditableItem,
  MessageInput,
  MessageItem,
  MessageTextualItem,
  MoreActionsMenu,
  FileUploadModal,
  BotMessage,
  SnoozeModal,
  StartThreadMenu,
```

## Available Scripts

In the project directory, you can run:

### `npm start` or `yarn start`

Runs the aurora UI library storybook
Open [http://localhost:9009/](http://localhost:9009/) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### `npm test` or `yarn test`

Launches the test runner in the interactive watch mode.
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build` or `yarn build`

Builds the UI library to the `dist` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run lint:fix` or `yarn lint:fix`

We have tslint config for checking developer’s coding style, if your files have some tslint
errors, please run this script for auto fixing the syntax errors.
