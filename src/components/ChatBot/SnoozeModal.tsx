import { Row } from 'antd';
import { ModalProps } from 'antd/lib/modal';
import React, { FC } from 'react';

import Button from '../Button/Button';
import Modal from '../Modal/Modal';

interface Props extends ModalProps {
  reminderList: any[];
  onSnooze?: (params?: object) => void;
}

const SnoozeModal: FC<Props> = (props) => {
  const { onSnooze, reminderList, ...otherProps } = props;

  return (
    <Modal centered width={500} title="Snooze Reminder" footer={null} {...otherProps}>
      <Row>
        {reminderList && reminderList.length
          ? reminderList.map((item, index: number) => (
              <Button block ghost key={index} style={{ marginBottom: 16 }} onClick={() => onSnooze && onSnooze(item)}>
                {item.label}
              </Button>
            ))
          : null}
      </Row>
    </Modal>
  );
};

export default SnoozeModal;
