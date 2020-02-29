import { Avatar as AntdAvatar, Row, Tag as AntdTag } from 'antd';
import React, { FC } from 'react';

import styles from './Signature.module.scss';

export interface LabelProps {
  label?: string;
}

const Label: FC<LabelProps> = (props) => {
  const { label } = props;
  return <AntdTag className={styles.default}>{label}</AntdTag>;
};

export interface AvatarProps {
  nickName?: string;
}

const Avatar: FC<AvatarProps & React.HTMLAttributes<HTMLDivElement>> = (props) => {
  const { nickName } = props;
  return <AntdAvatar className={styles.avatar}>{nickName}</AntdAvatar>;
};

export interface Props {
  visibility: 'visible' | 'hidden';
  name?: string;
  status: string;
  label?: string;
}

export interface ISignatureLabel {
  name?: string;
  visibility: 'visible' | 'hidden';
  style?: React.CSSProperties;
  label?: string;
}

export interface ISignatureAvatar {
  name?: string;
  visibility: 'visible' | 'hidden';
  style?: React.CSSProperties;
}

const SignatureLabel: FC<ISignatureLabel & React.HTMLAttributes<HTMLDivElement>> = (props) => {
  const { name, visibility, label } = props;
  return (
    <AntdTag className={styles.label} style={{ visibility }}>
      {name && <Row className={styles.outerLabel}>{name}</Row>}
      {label && <Label label={label} />}
    </AntdTag>
  );
};

const SignatureAvatar: FC<ISignatureAvatar & React.HTMLAttributes<HTMLDivElement>> = (props) => {
  const { name, visibility } = props;
  const initials = (name && name.match(/\b\w/g)) || [];
  const nickName = ((initials.shift() || '') + (initials.pop() || '')).toUpperCase();

  return (
    <AntdTag className={styles.label} style={{ visibility }}>
      <span className={styles.outerLabel}>{name}</span>
      <Avatar nickName={nickName} />
    </AntdTag>
  );
};

const Signature: FC<Props> = (props) => {
  const { visibility, name, status, label } = props;

  return status === 'Owner' ? (
    <SignatureLabel visibility={visibility} name={name} label={label} className={styles.label} />
  ) : (
    <SignatureAvatar name={name} className={styles.label} visibility={visibility} />
  );
};

export default Signature;
