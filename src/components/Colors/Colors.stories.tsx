import { Col, Row, Typography } from 'antd';
import React from 'react';

import { storiesOf } from '@storybook/react';

import styles from './Colors.module.scss';

const { Text, Title, Paragraph } = Typography;

storiesOf('Colors', module)
  .addDecorator((story) => <div className={styles.colors}>{story()}</div>)
  .add('Aurora Color Palette', () => (
    <>
      <Title level={2}>Aurora Color Palette </Title>
      <Row style={{ marginTop: 32 }}>
        <Col span={8}>
          <Row>
            <Col span={24} style={{ backgroundColor: '#1D1D1D' }}>
              <Text strong>Dark</Text>
              <br />
              <Text copyable>#1D1D1D</Text>
            </Col>
          </Row>
          <Row>
            <Col span={12} style={{ backgroundColor: '#161616' }}>
              <Text copyable>#161616</Text>
            </Col>
            <Col span={12} style={{ backgroundColor: '#606060' }}>
              <Text copyable>#606060</Text>
            </Col>
          </Row>
          <Row>
            <Col span={12} style={{ backgroundColor: '#d2d2d2' }}>
              <Text copyable>#D2D2D2</Text>
            </Col>
            <Col span={6} style={{ backgroundColor: '#e4e4e4' }}>
              <Text copyable>#E4E4E4</Text>
            </Col>
            <Col span={6} style={{ backgroundColor: '#f3f3f3' }}>
              <Text copyable>#F3F3F3</Text>
            </Col>
          </Row>
        </Col>

        <Col span={8}>
          <Row>
            <Col span={24} style={{ backgroundColor: '#0050c8' }}>
              <Text strong>Main Blue</Text>
              <br />
              <Text copyable>#0050C8</Text>
            </Col>
            <Row>
              <Col span={24} style={{ backgroundColor: '#003c96' }}>
                <Text copyable>#003C96</Text>
              </Col>
            </Row>
            <Row>
              <Col span={24} style={{ backgroundColor: '#dfe9f8' }}>
                <Text copyable>#DFE9F8</Text>
              </Col>
            </Row>
          </Row>
        </Col>
        <Col span={8}>
          <Row>
            <Col span={24} style={{ backgroundColor: '#ff4b33' }}>
              <Text strong>Red</Text>
              <br />
              <Text copyable>#FF4B33</Text>
            </Col>
            <Row>
              <Col span={24} style={{ backgroundColor: '#e6432e' }}>
                <Text copyable>#E6432E</Text>
              </Col>
            </Row>
            <Row>
              <Col span={24} style={{ backgroundColor: '#ffd9d5' }}>
                <Text copyable>#FFD9D5</Text>
              </Col>
            </Row>
          </Row>
        </Col>
      </Row>

      {/* second row */}
      <Row style={{ marginTop: 32 }}>
        <Col span={8}>
          <Row>
            <Col span={24} style={{ backgroundColor: '#ecb22e' }}>
              <Text strong>Yellow</Text>
              <br />
              <Text copyable>#ECB22E</Text>
            </Col>
          </Row>
          <Row>
            <Col span={24} style={{ backgroundColor: '#c98c15' }}>
              <Text copyable>#C98C15</Text>
            </Col>
          </Row>
          <Row>
            <Col span={12} style={{ backgroundColor: '#ffdb89' }}>
              <Text copyable>#FFDB89</Text>
            </Col>
            <Col span={12} style={{ backgroundColor: '#fff2d4' }}>
              <Text copyable>#FFF2d4</Text>
            </Col>
          </Row>
        </Col>

        <Col span={8}>
          <Row>
            <Col span={24} style={{ backgroundColor: '#39c049' }}>
              <Text strong>Green</Text>
              <br />
              <Text copyable>#39C049</Text>
            </Col>
            <Row>
              <Col span={24} style={{ backgroundColor: '#2b9037' }}>
                <Text copyable>#2B9037</Text>
              </Col>
            </Row>
            <Row>
              <Col span={24} style={{ backgroundColor: '#e6f7e8' }}>
                <Text copyable>#E6F7E8</Text>
              </Col>
            </Row>
          </Row>
        </Col>

        {/* Other colors */}
        <Col span={8}>
          <Row>
            <Col span={24} style={{ backgroundColor: '#565656' }}>
              <Text strong>Medium Gray**</Text>
              <br />
              <Text copyable>#565656</Text>
            </Col>
            <Row>
              <Col span={24} style={{ backgroundColor: '#414141' }}>
                <Text copyable>#414141</Text>
              </Col>
            </Row>
            <Row>
              <Col span={24} style={{ backgroundColor: '#eaeaea' }}>
                <Text copyable>#eaeaea</Text>
              </Col>
            </Row>
          </Row>
        </Col>

        <Col span={8}>
          <Row>
            <Col span={24} style={{ backgroundColor: '#C7C7C7' }}>
              <Text strong>Light Gray**</Text>
              <br />
              <Text copyable>#C7C7C7</Text>
            </Col>
            <Row>
              <Col span={24} style={{ backgroundColor: '#959595' }}>
                <Text copyable>#959595</Text>
              </Col>
            </Row>
            <Row>
              <Col span={24} style={{ backgroundColor: '#f8f8f8' }}>
                <Text copyable>#f8f8f8</Text>
              </Col>
            </Row>
          </Row>
        </Col>

        <Col span={8}>
          <Row>
            <Col span={24} style={{ backgroundColor: '#00640C' }}>
              <Text strong>Green**</Text>
              <br />
              <Text copyable>#00640C</Text>
            </Col>
            <Row>
              <Col span={24} style={{ backgroundColor: '#004b09' }}>
                <Text copyable>#004b09</Text>
              </Col>
            </Row>
            <Row>
              <Col span={24} style={{ backgroundColor: '#dfece1' }}>
                <Text copyable>#dfece1</Text>
              </Col>
            </Row>
          </Row>
        </Col>

        <Col span={8}>
          <Row>
            <Col span={24} style={{ backgroundColor: '#C81400' }}>
              <Text strong>Red**</Text>
              <br />
              <Text copyable>#C81400</Text>
            </Col>
            <Row>
              <Col span={24} style={{ backgroundColor: '#960f00' }}>
                <Text copyable>#960f00</Text>
              </Col>
            </Row>
            <Row>
              <Col span={24} style={{ backgroundColor: '#f8e2df' }}>
                <Text copyable>#f8e2df</Text>
              </Col>
            </Row>
          </Row>
        </Col>
      </Row>
    </>
  ))
  .add('Avatar Color Palette', () => (
    <>
      <Title level={2}>Avatar Color Palette </Title>
      <Paragraph>Every color has been</Paragraph>
      <Row gutter={24} className={styles.avatarColor}>
        <Col span={6} style={{ backgroundColor: '#46a094' }}>
          <Text strong>01 Green</Text>
          <br />
          <Text copyable>#46a094</Text>
        </Col>
        <Col span={6} style={{ backgroundColor: '#53C0B4' }}>
          <Text strong>02 Aquamarine</Text>
          <br />
          <Text copyable>#53C0B4</Text>
        </Col>
        <Col span={6} style={{ backgroundColor: '#5D85CE' }}>
          <Text strong>03 Blue</Text>
          <br />
          <Text copyable>#5D85CE</Text>
        </Col>
        <Col span={6} style={{ backgroundColor: '#8260DA' }}>
          <Text strong>04 Lilac</Text>
          <br />
          <Text copyable>#8260DA</Text>
        </Col>
        <Col span={6} style={{ backgroundColor: '#A866DA' }}>
          <Text strong>05 Orchid</Text>
          <br />
          <Text copyable>#A866DA</Text>
        </Col>
        <Col span={6} style={{ backgroundColor: '#DA5FAC' }}>
          <Text strong>06 Pink</Text>
          <br />
          <Text copyable>#DA5FAC</Text>
        </Col>
        <Col span={6} style={{ backgroundColor: '#FB6D77' }}>
          <Text strong>07 Red</Text>
          <br />
          <Text copyable>#FB6D77</Text>
        </Col>
        <Col span={6} style={{ backgroundColor: '#FFAC6F' }}>
          <Text strong>08 Orange</Text>
          <br />
          <Text copyable>#FFAC6F</Text>
        </Col>
        <Col span={6} style={{ backgroundColor: '#D09F5B' }}>
          <Text strong>09 Yellow</Text>
          <br />
          <Text copyable>#D09F5B</Text>
        </Col>
        <Col span={6} style={{ backgroundColor: '#ecb22e' }}>
          <Text strong>Main Yellow</Text>
          <br />
          <Text copyable>#ecb22e</Text>
        </Col>
        <Col span={6} style={{ backgroundColor: '#c98c15' }}>
          <Text strong>2 Yellow</Text>
          <br />
          <Text copyable>#c98c15</Text>
        </Col>
        <Col span={6} style={{ backgroundColor: '#ffdb89' }}>
          <Text strong>3 Yellow</Text>
          <br />
          <Text copyable>#ffdb89</Text>
        </Col>
        <Col span={6} style={{ backgroundColor: '#fff2d4' }}>
          <Text strong>3 Yellow</Text>
          <br />
          <Text copyable>#fff2d4</Text>
        </Col>
        <Col span={6} style={{ backgroundColor: '#E4C467' }}>
          <Text strong>10 Khaki</Text>
          <br />
          <Text copyable>#E4C467</Text>
        </Col>
      </Row>
    </>
  ));
