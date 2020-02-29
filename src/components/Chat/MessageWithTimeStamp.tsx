import React from 'react';

import format from '../../utils/timestampFormat';

const MessageWithTimeStamp = () => {
  const now = new Date('2019-09-10T23:10:57');
  const t1 = new Date('2019-09-10T23:09:58');
  const t2 = new Date('2019-09-10T23:06:18');
  const t3 = new Date('2019-09-10T22:40:48');
  const t4 = new Date('2019-09-10T00:00:10');
  const t5 = new Date('2019-09-09T23:59:58');
  const t6 = new Date('2018-12-21T22:11:11');
  const t7 = new Date('2018-10-11T09:42:39');

  return (
    <div>
      <p>{format(t1, now)}</p>
      <p>{format(t2, now)}</p>
      <p>{format(t3, now)}</p>
      <p>{format(t4, now)}</p>
      <p>{format(t5, now)}</p>
      <p>{format(t6, now)}</p>
      <p>{format(t7, now)}</p>
    </div>
  );
};

export default MessageWithTimeStamp;
