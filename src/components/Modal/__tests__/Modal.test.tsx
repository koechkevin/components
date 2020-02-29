import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';

import Modal, { Footer } from '../Modal';

describe('Modal Test', () => {
  it('should not display the modal', () => {
    const tree = shallow(<Modal visible={false}>Modal Test</Modal>);
    const props = tree.props();

    expect(props.visible).toEqual(false);
    expect(toJson(tree)).toMatchSnapshot();
  });

  it('should display the modal', () => {
    const tree = shallow(<Modal visible>Modal Test</Modal>);
    const props = tree.props();

    expect(props.visible).toEqual(true);
    expect(toJson(tree)).toMatchSnapshot();
  });

  it('should display the modal without title', () => {
    const tree = shallow(
      <Modal visible title={null}>
        Modal Test
      </Modal>,
    );
    const props = tree.props();

    expect(props.title).toEqual(null);
    expect(toJson(tree)).toMatchSnapshot();
  });

  it('should display the modal with title "Test Modal Title"', () => {
    const tree = shallow(
      <Modal visible title="Test Modal Title">
        Modal Test
      </Modal>,
    );
    const props = tree.props();

    expect(props.title).toEqual('Test Modal Title');
    expect(toJson(tree)).toMatchSnapshot();
  });

  it('should display the modal without footer', () => {
    const tree = shallow(
      <Modal visible footer={null}>
        Modal Test
      </Modal>,
    );
    const props = tree.props();

    expect(props.footer).toEqual(null);
    expect(toJson(tree)).toMatchSnapshot();
  });

  it('should display the modal with footer "Test Modal Footer"', () => {
    const tree = shallow(
      <Modal visible footer="Test Modal Footer">
        Modal Test
      </Modal>,
    );
    const props = tree.props();

    expect(props.footer).toEqual('Test Modal Footer');
    expect(toJson(tree)).toMatchSnapshot();
  });
});

describe('Modal Footer Test', () => {
  it('should display the footer with a title "Ok Button"', () => {
    const tree = mount(<Footer okText="Ok Button">Modal Test</Footer>);
    const props = tree.props();

    expect(props.okText).toEqual('Ok Button');
    expect(toJson(tree)).toMatchSnapshot();
  });

  it('should display the footer with cancel button text "Cancel Button"', () => {
    const tree = mount(<Footer cancelText="Cancel Button">Modal Test</Footer>);
    const props = tree.props();

    expect(props.cancelText).toEqual('Cancel Button');
    expect(toJson(tree)).toMatchSnapshot();
  });
});
