import React, { FC } from 'react';

import avatar from '../../icons/chat-bot-avatar/bot-avatar-default.png';

import calender1 from '../../icons/chat-bot-avatar/bot-avatar-calender-1.png';
import calender2 from '../../icons/chat-bot-avatar/bot-avatar-calender-2.png';
import calender3 from '../../icons/chat-bot-avatar/bot-avatar-calender-3.png';
import calender4 from '../../icons/chat-bot-avatar/bot-avatar-calender-4.png';
import clip1 from '../../icons/chat-bot-avatar/bot-avatar-clip-1.png';
import clip2 from '../../icons/chat-bot-avatar/bot-avatar-clip-2.png';
import clip3 from '../../icons/chat-bot-avatar/bot-avatar-clip-3.png';
import clip4 from '../../icons/chat-bot-avatar/bot-avatar-clip-4.png';
import lock1 from '../../icons/chat-bot-avatar/bot-avatar-lock-1.png';
import lock2 from '../../icons/chat-bot-avatar/bot-avatar-lock-2.png';
import lock3 from '../../icons/chat-bot-avatar/bot-avatar-lock-3.png';
import lock4 from '../../icons/chat-bot-avatar/bot-avatar-lock-4.png';
import pen1 from '../../icons/chat-bot-avatar/bot-avatar-pen-1.png';
import pen2 from '../../icons/chat-bot-avatar/bot-avatar-pen-2.png';
import pen3 from '../../icons/chat-bot-avatar/bot-avatar-pen-3.png';
import pen4 from '../../icons/chat-bot-avatar/bot-avatar-pen-4.png';

import { BotAvatarType } from '../../utils/constants';
import { Avatar } from '../Avatar';

interface Props {
  size?: number;
}

// Bot avatar calender
export const CalenderYellow: FC<Props> = (props) => {
  const { size } = props;
  return <Avatar size={size || 36} shape="square" src={calender1} />;
};

export const CalenderCyan: FC<Props> = (props) => {
  const { size } = props;
  return <Avatar size={size || 36} shape="square" src={calender2} />;
};

export const CalenderRed: FC<Props> = (props) => {
  const { size } = props;
  return <Avatar size={size || 36} shape="square" src={calender3} />;
};

export const CalenderGreen: FC<Props> = (props) => {
  const { size } = props;
  return <Avatar size={size || 36} shape="square" src={calender4} />;
};

// Bot avatar clip
export const ClipYellow: FC<Props> = (props) => {
  const { size } = props;
  return <Avatar size={size || 36} shape="square" src={clip1} />;
};

export const ClipCyan: FC<Props> = (props) => {
  const { size } = props;
  return <Avatar size={size || 36} shape="square" src={clip2} />;
};

export const ClipRed: FC<Props> = (props) => {
  const { size } = props;
  return <Avatar size={size || 36} shape="square" src={clip3} />;
};

export const ClipGreen: FC<Props> = (props) => {
  const { size } = props;
  return <Avatar size={size || 36} shape="square" src={clip4} />;
};

// Bot avatar pen
export const PenYellow: FC<Props> = (props) => {
  const { size } = props;
  return <Avatar size={size || 36} shape="square" src={pen1} />;
};

export const PenCyan: FC<Props> = (props) => {
  const { size } = props;
  return <Avatar size={size || 36} shape="square" src={pen2} />;
};

export const PenRed: FC<Props> = (props) => {
  const { size } = props;
  return <Avatar size={size || 36} shape="square" src={pen3} />;
};

export const PenGreen: FC<Props> = (props) => {
  const { size } = props;
  return <Avatar size={size || 36} shape="square" src={pen4} />;
};

// Bot avatar lock
export const LockYellow: FC<Props> = (props) => {
  const { size } = props;
  return <Avatar size={size || 36} shape="square" src={lock1} />;
};

export const LockCyan: FC<Props> = (props) => {
  const { size } = props;
  return <Avatar size={size || 36} shape="square" src={lock2} />;
};

export const LockRed: FC<Props> = (props) => {
  const { size } = props;
  return <Avatar size={size || 36} shape="square" src={lock3} />;
};

export const LockGreen: FC<Props> = (props) => {
  const { size } = props;
  return <Avatar size={size || 36} shape="square" src={lock4} />;
};

interface AvatarProps {
  size?: number;
  type?: BotAvatarType;
}

// Bot avatar default
export const BotAvatar: FC<AvatarProps> = (props) => {
  const { size, type } = props;

  switch (type) {
    case BotAvatarType.CalenderYellow:
      return <CalenderYellow size={size} />;

    case BotAvatarType.CalenderCyan:
      return <CalenderCyan size={size} />;

    case BotAvatarType.CalenderRed:
      return <CalenderRed size={size} />;

    case BotAvatarType.CalenderGreen:
      return <CalenderGreen size={size} />;

    case BotAvatarType.ClipYellow:
      return <ClipYellow size={size} />;

    case BotAvatarType.ClipCyan:
      return <ClipCyan size={size} />;

    case BotAvatarType.ClipRed:
      return <ClipRed size={size} />;

    case BotAvatarType.ClipGreen:
      return <ClipGreen size={size} />;

    case BotAvatarType.PenYellow:
      return <PenYellow size={size} />;

    case BotAvatarType.PenCyan:
      return <PenCyan size={size} />;

    case BotAvatarType.PenRed:
      return <PenRed size={size} />;

    case BotAvatarType.PenGreen:
      return <PenGreen size={size} />;

    case BotAvatarType.LockYellow:
      return <LockYellow size={size} />;

    case BotAvatarType.LockCyan:
      return <LockCyan size={size} />;

    case BotAvatarType.LockRed:
      return <LockRed size={size} />;

    case BotAvatarType.LockGreen:
      return <LockGreen size={size} />;

    default:
      return <Avatar size={size || 36} shape="square" src={avatar} />;
  }
};

export default BotAvatar;
