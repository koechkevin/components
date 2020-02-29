import { Tooltip as AntdTooltip } from 'antd';
import { AbstractTooltipProps, RenderFunction } from 'antd/lib/tooltip';
import React, { FC, ReactNode } from 'react';

import styles from './Tooltip.module.scss';

interface Props extends AbstractTooltipProps {
  delay?: number;
  light?: boolean;
  title?: RenderFunction | ReactNode;
}

export const Tooltip: FC<Props> = (props) => {
  const { title, light, children, delay, ...restProps } = props;
  const isTouchDevice = () => 'ontouchstart' in window;
  const overlay = light ? styles.light : styles.tooltip;

  return (
    <AntdTooltip
      mouseEnterDelay={delay}
      mouseLeaveDelay={delay}
      title={!isTouchDevice() && title}
      overlayClassName={overlay}
      {...restProps}
    >
      {children}
    </AntdTooltip>
  );
};

Tooltip.defaultProps = {
  delay: 0.0001,
};

export default Tooltip;
