import { faCaretDown } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dropdown } from 'antd';
import React, { FC, ReactNode, useState } from 'react';

import styles from './Filter.module.scss';

export interface OverlayOption {
  value: string;
  render?: ReactNode;
}

export interface FilterOption {
  name: string;
  selected: string;
  overlay: ReactNode;
  onSelect?: any;
  withSearch?: boolean;
}

interface Props {
  filterOption: FilterOption;
}

export const FilterOption: FC<Props> = (props) => {
  const { filterOption } = props;
  const { selected, overlay } = filterOption;
  const [open, setOpen] = useState<boolean>(false);

  const onVisibleChange = (): void => {
    setOpen(!open);
  };

  return (
    <>
      <Dropdown trigger={['click']} visible={open} onVisibleChange={onVisibleChange} overlay={overlay}>
        <span style={{ marginRight: 16 }}>
          <button onClick={onVisibleChange} className={styles.button}>
            <span style={{ marginRight: 6 }}>{`${filterOption.name}: All`}</span>
            <FontAwesomeIcon icon={faCaretDown} />
          </button>
        </span>
      </Dropdown>

      {open && (
        <button className={styles.selected}>
          <span style={{ marginRight: 6 }}>{selected}</span>
          <FontAwesomeIcon icon={faCaretDown} />
        </button>
      )}
    </>
  );
};

export default FilterOption;
