import { IconDefinition } from '@fortawesome/pro-regular-svg-icons';
import { DropDownProps } from 'antd/lib/dropdown';
import { MenuProps as AntdMenuProps } from 'antd/lib/menu';
import { ReactNode } from 'react';

export interface Item {
  text?: string | any;
  icon?: ReactNode;
  divideAfter?: boolean;
  disabled?: boolean;
  onSelect?: (e: any) => void;
}

export interface Props extends DropDownProps {
  items: Item[];
  width?: number;
  menuProps?: AntdMenuProps;
}

export interface MenuProps extends AntdMenuProps {
  width?: number;
  expandIcon?: ReactNode;
}

export interface IconMenuProps {
  icon?: ReactNode;
}

export interface MenuItemProps {
  path: string;
  name: string;
  iconColor?: string;
  lock?: boolean;
  createdBy?: string;
  isDrafted?: boolean;
  showBadge?: boolean;
  badgeCount?: number;
  icon?: IconDefinition;
  iconHeight?: number;
  iconWidth?: number;
  hideInMenu?: boolean;
  routes?: MenuItemProps[];
  tooltip?: string;
  count?: number;
  isTyping?: boolean;
  newMessagesCount?: number;
}

export interface ChannelItem {
  id?: string;
  name?: string;
  tooltip?: string;
  path?: string;
  icon?: IconDefinition;
  iconColor?: string;
  iconHeight?: number;
  iconWidth?: number;
  lastMessageAt?: Date | number | string;
  currentUser?: string;
  lock?: boolean;
  isMyAccount?: boolean;
  createdAt?: Date | number | string;
  updatedAt?: Date | number | string;
  createdBy?: string;
  isDrafted?: boolean;
  removable?: boolean;
  count?: number;
  isTyping?: boolean;
  newMessagesCount?: number;
}
