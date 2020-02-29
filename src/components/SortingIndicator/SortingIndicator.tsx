import { faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons';
import { faSortDown as faSortDownLg, faSortUp as faSortUpLg } from '@fortawesome/pro-light-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC, Fragment, useState } from 'react';

import styles from './SortingIndicator.module.scss';

interface Props {
  sort?: boolean;
}

const renderIcons = (asc?: boolean, desc?: boolean) => {
  const ascIcon = asc ? faSortUp : faSortUpLg;
  const descIcon = desc ? faSortDown : faSortDownLg;

  return (
    <Fragment>
      <FontAwesomeIcon icon={ascIcon} />
      <FontAwesomeIcon icon={descIcon} />
    </Fragment>
  );
};

const SortingIndicator: FC<Props> = (props) => {
  const { sort } = props;
  const [sorting, setSorting] = useState(sort);

  const asc = sorting === true;
  const desc = sorting === false;

  const handleClick = () => {
    setSorting(Boolean(!sorting));
  };

  return (
    <div className={styles.root} onClick={handleClick}>
      {renderIcons(asc, desc)}
    </div>
  );
};

export default SortingIndicator;
