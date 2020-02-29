import { faPencil, faTrash } from '@fortawesome/pro-regular-svg-icons';
import { storiesOf } from '@storybook/react';
import { Card, Row, Typography } from 'antd';
import { BrowserRouter } from 'dva/router';
import React, { CSSProperties } from 'react';

import { BotAvatarType } from '../../utils/constants';
import { HoverMenu, MoreActionsMenu } from '../Chat';
import { BotAvatar } from './BotAvatar';
import BotMessage from './BotMessage';
import { botDirectMessage, message } from './mock';
import SnoozeModal from './SnoozeModal';

const { Grid } = Card;
const { Text } = Typography;
const gridStyle: CSSProperties = {
  width: '25%',
  textAlign: 'center',
};
const poppedMenu = (
  <HoverMenu
    actionMenu={
      <MoreActionsMenu
        message={message}
        menu={[
          {
            icon: faPencil,
            text: 'Edit Message',
            handler: (message: object) => null,
          },
          {
            icon: faTrash,
            text: 'Delete Message',
            isDanger: true,
            handler: (message: object) => null,
          },
        ]}
      />
    }
  />
);

const reminderList = [
  { label: 'Snooze for 20 minutes', value: 20 * 60 },
  { label: 'Snooze for 1 hour', value: 60 * 60 },
  { label: 'Snooze for 3 hours', value: 3 * 60 * 60 },
  { label: 'Snooze until tomorrow 9am', value: 9 * 60 * 60 },
];

storiesOf('Chat Bot', module)
  .add('Bot reminder Direct Message', () => (
    <BrowserRouter>
      <Row style={{ paddingTop: 16 }}>
        <BotMessage message={botDirectMessage} poppedMenu={poppedMenu} />
      </Row>
    </BrowserRouter>
  ))
  .add('Bot Avatar', () => (
    <Card bordered={false} title="Bot Avatar">
      <Grid style={{ textAlign: 'center', width: '100%' }}>
        <BotAvatar />
        <br />
        <Text copyable={{ text: '<BotAvatar />' }}>Bot Avatar Default</Text>
      </Grid>

      {/* Bot avatar calender */}
      <Grid style={gridStyle}>
        <BotAvatar type={BotAvatarType.CalenderYellow} />
        <br />
        <Text copyable={{ text: '<BotAvatar type={BotAvatarType.CalenderYellow} />' }}>Bot Avatar Calender Yellow</Text>
      </Grid>
      <Grid style={gridStyle}>
        <BotAvatar type={BotAvatarType.CalenderCyan} />
        <br />
        <Text copyable={{ text: '<BotAvatar type={BotAvatarType.CalenderCyan} />' }}>Bot Avatar Calender Cyan</Text>
      </Grid>
      <Grid style={gridStyle}>
        <BotAvatar type={BotAvatarType.CalenderRed} />
        <br />
        <Text copyable={{ text: '<BotAvatar type={BotAvatarType.CalenderRed} />' }}>Bot Avatar Calender Red</Text>
      </Grid>
      <Grid style={gridStyle}>
        <BotAvatar type={BotAvatarType.CalenderGreen} />
        <br />
        <Text copyable={{ text: '<BotAvatar type={BotAvatarType.CalenderGreen} />' }}>Bot Avatar Calender Green</Text>
      </Grid>

      {/* Bot avatar clip */}
      <Grid style={gridStyle}>
        <BotAvatar type={BotAvatarType.ClipYellow} />
        <br />
        <Text copyable={{ text: '<BotAvatar type={BotAvatarType.ClipYellow} />' }}>Bot Avatar Clip Yellow</Text>
      </Grid>
      <Grid style={gridStyle}>
        <BotAvatar type={BotAvatarType.ClipCyan} />
        <br />
        <Text copyable={{ text: '<BotAvatar type={BotAvatarType.ClipCyan} />' }}>Bot Avatar Clip Cyan</Text>
      </Grid>
      <Grid style={gridStyle}>
        <BotAvatar type={BotAvatarType.ClipRed} />
        <br />
        <Text copyable={{ text: '<BotAvatar type={BotAvatarType.ClipRed} />' }}>Bot Avatar Clip Red</Text>
      </Grid>
      <Grid style={gridStyle}>
        <BotAvatar type={BotAvatarType.ClipGreen} />
        <br />
        <Text copyable={{ text: '<BotAvatar type={BotAvatarType.ClipGreen} />' }}>Bot Avatar Clip Green</Text>
      </Grid>

      {/* Bot avatar pen */}
      <Grid style={gridStyle}>
        <BotAvatar type={BotAvatarType.PenYellow} />
        <br />
        <Text copyable={{ text: '<BotAvatar type={BotAvatarType.PenYellow} />' }}>Bot Avatar Pen Yellow</Text>
      </Grid>
      <Grid style={gridStyle}>
        <BotAvatar type={BotAvatarType.PenCyan} />
        <br />
        <Text copyable={{ text: '<BotAvatar type={BotAvatarType.PenCyan} />' }}>Bot Avatar Pen Cyan</Text>
      </Grid>
      <Grid style={gridStyle}>
        <BotAvatar type={BotAvatarType.PenRed} />
        <br />
        <Text copyable={{ text: '<BotAvatar type={BotAvatarType.PenRed} />' }}>Bot Avatar Pen Red</Text>
      </Grid>
      <Grid style={gridStyle}>
        <BotAvatar type={BotAvatarType.PenGreen} />
        <br />
        <Text copyable={{ text: '<BotAvatar type={BotAvatarType.PenGreen} />' }}>Bot Avatar Pen Green</Text>
      </Grid>

      {/* Bot avatar lock */}
      <Grid style={gridStyle}>
        <BotAvatar type={BotAvatarType.LockYellow} />
        <br />
        <Text copyable={{ text: '<BotAvatar type={BotAvatarType.LockYellow} />' }}>Bot Avatar Lock Yellow</Text>
      </Grid>
      <Grid style={gridStyle}>
        <BotAvatar type={BotAvatarType.LockCyan} />
        <br />
        <Text copyable={{ text: '<BotAvatar type={BotAvatarType.LockCyan} />' }}>Bot Avatar Lock Cyan</Text>
      </Grid>
      <Grid style={gridStyle}>
        <BotAvatar type={BotAvatarType.LockRed} />
        <br />
        <Text copyable={{ text: '<BotAvatar type={BotAvatarType.LockRed} />' }}>Bot Avatar Lock Red</Text>
      </Grid>
      <Grid style={gridStyle}>
        <BotAvatar type={BotAvatarType.LockGreen} />
        <br />
        <Text copyable={{ text: '<BotAvatar type={BotAvatarType.LockGreen} />' }}>Bot Avatar Lock Green</Text>
      </Grid>
    </Card>
  ))
  .add('Snooze Reminder', () => <SnoozeModal visible reminderList={reminderList} />);
