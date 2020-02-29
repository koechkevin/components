import Enzyme, { mount, shallow } from 'enzyme';
import React from 'react';
import Avatar from '../Avatar';

describe('component Avatar', () => {
  it('render without props ', () => {
    const tree = shallow(<Avatar />);
    expect(tree).toMatchSnapshot();
  });

  it('render with icon', () => {
    const tree = shallow(<Avatar icon="user" />);
    expect(tree).toMatchSnapshot();
  });

  it('render with size', () => {
    const size: string = 'size';
    const tree = shallow(<Avatar icon="user" />);
    expect(tree).toMatchSnapshot();
  });

  it('render with children', () => {
    const Image = (src: string) => (
      <img src={src} alt="avatar" style={{ width: '35px', height: '35px' }} />
    );

    const tree = shallow(
      <Avatar icon="user">
        <Image />
      </Avatar>
    );
    expect(tree).toMatchSnapshot();
  });

  it('className', () => {
    const fakeClassName = 'fakeClassName';
    const wrapper = shallow(<Avatar className={fakeClassName} />);
    expect(wrapper.hasClass('fakeClassName')).toEqual(true);
  });

  it('Avatar styling', () => {
    const fakeClassName = 'fakeClassName';
    const wrapper = shallow(<Avatar className={fakeClassName} />);
    const wrapperAvatar = wrapper.find('.fakeClassName');
    expect(wrapperAvatar.length).toEqual(1);
  });

  it('Avatar styling', () => {
    const style = { width: '30px' };
    const fakeClassName = 'fakeClassName';
    const wrapper = shallow(<Avatar className={fakeClassName} style={style} />);
    expect(wrapper.hasClass('fakeClassName')).toEqual(true);
    expect(wrapper.find('.fakeClassName')).toHaveLength(1);
  });
});
