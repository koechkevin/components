import { IconDefinition } from '@fortawesome/pro-solid-svg-icons';
import { UploadFile } from 'antd/lib/upload/interface.d';

// Interface describes thumbnail property of the FileModel
export interface FileThumbnail {
  width: number;
  signedUrl: string;
}

// Interface describes data model of a file from the file-server
export interface FileModel extends UploadFile {
  fileId?: string;
  profileId?: string;
  filename?: string;
  extension?: string;
  webkitRelativePath?: '';
  thumbnails?: FileThumbnail[];
  signedUrl?: string | null;
}

// Interface describes properties of message author model
export interface MessageAuthor {
  id: string;
  name: string;
  avatar?: string;
  productId: string;
  chatStatus: string;
  avatarColor: string;
  signature?: string;
  label?: string;
}

// Interface describes properties of a user model for a chat suggestions
export interface SuggestionsUser extends MessageAuthor {
  status: string;
  inCall?: boolean;
  icon?: IconDefinition;
  iconColor?: string;
}

// Interface describes common properties of all message item components
export interface MessageItemProps {
  id: string;
  text: string;
  file?: FileModel;
  author: MessageAuthor;
  createdAt?: string;
  updatedAt?: string;
  threadInfo?: {
    count: number;
    authors: MessageAuthor[];
    lastMessageAt?: string;
  } | null;
  forwarding?: MessageProps | null;
  isModified?: boolean;
  isDeleted?: boolean;
  parentId?: string;
}

export enum Status {
  upcoming = 'upcoming',
  past = 'past',
  completed = 'completed',
}

export interface BotMessage {
  id?: string;
  type?: string;
  status?: Status;
  object?: any;
  remindAt: string;
  isPrivate?: boolean;
  createdBy?: string;
  updatedAt?: string;
  createdAt?: string;
}
