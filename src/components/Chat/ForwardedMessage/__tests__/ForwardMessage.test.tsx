import { shallow } from 'enzyme';
import React from 'react';
import { ProductType } from '../../../../utils';

import timeStampFormat from '../../../../utils/timestampFormat';
import ForwardMessage from '../ForwardedMessage';

describe('Tests for forward message component', () => {
  const props = {
    id: 'sampleMessageId',
    threadId: 'sampleThreadId',
    createdAt: '2019-10-08 06:22:09',
    author: {
      id: 'user-fake-id',
      name: 'Jane Doe',
      avatarColor: '#4224',
      chatStatus: 'offline',
      productId: ProductType.Candidate,
    },
    text: 'sample text',
  };

  const wrapper = shallow(<ForwardMessage {...props} />);

  it('should test for mounting of the component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  // it('should render name of author', () => {
  //   expect(
  //     wrapper
  //       .find('span')
  //       .last()
  //       .text(),
  //   ).toEqual(props.author.name);
  // });

  // it('should render the created at timestamp', () => {
  //   expect(wrapper.contains(timeStampFormat(new Date(props.createdAt)))).toEqual(true);
  // });
});
