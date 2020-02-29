import { storiesOf } from '@storybook/react';
import { Col, Row, Typography } from 'antd';
import moment from 'moment';
import React from 'react';

import DatePicker, { DateDropdown } from './DatePicker';
import MonthPicker, { MonthDropdown } from './MonthPicker';
import YearPicker, { YearDropdown } from './YearPicker';

const Month: React.FC = () => (
  <>
    <Row type="flex" justify="center" gutter={16} align="middle" style={{ padding: 32 }}>
      <Col lg={8}>
        <MonthPicker width="275px" label="Empty" />
      </Col>
      <Col lg={8}>
        <MonthPicker width="275px" value="January" label="With Value" />
      </Col>
      <Col lg={8}>
        <MonthPicker disabled width="275px" label="Disabled" />
      </Col>
    </Row>
    <Row type="flex" justify="center" gutter={16} align="middle" style={{ padding: 32 }}>
      <Col lg={8}>
        <MonthPicker
          width="275px"
          label="Empty"
          inputProps={{
            validateStatus: 'error',
            help: 'Invalid Month',
          }}
        />
      </Col>
      <Col lg={8}>
        <MonthPicker
          width="275px"
          value="August"
          label="Success"
          inputProps={{
            validateStatus: 'success',
            help: 'Hint',
          }}
        />
      </Col>
      <Col lg={8}>
        <MonthPicker
          width="275px"
          label="Error"
          inputProps={{
            validateStatus: 'error',
            help: 'Hint',
          }}
        />
      </Col>
    </Row>
    <Row type="flex" justify="center" gutter={16} align="middle" style={{ padding: 32 }}>
      <Col span={12}>
        <Typography.Title style={{ fontSize: 14 }}>Default dropdown</Typography.Title>
        <MonthDropdown selected={'April'} onSelectMonth={() => {}} />
      </Col>
      <Col span={12}>
        <Typography.Title style={{ fontSize: 14 }}>Another Sample</Typography.Title>
        <MonthDropdown selected="December" onSelectMonth={() => {}} />
      </Col>
    </Row>
  </>
);

const Year: React.FC = () => (
  <>
    <Row type="flex" justify="center" gutter={16} align="middle" style={{ padding: 32 }}>
      <Col lg={8}>
        <YearPicker label="Empty" />
      </Col>
      <Col lg={8}>
        <YearPicker value={2018} label="With Value" />
      </Col>
      <Col lg={8}>
        <YearPicker disabled label="Disabled" />
      </Col>
    </Row>
    <Row type="flex" justify="center" gutter={32} align="middle" style={{ padding: 32 }}>
      <Col lg={8}>
        <YearPicker
          width="275px"
          label="Empty"
          inputProps={{
            validateStatus: 'error',
            help: 'Invalid Year',
          }}
        />
      </Col>
      <Col lg={8}>
        <YearPicker
          width="275px"
          label="Success"
          value="2024"
          minYear={1900}
          maxYear={2100}
          inputProps={{
            validateStatus: 'success',
            help: 'Hint',
          }}
        />
      </Col>
      <Col lg={8}>
        <YearPicker
          width="275px"
          label="Error"
          value="1898"
          inputProps={{
            validateStatus: 'error',
            help: 'Hint',
          }}
        />
      </Col>
    </Row>
    <Row type="flex" justify="center" gutter={16} align="middle" style={{ padding: 32 }}>
      <Col span={12}>
        <Typography.Title style={{ fontSize: 14 }}>1900 - 2100</Typography.Title>
        <YearDropdown selected="1992" minYear={1900} maxYear={2100} onSelectYear={() => {}} />
      </Col>
      <Col span={12}>
        <Typography.Title style={{ fontSize: 14 }}>With disabled (outside 2012 - 2019)</Typography.Title>
        <YearDropdown selected="" minYear={2012} maxYear={2019} onSelectYear={() => {}} />
      </Col>
    </Row>
  </>
);

const DateStory: React.FC = () => {
  const format = 'DD/MM/YYYY';

  const disabledDate: (date: moment.Moment) => boolean = (date: moment.Moment) =>
    date.isBefore(moment(new Date().getTime() - 60 * 60 * 73 * 1000));

  return (
    <>
      <Row type="flex" justify="center" align="middle" gutter={16} style={{ padding: 32 }}>
        <Col span={8}>
          <DatePicker label="Empty" format={format} />
        </Col>
        <Col span={8}>
          <DatePicker value="12/01/2020" label="With Value" format={format} />
        </Col>
        <Col span={8}>
          <DatePicker disabled label="Disabled" format={format} disabledDate={disabledDate} value="12/01/2020" />
        </Col>
      </Row>
      <Row type="flex" justify="center" style={{ padding: 32 }}>
        <Col md={24} lg={12}>
          <Typography.Title style={{ fontSize: 14 }}>
            Sample dropdown with dates disabled 3 days before today
          </Typography.Title>
          <DateDropdown
            format={format}
            disabledDate={disabledDate}
            selected={moment(new Date().getTime() - 60 * 60 * 48 * 1000)}
          />
        </Col>
        <Col md={24} lg={12}>
          <Typography.Title style={{ fontSize: 14 }}>Sample dropdown</Typography.Title>
          <DateDropdown format={format} selected={moment(new Date().getTime() + 60 * 60 * 24 * 1000)} />
        </Col>
      </Row>
    </>
  );
};

storiesOf('DatePicker', module)
  .addDecorator((story) => <Row style={{ height: '100vh' }}>{story()}</Row>)
  .add('default', () => <DateStory />)
  .add('Month Pickers', () => <Month />)
  .add('Year Picker', () => <Year />);
