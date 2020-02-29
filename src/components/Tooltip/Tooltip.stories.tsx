import { number } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { Button, Col, Row, Typography } from 'antd';
import React from 'react';

import Tooltip from './Tooltip';

const text = <span>Example text</span>;
const buttonWidth = 70;
const { Title } = Typography;

storiesOf('Tooltip', module).add('default', () => {
  const delay = number('Delay', 0.1);

  return (
    <Row gutter={24}>
      <Col lg={12} md={24} style={{ paddingTop: 60, paddingLeft: 32 }}>
        <Title level={3}>Dark Theme</Title>
        <div style={{ marginLeft: buttonWidth, marginTop: 32, whiteSpace: 'nowrap' }}>
          <Tooltip delay={delay} placement="topLeft" title={text}>
            <Button>TL</Button>
          </Tooltip>
          <Tooltip delay={delay} placement="top" title={text}>
            <Button>Top</Button>
          </Tooltip>
          <Tooltip delay={delay} placement="topRight" title={text}>
            <Button>TR</Button>
          </Tooltip>
        </div>
        <div style={{ width: buttonWidth, float: 'left' }}>
          <Tooltip delay={delay} placement="leftTop" title={text}>
            <Button>LT</Button>
          </Tooltip>
          <Tooltip delay={delay} placement="left" title={text}>
            <Button>Left</Button>
          </Tooltip>
          <Tooltip delay={delay} placement="leftBottom" title={text}>
            <Button>LB</Button>
          </Tooltip>
        </div>
        <div style={{ width: buttonWidth, marginLeft: buttonWidth * 4 + 24 }}>
          <Tooltip delay={delay} placement="rightTop" title={text}>
            <Button>RT</Button>
          </Tooltip>
          <Tooltip delay={delay} placement="right" title={text}>
            <Button>Right</Button>
          </Tooltip>
          <Tooltip delay={delay} placement="rightBottom" title={text}>
            <Button>RB</Button>
          </Tooltip>
        </div>
        <div style={{ marginLeft: buttonWidth, clear: 'both', whiteSpace: 'nowrap' }}>
          <Tooltip delay={delay} placement="bottomLeft" title={text}>
            <Button>BL</Button>
          </Tooltip>
          <Tooltip delay={delay} placement="bottom" title={text}>
            <Button>Bottom</Button>
          </Tooltip>
          <Tooltip delay={delay} placement="bottomRight" title={text}>
            <Button>BR</Button>
          </Tooltip>
        </div>
      </Col>
      <Col lg={12} md={24} style={{ paddingTop: 60, paddingLeft: 32 }}>
        <Title level={3}>White Theme</Title>
        <div style={{ marginLeft: buttonWidth, marginTop: 32, whiteSpace: 'nowrap' }}>
          <Tooltip delay={delay} placement="topLeft" title={text} light>
            <Button>TL</Button>
          </Tooltip>
          <Tooltip delay={delay} placement="top" title={text} light>
            <Button>Top</Button>
          </Tooltip>
          <Tooltip delay={delay} placement="topRight" title={text} light>
            <Button>TR</Button>
          </Tooltip>
        </div>
        <div style={{ width: buttonWidth, float: 'left' }}>
          <Tooltip delay={delay} placement="leftTop" title={text} light>
            <Button>LT</Button>
          </Tooltip>
          <Tooltip delay={delay} placement="left" title={text} light>
            <Button>Left</Button>
          </Tooltip>
          <Tooltip delay={delay} placement="leftBottom" title={text} light>
            <Button>LB</Button>
          </Tooltip>
        </div>
        <div style={{ width: buttonWidth, marginLeft: buttonWidth * 4 + 24 }}>
          <Tooltip delay={delay} placement="rightTop" title={text} light>
            <Button>RT</Button>
          </Tooltip>
          <Tooltip delay={delay} placement="right" title={text} light>
            <Button>Right</Button>
          </Tooltip>
          <Tooltip delay={delay} placement="rightBottom" title={text} light>
            <Button>RB</Button>
          </Tooltip>
        </div>
        <div style={{ marginLeft: buttonWidth, clear: 'both', whiteSpace: 'nowrap' }}>
          <Tooltip delay={delay} placement="bottomLeft" title={text} light>
            <Button>BL</Button>
          </Tooltip>
          <Tooltip delay={delay} placement="bottom" title={text} light>
            <Button>Bottom</Button>
          </Tooltip>
          <Tooltip delay={delay} placement="bottomRight" title={text} light>
            <Button>BR</Button>
          </Tooltip>
        </div>
      </Col>
    </Row>
  );
});
