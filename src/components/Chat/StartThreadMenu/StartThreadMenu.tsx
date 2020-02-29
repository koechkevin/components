import { faCommentLines } from '@fortawesome/pro-light-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC } from 'react';

import { Tooltip } from '../../Tooltip';

interface Props {
  messageId?: string;
  startThread?: (id: string) => void;
}

const StartThreadMenu: FC<Props> = (props) => {
  const { messageId, startThread } = props;
  return (
    <>
      <Tooltip title="Start a thread" placement="top">
        <div onClick={() => startThread && messageId && startThread(messageId)}>
          <FontAwesomeIcon icon={faCommentLines} />
        </div>
      </Tooltip>
    </>
  );
};

export default StartThreadMenu;
