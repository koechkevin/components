import { faCircle } from '@fortawesome/pro-solid-svg-icons';

import { BotMessage, Status } from '../../typings/Message.d';

const user = {
  id: '662175e2-93a2-4977-99bd-89e66ca89a79',
  name: 'Chacha Zhou',
  avatar: '',
  avatarColor: '#46A094',
  status: 'active',
  chatStatus: 'offline',
  productId: 'candidate-portal',
  signature: 'Software Engineer',
  icon: faCircle,
  iconColor: '#39c049',
};

export const botDirectMessage: BotMessage = {
  id: '5d861e2775b4b200183e33a5',
  type: Status.upcoming,
  isPrivate: true,
  createdAt: '2019-11-22T16:40:29.240Z',
  remindAt: '2019-12-8T16:40:29.240Z',
  updatedAt: '2019-10-22T16:40:29.240Z',
};

export const message = {
  id: '5d861e2775b4b200183e33a5',
  text:
    'HSLA color values are http://www.google.com an extension of HSL color values with an alpha channel - which specifies the opacity for a color. <br/>An HSLA color value is specified with: hsla(hue, saturation, lightness, alpha), where the alpha parameter defines the opacity. The alpha parameter is a number between 0.0 (fully transparent) and 1.0 (fully opaque).',
  forwarding: null,
  author: user,
  createdAt: '2019-10-22T16:40:29.240Z',
  updatedAt: '2019-10-22T16:40:29.240Z',
  threadInfo: {
    count: 4,
    authors: [user],
    lastMessageAt: '2019-10-22T16:40:29.240Z',
  },
  isModified: true,
};
