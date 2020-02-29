import { Steps as AntdSteps } from 'antd';
import { StepsProps } from 'antd/lib/steps';
import React, { FC } from 'react';

import styles from './Stepper.module.scss';

interface TitleProps {
  title: string;
  required: boolean;
}

export const StepTitle: React.FC<TitleProps> = (props) => {
  const { title, required } = props;
  return (
    <>
      {`${title} `}
      <span className={styles.required}>{`${required ? '(Required)' : ''}`}</span>
    </>
  );
};

const Stepper: FC<StepsProps> = (props) => {
  const { className, direction } = props;
  const classNames = `${styles.steps} ${className || ''}`;

  return <AntdSteps {...props} className={classNames} direction={direction || 'vertical'} />;
};

export default Stepper;
