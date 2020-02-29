import { AvatarProps } from 'antd/lib/avatar';
import { CSSProperties, ReactNode } from 'react';

enum ChatStatus {
  online = 'online',
  offline = 'offline',
}

export interface Props extends AvatarProps {
  src?: string;
  dot?: boolean;
  status?: ChatStatus | string;
  size?: number | 'xsmall' | 'small' | 'medium' | 'large' | 'default';
  color?: string;
}
