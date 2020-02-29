import { faCaretDown, faCaretUp } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Input, Row } from 'antd';
import React, { FC, ReactNode, useState } from 'react';

import { default as FilterOptionItem } from './FilterOption';

import { isEmpty } from '../../utils';

import styles from './Filter.module.scss';

export interface FilterOption {
  name: string;
  selected: string;
  overlay: ReactNode;
  onSelect?: any;
}

interface Props {
  query: object;
  filterOptions: FilterOption[];
  onClear?: () => void;
  onSearch: (params?: object) => void;
}

const Filter: FC<Props> = (props) => {
  const { query, onClear, onSearch, filterOptions } = props;

  const [visible, setVisible] = useState<boolean>(false);
  const [disabled, setDisabled] = useState<boolean>(isEmpty(query));

  const filterBtn = [styles.button, visible ? styles.active : ''].join(' ');
  const clearBtn = [styles.clearBtn, disabled ? styles.disabled : ''].join(' ');

  const handleClear = () => {
    setDisabled(true);
    onClear && onClear();
  };

  return (
    <Row className={styles.listFilter}>
      <Row type="flex" align="middle">
        <Input placeholder="Search" className={styles.search} onChange={onSearch} style={{ marginRight: 12 }} />
        <button className={filterBtn} onClick={() => setVisible(!visible)}>
          <span style={{ marginRight: 6 }}>Filters</span>
          <FontAwesomeIcon icon={visible ? faCaretUp : faCaretDown} />
        </button>
        <button className={clearBtn} onClick={handleClear}>
          Clear
        </button>
      </Row>
      {visible && filterOptions.length > 0 && (
        <Row type="flex" align="middle" style={{ marginTop: 16, marginBottom: 10 }}>
          {filterOptions.map((each: FilterOption, index: number) => (
            <FilterOptionItem key={index} filterOption={each} />
          ))}
        </Row>
      )}
    </Row>
  );
};

export default Filter;
