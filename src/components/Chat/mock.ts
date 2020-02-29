import { faCircle as faCircleOutline } from '@fortawesome/pro-regular-svg-icons';
import { faCircle } from '@fortawesome/pro-solid-svg-icons';

import { FileModel, MessageItemProps, SuggestionsUser } from '../../typings/Message';

export const file = {
  uid: '',
  size: 1024,
  type: 'pdf',
  name: 'Jane_Doe_Cv.pdf',
  lastModified: 1234,
  webkitRelativePath: '',
  lastModifiedDate: new Date(),
};

export const users: SuggestionsUser[] = [
  {
    id: '"6b550839-ac88-4691-a399-ae9d1465d073',
    name: 'Ke Yang',
    avatar: '',
    avatarColor: '#FB6D77',
    status: 'active',
    chatStatus: 'online',
    productId: 'company-portal',
    signature: 'UX / UI Designer',
    label: 'Label',
    icon: faCircle,
    iconColor: '#39c049',
  },
  {
    id: '02cbc571-6f03-4fea-85af-ba3527869090',
    name: 'Emery Muhozi',
    avatar: '',
    avatarColor: '#5D85CE',
    status: 'active',
    chatStatus: 'online',
    productId: 'company-portal',
    signature: undefined,
    icon: faCircleOutline,
    iconColor: '#959595',
  },
  {
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
  },
  {
    id: '30d681e4-1551-49a5-9726-a745ad62838e',
    name: 'Morshed Alam',
    avatar: '',
    avatarColor: '#dfc475',
    status: 'active',
    chatStatus: 'offline',
    productId: 'candidate-portal',
    signature: 'Human Resources Manager',
    icon: faCircleOutline,
    iconColor: '#959595',
  },
  {
    id: '91d2fff3-ed29-47c7-bb21-3c478aff8caa',
    name: 'Alexander Fomin',
    avatar: '',
    avatarColor: '#6585c9',
    status: 'active',
    chatStatus: 'online',
    productId: 'candidate-portal',
    signature: 'Placement Manager',
    icon: faCircle,
    iconColor: '#39c049',
  },
  {
    id: '50915eca-0c64-4d53-aff7-545984f19af3',
    name: 'Sam Hash',
    avatar: '',
    avatarColor: '#666',
    status: 'active',
    chatStatus: 'online',
    productId: 'candidate-portal',
    signature: 'Placement Manager',
    icon: faCircleOutline,
    iconColor: '#959595',
  },
];

