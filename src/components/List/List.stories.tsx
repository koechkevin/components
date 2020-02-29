import { faEllipsisH, faPencil } from '@fortawesome/pro-regular-svg-icons';
import { storiesOf } from '@storybook/react';
import { Row } from 'antd';
import React from 'react';

import { Avatar } from '../Avatar';
import { Icon } from '../Icon';
import ListItem from './ListItem';

const avatar = 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png';

storiesOf('List', module)
  .addDecorator((story: any) => <Row>{story()}</Row>)
  .add('default', () => <ListItem>List Item Content</ListItem>)
  .add('ListItem with hover', () => <ListItem hover title="List Item" trailing={<Icon hover icon={faEllipsisH} />} />)
  .add('ListItem with leading, title, description', () => (
    <ListItem hover leading={<Avatar src={avatar} size="small" />} title="List Item" description="Secondary Text" />
  ))
  .add('ListItem with trailing ', () => (
    <ListItem
      hover
      title="List Item"
      description="Secondary Text"
      leading={<Avatar src={avatar} size="small" />}
      trailing={
        <>
          <Icon hover icon={faPencil} />
          <Icon hover icon={faEllipsisH} />
        </>
      }
    />
  ));
