import { Card, Col, Row, Typography } from 'antd';
import React, { CSSProperties } from 'react';

import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';

import Button from './Button';
import notes from './Button.md';
import ToggleButton from './ToggleButton';

const { Title, Text } = Typography;
const { Grid } = Card;
const gridStyle: CSSProperties = {
  width: '25%',
  textAlign: 'center',
};
const gridStyle1: CSSProperties = {
  width: '33.333333%',
  textAlign: 'center',
};
const gridStyle2: CSSProperties = {
  width: '33.333333%',
  textAlign: 'center',
  backgroundColor: '#0050c8',
};

const toggleStyleNegative: CSSProperties = {
  float: 'right',
  fontSize: '12px',
  color: 'white',
  top: '100%',
  marginTop: '20%',
};

storiesOf('Button', module)
  .addDecorator((story) => <div style={{ padding: 24 }}>{story()}</div>)
  .add(
    'primary',
    () => (
      <>
        <Title level={2}>Button states</Title>
        <Row gutter={24}>
          <Col>
            <Card bordered={false} title="Primary Button">
              <Grid style={gridStyle}>
                <Button type="primary" onClick={action('onClick')}>
                  Enabled
                </Button>
              </Grid>
              <Grid style={gridStyle}>
                <Button type="primary">Hover</Button>
              </Grid>
              <Grid style={gridStyle}>
                <Button type="primary" disabled>
                  Disabled
                </Button>
              </Grid>
              <Grid style={gridStyle}>
                <Button type="primary" loading>
                  Loading
                </Button>
              </Grid>
              <Grid style={gridStyle}>
                <Button type="primary" size="large">
                  Enabled
                </Button>
              </Grid>
              <Grid style={gridStyle}>
                <Button type="primary" size="large">
                  Hover
                </Button>
              </Grid>
              <Grid style={gridStyle}>
                <Button type="primary" size="large" disabled>
                  Disabled
                </Button>
              </Grid>
              <Grid style={gridStyle}>
                <Button type="primary" size="large" loading>
                  Loading
                </Button>
              </Grid>
            </Card>
          </Col>
          <Col style={{ marginTop: 24 }}>
            <Card bordered={false} title="Negative Button">
              <Grid style={gridStyle}>
                <Button type="primary" size="small" ghost>
                  Enabled
                </Button>
              </Grid>
              <Grid style={gridStyle}>
                <Button type="primary" size="small" ghost>
                  Hover
                </Button>
              </Grid>
              <Grid style={gridStyle}>
                <Button type="primary" size="small" ghost disabled>
                  Disabled
                </Button>
              </Grid>
              <Grid style={gridStyle}>
                <Button type="primary" size="small" ghost loading>
                  Loading
                </Button>
              </Grid>
              <Grid style={gridStyle}>
                <Button size="large" type="primary" ghost>
                  Enabled
                </Button>
              </Grid>
              <Grid style={gridStyle}>
                <Button size="large" type="primary" ghost>
                  Hover
                </Button>
              </Grid>
              <Grid style={gridStyle}>
                <Button size="large" type="primary" ghost disabled>
                  Disabled
                </Button>
              </Grid>
              <Grid style={gridStyle}>
                <Button size="large" type="primary" ghost loading>
                  Loading
                </Button>
              </Grid>
            </Card>
          </Col>
          <Col style={{ marginTop: 24 }}>
            <Card bordered={false} title="Danger Button">
              <Grid style={gridStyle}>
                <Button type="danger">Enabled</Button>
              </Grid>
              <Grid style={gridStyle}>
                <Button type="danger">Hover</Button>
              </Grid>
              <Grid style={gridStyle}>
                <Button type="danger" disabled>
                  Disabled
                </Button>
              </Grid>
              <Grid style={gridStyle}>
                <Button type="danger" loading>
                  Loading
                </Button>
              </Grid>
              <Grid style={gridStyle}>
                <Button size="large" type="danger">
                  Enabled
                </Button>
              </Grid>
              <Grid style={gridStyle}>
                <Button size="large" type="danger">
                  Hover
                </Button>
              </Grid>
              <Grid style={gridStyle}>
                <Button size="large" type="danger" disabled>
                  Disabled
                </Button>
              </Grid>
              <Grid style={gridStyle}>
                <Button size="large" type="danger" loading>
                  Loading
                </Button>
              </Grid>
            </Card>
          </Col>
          <Col style={{ marginTop: 24 }}>
            <Card bordered={false} title="Default Buttons">
              <Grid style={gridStyle}>
                <Button size="small">Enabled</Button>
              </Grid>
              <Grid style={gridStyle}>
                <Button size="small">Hover</Button>
              </Grid>
              <Grid style={gridStyle}>
                <Button size="small" disabled>
                  Disabled
                </Button>
              </Grid>
              <Grid style={gridStyle}>
                <Button size="small" loading>
                  Loading
                </Button>
              </Grid>
              <Grid style={gridStyle}>
                <Button>Enabled</Button>
              </Grid>
              <Grid style={gridStyle}>
                <Button>Hover</Button>
              </Grid>
              <Grid style={gridStyle}>
                <Button disabled>Disabled</Button>
              </Grid>
              <Grid style={gridStyle}>
                <Button loading>Loading</Button>
              </Grid>
              <Grid style={gridStyle}>
                <Button size="large">Enabled</Button>
              </Grid>
              <Grid style={gridStyle}>
                <Button size="large">Hover</Button>
              </Grid>
              <Grid style={gridStyle}>
                <Button size="large" disabled>
                  Disabled
                </Button>
              </Grid>
              <Grid style={gridStyle}>
                <Button size="large" loading>
                  Loading
                </Button>
              </Grid>
            </Card>
          </Col>
          <Col style={{ marginTop: 24 }}>
            <Card bordered={false} title="Round Button">
              <Grid style={gridStyle}>
                <Button type="primary" size="small" shape="round">
                  Enabled
                </Button>
              </Grid>
              <Grid style={gridStyle}>
                <Button type="primary" size="small" shape="round">
                  Hover
                </Button>
              </Grid>
              <Grid style={gridStyle}>
                <Button type="primary" size="small" shape="round" disabled>
                  Disabled
                </Button>
              </Grid>
              <Grid style={gridStyle}>
                <Button type="primary" size="small" shape="round" loading>
                  Loading
                </Button>
              </Grid>
              <Grid style={gridStyle}>
                <Button type="primary" shape="round" onClick={action('onClick')}>
                  Enabled
                </Button>
              </Grid>
              <Grid style={gridStyle}>
                <Button type="primary" shape="round">
                  Hover
                </Button>
              </Grid>
              <Grid style={gridStyle}>
                <Button type="primary" shape="round" disabled>
                  Disabled
                </Button>
              </Grid>
              <Grid style={gridStyle}>
                <Button type="primary" shape="round" loading>
                  Loading
                </Button>
              </Grid>
            </Card>
          </Col>
          <Col style={{ marginTop: 24 }}>
            <Card bordered={false} title="Link Button">
              <Grid style={gridStyle}>
                <Button type="link">Enabled</Button>
              </Grid>
              <Grid style={gridStyle}>
                <Button type="link">Hover</Button>
              </Grid>
              <Grid style={gridStyle}>
                <Button type="link" disabled>
                  Disabled
                </Button>
              </Grid>
              <Grid style={gridStyle}>
                <Button type="link" loading>
                  Loading
                </Button>
              </Grid>
            </Card>
          </Col>
          <Col style={{ marginTop: 24 }}>
            <Card bordered={false} title="Toggle Button">
              <Grid style={gridStyle1}>
                <ToggleButton checked={false} />
                <Text style={{ ...toggleStyleNegative, color: 'black' }}>Enabled</Text>
              </Grid>
              <Grid style={gridStyle1}>
                <ToggleButton style={{ backgroundColor: 'rgb(223, 233, 248)' }} checked={false} />
                <Text style={{ ...toggleStyleNegative, color: 'black' }}>Hover</Text>
              </Grid>
              <Grid style={gridStyle1}>
                <ToggleButton disabled checked={false} />
                <Text style={{ ...toggleStyleNegative, color: 'black' }}>Disabled</Text>
              </Grid>
              <Grid style={gridStyle2}>
                <ToggleButton onClick={action('onClick')} checked />
                <Text style={toggleStyleNegative}>Enabled</Text>
              </Grid>
              <Grid style={gridStyle2}>
                <ToggleButton style={{ backgroundColor: 'rgb(0, 61, 150)' }} checked />
                <Text style={toggleStyleNegative}>Hover</Text>
              </Grid>
              <Grid style={gridStyle2}>
                <ToggleButton checked disabled />
                <Text style={toggleStyleNegative}>Disabled</Text>
              </Grid>
            </Card>
          </Col>
          <Col style={{ marginTop: 24 }}>
            <Card bordered={false} title="Mobile Button">
              <Grid style={gridStyle}>
                <Button type="primary" block style={{ marginBottom: 24 }}>
                  Enabled
                </Button>
                <Button type="primary" block style={{ marginBottom: 24 }}>
                  Hover
                </Button>
                <Button type="primary" disabled block style={{ marginBottom: 24 }}>
                  Disabled
                </Button>
                <Button type="primary" loading block style={{ marginBottom: 24 }}>
                  Loading
                </Button>
              </Grid>
              <Grid style={gridStyle}>
                <Button type="primary" ghost block style={{ marginBottom: 24 }}>
                  Enabled
                </Button>
                <Button type="primary" ghost block style={{ marginBottom: 24 }}>
                  Hover
                </Button>
                <Button type="primary" ghost disabled block style={{ marginBottom: 24 }}>
                  Disabled
                </Button>
                <Button type="primary" ghost loading block style={{ marginBottom: 24 }}>
                  Loading
                </Button>
              </Grid>
              <Grid style={gridStyle}>
                <Button type="danger" block style={{ marginBottom: 24 }}>
                  Enabled
                </Button>
                <Button type="danger" block style={{ marginBottom: 24 }}>
                  Hover
                </Button>
                <Button type="danger" disabled block style={{ marginBottom: 24 }}>
                  Disabled
                </Button>
                <Button type="danger" loading block style={{ marginBottom: 24 }}>
                  Loading
                </Button>
              </Grid>
            </Card>
          </Col>
        </Row>
      </>
    ),
    {
      notes: { markDown: notes },
    },
  );
