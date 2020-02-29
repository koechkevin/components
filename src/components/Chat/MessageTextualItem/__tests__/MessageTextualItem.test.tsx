import { formatRelative } from 'date-fns';
import { mount } from 'enzyme';
import React from 'react';

import { shortTimeStampFormat } from '../../../../utils';
import { Tooltip } from '../../../Tooltip';
import TextualItem from '../MessageTextualItem';

describe('Tests for MessageItemTextualItem', () => {
  const props = {
    id: 'sampleMessageId',
    createdAt: '2019-10-08 06:22:09',
    updatedAt: '2020-10-08 06:22:09',
    author: {
      id: 'user-fake-id',
      avatarColor: '#4224',
      name: 'Jane Doe',
      productId: 'company-portal',
      chatStatus: 'sample chat status',
    },
    text: 'sample text',
    poppedMenu: <div>Mock Node</div>,
    menuShown: true,
    forwarding: null,
  };

  const wrapper = mount(<TextualItem {...props} />);

  it('should render textual item without crushing', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render createdAt timestamp', () => {
    expect(wrapper.contains(shortTimeStampFormat(new Date(props.createdAt)))).toEqual(true);
  });

  it('should render updatedAd timestamp when modified', () => {
    const updatedProps = {
      ...props,
      isModified: true,
    };

    const updatedWrapper = mount(<TextualItem {...updatedProps} />);
    const toolTip = updatedWrapper.find(Tooltip);

    expect(toolTip.props().title).toEqual(formatRelative(new Date(props.updatedAt), new Date()));
    expect(toolTip.find('span').contains('(Edited)')).toEqual(true);
  });
});
