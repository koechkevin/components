import { mount, ReactWrapper } from 'enzyme';
import React from 'react';
import { EditorProps } from 'react-draft-wysiwyg';
import RichTextEditor from '../RichTextEditor';

describe('Renders rich text editor', () => {
  const props: EditorProps = {
    onChange: jest.fn(),
  };

  const wrapper: ReactWrapper = mount(<RichTextEditor {...props} />);
  it('Renders rich text editor without crushing', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should simulate change event in the input', () => {
    const inputField: ReactWrapper = wrapper.find('div.notranslate.public-DraftEditor-content').first();
    expect(inputField.exists()).toEqual(true);

    inputField.simulate('change', { event: { target: { value: 'example' } } });
  });
});
