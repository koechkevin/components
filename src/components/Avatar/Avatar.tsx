import { Avatar as AntdAvatar } from 'antd';
import React, { FC } from 'react';

import styles from './Avatar.module.scss';

import { Props } from './interface.d';

export const Avatar: FC<Props> = (props) => {
  const { children, className, icon, src, shape, size, style, color } = props;
  const avatarSizes = {
    small: 32,
    medium: 40,
    large: 80,
    default: 'default',
  };
  const avatarSize = size && (avatarSizes[size] || size);
  const placeholderIcon = src ? icon : 'user';
  const classNames: string = [styles.avatar, className ? className : ''].join(' ');
  const avatarColor = color && !src ? { backgroundColor: color } : {};

  return (
    <AntdAvatar
      src={src}
      shape={shape}
      size={avatarSize}
      className={classNames}
      style={{ minWidth: avatarSize, ...avatarColor, ...style }}
      icon={!children ? placeholderIcon : ''}
    >
      {children}
    </AntdAvatar>
  );
};

Avatar.defaultProps = {
  size: 'default',
};

export default Avatar;