export const messages: MessageItemProps[] = [
  {
    id: '5d861e2775b4b200183e33a5',
    text:
      'HSLA color values are http://www.google.com an extension of HSL color values with an alpha channel - which specifies the opacity for a color. <br/>An HSLA color value is specified with: hsla(hue, saturation, lightness, alpha), where the alpha parameter defines the opacity. The alpha parameter is a number between 0.0 (fully transparent) and 1.0 (fully opaque).',
    forwarding: null,
    author: users[0],
    createdAt: '2019-10-22T16:40:29.240Z',
    updatedAt: '2019-10-22T16:40:29.240Z',
    threadInfo: {
      count: 4,
      authors: [users[1], users[2]],
      lastMessageAt: '2019-10-22T16:40:29.240Z',
    },
    isModified: true,
    file: {
      ...file,
      fileId: '1234',
      profileId: '',
    } as FileModel,
  },
  {
    id: '63762ebd-b714-4940-b989-b8db7c4002b4',
    text: 'A Version 4 UUID is a universally unique identifier that is generated using random numbers.',
    forwarding: null,
    author: users[0],
    createdAt: '2019-10-22T16:40:29.240Z',
    updatedAt: '2019-10-22T16:40:29.240Z',
    threadInfo: {
      count: 23,
      authors: [users[0], users[1], users[3], users[2]],
      lastMessageAt: '2019-10-22T16:40:29.240Z',
    },
    isModified: false,
  },
  {
    id: '63762ebd-b714-4940-b989-b8db7c4002b4',
    text: 'When a message has been deleted and had threaded messages in it',
    forwarding: null,
    author: users[0],
    createdAt: '2019-10-22T16:40:29.240Z',
    updatedAt: '2019-10-22T16:40:29.240Z',
    threadInfo: {
      count: 3,
      authors: [users[0]],
      lastMessageAt: '2019-10-22T16:40:29.240Z',
    },
    isModified: true,
    isDeleted: true,
  },

  {
    id: '63762ebd-b714-4940-b989-b8db7c4002b4',
    text: 'You are responsible for using \r\nthe UUIDs and assume any risk \r\nshowing multiple lines text content',
    forwarding: null,
    author: users[0],
    createdAt: '2019-10-22T16:40:29.240Z',
    updatedAt: '2019-10-22T16:40:29.240Z',
    threadInfo: {
      count: 23,
      authors: [users[0], users[1], users[4], users[2], users[3]],
      lastMessageAt: '2019-10-22T16:40:29.240Z',
    },
    isModified: false,
  },
  {
    id: '5d777045a2dcf20018ccad61',
    text: 'contain forwarding message below :) http://www.google.com',
    forwarding: {
      id: '5d6a1a38a2dcf20018ccad2d',
      threadId: '5d5e377a0ffa4f0018809fae',
      type: 'Normal',
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo, est nec tincidunt pharetra, dolor purus mattis sem, eget lobortis ex eros a arcu. Sed in turpis a nisl tincidunt faucibus.',
      createdAt: '2019-10-22T16:40:29.240Z',
      updatedAt: '2019-10-22T16:40:29.240Z',
      replies: [],
      author: users[1],
    },
    author: users[0],
    createdAt: '2019-10-22T16:40:29.240Z',
    updatedAt: '2019-10-22T16:40:29.240Z',
    threadInfo: {
      count: 23,
      authors: [users[0], users[1], users[3]],
      lastMessageAt: '2019-10-22T16:40:29.240Z',
    },
  },
  {
    id: '35cc2f98-1f55-4ecf-8f37-ecac8414290e',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempor dolor quis ex eleifend sollicitudin. Nullam eleifend, nisi et facilisis ullamcorper, justo quam cursus metus, tempus commodo nulla arcu eu nunc. Nullam pretium molestie maximus.',
    author: users[0],
    createdAt: '2019-10-22T16:40:29.240Z',
    updatedAt: '2019-10-22T16:40:29.240Z',
    threadInfo: null,
    file: {
      ...file,
      profileId: '',
      percent: 50,
      status: 'uploading',
    } as FileModel,
  },
];

export const texts = [
  {
    id: 'c5aadd40-6752-4d24-b27f-78aba29b0f71',
    text: `When mouse move entering, there's NO menu popped`,
    createdAt: '2019-10-22T16:40:29.240Z',
    updatedAt: '2019-10-22T16:40:29.240Z',
    menuShown: false,
    file: {
      ...file,
      fileId: 'abcd',
      profileId: '',
    } as FileModel,
  },
  {
    id: '3464f31c-fb4c-4835-9c3c-b6d3ef6f07e8',
    text: `Prethink gain traction low engagement nor vec, yet 4-blocker. We are running out of runway. Back to the drawing-board. Peel the onion agile let's put a pin in that.Can you send me an invite? I have zero cycles for this, but design thinking so you better eat a reality sandwich before you walk back in that boardroom, for five - year strategic plan.Viral engagement product market fit translating our vision of having a market leading platfrom.Deploy to production we need to have a Come to Jesus meeting with Phil about his attitude.Blue sky thinking.`,
    createdAt: '2019-10-22T16:40:29.240Z',
    updatedAt: '2019-10-22T16:40:29.240Z',
  },
  {
    id: 'b2c06e39-8f22-4294-a79a-3d921292543b',
    text: 'the textual message www.google.com \r\nthat has been changed',
    createdAt: '2019-10-22T16:40:29.240Z',
    updatedAt: '2019-10-22T16:40:29.240Z',
    isModified: true,
    menuShown: true,
  },
];
