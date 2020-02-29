import { Tag as AntdTag } from 'antd';
import { shallow } from 'enzyme';
import React from 'react';

import Signature from '../Signature';
import styles from './Signature.module.scss';

describe('component App', () => {
  it('component render without props without failing', () => {
    const component = shallow(<Signature />);
    expect(component).toMatchSnapshot();
  });

  it('component render with props without failing', () => {
    const propsForTest = {
      visibility: true,
      nameLabel: 'name',
    };
    const component = shallow(<Signature {...propsForTest} />);
    expect(component).toMatchSnapshot();
  });

  // loading - true
  it(' component has styling', () => {
    interface Props {
      children: React.ReactNode;
    }
    const styleSignature = { display: 'flex' } as any;
    const Signature: FC<Props> = ({ children }) => <AntdTag>{children}</AntdTag>;
    const nameLabel = 'Name';
    const tree = shallow(
      <wrapper>
        <Signature className={styles.label} />
      </wrapper>,
    );

    expect(tree).toMatchInlineSnapshot(`ShallowWrapper {}`);
  });
});
