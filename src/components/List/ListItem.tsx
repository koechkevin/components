import { List } from 'antd';
import React, { CSSProperties, FC, ReactNode } from 'react';

import styles from './ListItem.module.scss';

const { Item } = List;

interface Props {
  hover?: boolean;
  title?: ReactNode;
  leading?: ReactNode;
  trailing?: ReactNode;
  className?: string;
  style?: CSSProperties;
  description?: ReactNode;
}

export const ListItem: FC<Props> = (props) => {
  const { className, children, hover, leading, trailing, title, description, ...restProps } = props;
  const cls = [styles.listItem, className, hover ? styles.hover : ''].join(' ');

  return (
    <Item {...restProps} extra={trailing} className={cls}>
      <Item.Meta avatar={leading} title={title} description={description} />
      {children}
    </Item>
  );
};

export default ListItem;
