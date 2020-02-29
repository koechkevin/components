import * as RegularIcons from '@fortawesome/pro-regular-svg-icons';
import * as SolidIcons from '@fortawesome/pro-solid-svg-icons';
import { storiesOf } from '@storybook/react';
import { Card, Col, Row, Typography } from 'antd';
import React, { CSSProperties } from 'react';

import Icon from './Icon';

const stories = storiesOf('Icons', module);
const { Title, Text } = Typography;
const gridStyle: CSSProperties = {
  width: '25%',
};
const { Grid } = Card;

stories.addDecorator((story) => <div style={{ padding: 24 }}>{story()}</div>);

stories
  .add('Library Icons', () => (
    <React.Fragment>
      <Title level={2}>Icons</Title>
      <Row gutter={24}>
        <Card title="Menu Icons">
          <Grid style={gridStyle}>
            <Icon icon={RegularIcons.faCalendarAlt} />
            <span style={{ marginLeft: 8 }}>
              <Text
                copyable={{
                  text: `<Icon icon={RegularIcons.faCalendarAlt} />`,
                }}
              >
                CalendarAlt
              </Text>
            </span>
          </Grid>
          <Grid style={gridStyle}>
            <Icon icon={RegularIcons.faUsers} />
            <span style={{ marginLeft: 8 }}>
              <Text
                copyable={{
                  text: `<Icon icon={RegularIcons.faUsers} />`,
                }}
              >
                Users
              </Text>
            </span>
          </Grid>
          <Grid style={gridStyle}>
            <Icon icon={RegularIcons.faHome} />
            <span style={{ marginLeft: 8 }}>
              <Text
                copyable={{
                  text: `<Icon icon={RegularIcons.faHome} />`,
                }}
              >
                Home
              </Text>
            </span>
          </Grid>
          <Grid style={gridStyle}>
            <Icon icon={RegularIcons.faSuitcase} />
            <span style={{ marginLeft: 8 }}>
              <Text
                copyable={{
                  text: `<Icon icon={RegularIcons.faSuitcase} />`,
                }}
              >
                Suitcase
              </Text>
            </span>
          </Grid>
          <Grid style={gridStyle}>
            <Icon icon={RegularIcons.faStream} />
            <span style={{ marginLeft: 8 }}>
              <Text
                copyable={{
                  text: `<Icon icon={RegularIcons.faStream} />`,
                }}
              >
                Stream
              </Text>
            </span>
          </Grid>
          <Grid style={gridStyle}>
            <Icon icon={RegularIcons.faArrowLeft} />
            <span style={{ marginLeft: 8 }}>
              <Text
                copyable={{
                  text: `<Icon icon={RegularIcons.faArrowLeft} />`,
                }}
              >
                ArrowLeft
              </Text>
            </span>
          </Grid>
          <Grid style={gridStyle}>
            <Icon icon={RegularIcons.faArrowRight} />
            <span style={{ marginLeft: 8 }}>
              <Text
                copyable={{
                  text: `<Icon icon={RegularIcons.faArrowRight} />`,
                }}
              >
                ArrowRight
              </Text>
            </span>
          </Grid>
          <Grid style={gridStyle}>
            <Icon icon={RegularIcons.faPlus} />
            <span style={{ marginLeft: 8 }}>
              <Text
                copyable={{
                  text: `<Icon icon={RegularIcons.faPlus} />`,
                }}
              >
                Plus
              </Text>
            </span>
          </Grid>
          <Grid style={gridStyle}>
            <Icon icon={RegularIcons.faTimes} />
            <span style={{ marginLeft: 8 }}>
              <Text
                copyable={{
                  text: `<Icon icon={RegularIcons.faTimes} />`,
                }}
              >
                Times
              </Text>
            </span>
          </Grid>
          <Grid style={gridStyle}>
            <Icon icon={RegularIcons.faLifeRing} />
            <span style={{ marginLeft: 8 }}>
              <Text
                copyable={{
                  text: `<Icon icon={RegularIcons.faLifeRing} />`,
                }}
              >
                LifeRing
              </Text>
            </span>
          </Grid>
          <Grid style={gridStyle}>
            <Icon icon={RegularIcons.faSearch} />
            <span style={{ marginLeft: 8 }}>
              <Text
                copyable={{
                  text: `<Icon icon={RegularIcons.faSearch} />`,
                }}
              >
                Search
              </Text>
            </span>
          </Grid>
        </Card>
      </Row>
      <Row gutter={24}>
        <Card title="Trays">
          <Grid>
            <Icon icon={RegularIcons.faInfoCircle} />
            <span style={{ marginLeft: 8 }}>
              <Text
                copyable={{
                  text: `<Icon icon={RegularIcons.faInfoCircle} />`,
                }}
              >
                InfoCircle
              </Text>
            </span>
          </Grid>
          <Grid>
            <Icon icon={SolidIcons.faInfoCircle} />
            <span style={{ marginLeft: 8 }}>
              <Text
                copyable={{
                  text: `<Icon icon={SolidIcons.faInfoCircle} />`,
                }}
              >
                SolidInfoCircle
              </Text>
            </span>
          </Grid>
          <Grid>
            <Icon icon={RegularIcons.faBell} />
            <span style={{ marginLeft: 8 }}>
              <Text
                copyable={{
                  text: `<Icon icon={RegularIcons.faBell} />`,
                }}
              >
                Bell
              </Text>
            </span>
          </Grid>
          <Grid>
            <Icon icon={RegularIcons.faFileAlt} />
            <span style={{ marginLeft: 8 }}>
              <Text
                copyable={{
                  text: `<Icon icon={RegularIcons.faFileAlt} />`,
                }}
              >
                FileAlt
              </Text>
            </span>
          </Grid>
          <Grid>
            <Icon icon={RegularIcons.faCopy} />
            <span style={{ marginLeft: 8 }}>
              <Text
                copyable={{
                  text: `<Icon icon={RegularIcons.faCopy} />`,
                }}
              >
                FilesIcon
              </Text>
            </span>
          </Grid>
          <Grid style={gridStyle}>
            <Icon icon={SolidIcons.faSearch} />
            <span style={{ marginLeft: 8 }}>
              <Text
                copyable={{
                  text: `<Icon icon={SolidIcons.faSearch} />`,
                }}
              >
                SolidSearch
              </Text>
            </span>
          </Grid>
        </Card>
      </Row>
      <Row gutter={24}>
        <Card title="Communication icons">
          <Grid style={gridStyle}>
            <Icon icon={RegularIcons.faAt} />
            <span style={{ marginLeft: 8 }}>
              <Text
                copyable={{
                  text: `<Icon icon={RegularIcons.faAt} />`,
                }}
              >
                At
              </Text>
            </span>
          </Grid>
        </Card>
      </Row>
      <Row gutter={24}>
        <Card title="Channels">
          <Grid style={gridStyle}>
            <Icon icon={RegularIcons.faStar} />
            <span style={{ marginLeft: 8 }}>
              <Text
                copyable={{
                  text: `<Icon icon={RegularIcons.faStar} />`,
                }}
              >
                Star
              </Text>
            </span>
          </Grid>
          <Grid style={gridStyle}>
            <Icon icon={SolidIcons.faStar} />
            <span style={{ marginLeft: 8 }}>
              <Text
                copyable={{
                  text: `<Icon icon={SolidIcons.faStar} />`,
                }}
              >
                SolidStar
              </Text>
            </span>
          </Grid>
          <Grid style={gridStyle}>
            <Icon icon={RegularIcons.faHashtag} />
            <span style={{ marginLeft: 8 }}>
              <Text
                copyable={{
                  text: `<Icon icon={RegularIcons.faHashtag} />`,
                }}
              />
              Hashtag
            </span>
          </Grid>
          <Grid style={gridStyle}>
            <Icon icon={SolidIcons.faLock} />
            <span style={{ marginLeft: 8 }}>
              <Text
                copyable={{
                  text: `<Icon icon={SolidIcons.faLock} />`,
                }}
              >
                Lock
              </Text>
            </span>
          </Grid>
          <Grid style={gridStyle}>
            <Icon icon={SolidIcons.faCircle} color="#39c049" />
            <span style={{ marginLeft: 8 }}>
              <Text
                copyable={{
                  text: `<Icon icon={SolidIcons.faCircle} color="#39c049" />`,
                }}
              >
                GreenCircle
              </Text>
            </span>
          </Grid>
          <Grid style={gridStyle}>
            <Icon icon={SolidIcons.faHeart} color="#c81400" />
            <span style={{ marginLeft: 8 }}>
              <Text
                copyable={{
                  text: `<Icon icon={SolidIcons.faHeart} color="#c81400" />`,
                }}
              >
                Heart
              </Text>
            </span>
          </Grid>
          <Grid style={gridStyle}>
            <Icon icon={RegularIcons.faPencil} />
            <span style={{ marginLeft: 8 }}>
              <Text
                copyable={{
                  text: `<Icon icon={RegularIcons.faPencil} />`,
                }}
              >
                Pencil
              </Text>
            </span>
          </Grid>
        </Card>
      </Row>
      <Row gutter={24}>
        <Card title="Unorganized Icons">
          <Grid style={gridStyle}>
            <Icon icon={RegularIcons.faThList} />
            <span style={{ marginLeft: 8 }}>
              <Text
                copyable={{
                  text: `<Icon icon={RegularIcons.faThList} />`,
                }}
              >
                ThList
              </Text>
            </span>
          </Grid>
          <Grid style={gridStyle}>
            <Icon icon={SolidIcons.faThList} />
            <span style={{ marginLeft: 8 }}>
              <Text
                copyable={{
                  text: `<Icon icon={SolidIcons.faThList} />`,
                }}
              >
                SolidThList
              </Text>
            </span>
          </Grid>
          <Grid style={gridStyle}>
            <Icon icon={RegularIcons.faThumbsUp} />
            <span style={{ marginLeft: 8 }}>
              <Text
                copyable={{
                  text: `<Icon icon={RegularIcons.faThumbsUp} />`,
                }}
              >
                ThumbsUp
              </Text>
            </span>
          </Grid>
          <Grid style={gridStyle}>
            <Icon icon={RegularIcons.faThumbsDown} />
            <span style={{ marginLeft: 8 }}>
              <Text
                copyable={{
                  text: `<Icon icon={RegularIcons.faThumbsDown} />`,
                }}
              >
                ThumbsDown
              </Text>
            </span>
          </Grid>
          <Grid style={gridStyle}>
            <Icon icon={SolidIcons.faThumbsUp} />
            <span style={{ marginLeft: 8 }}>
              <Text
                copyable={{
                  text: `<Icon icon={SolidIcons.faThumbsUp} />`,
                }}
              >
                SolidThumbsUp
              </Text>
            </span>
          </Grid>
          <Grid style={gridStyle}>
            <Icon icon={SolidIcons.faThumbsDown} />
            <span style={{ marginLeft: 8 }}>
              <Text
                copyable={{
                  text: `<Icon icon={SolidIcons.faThumbsDown} />`,
                }}
              >
                SolidThumbsDown
              </Text>
            </span>
          </Grid>
          <Grid style={gridStyle}>
            <Icon icon={RegularIcons.faLink} />
            <span style={{ marginLeft: 8 }}>
              <Text
                copyable={{
                  text: `<Icon icon={RegularIcons.faLink} />`,
                }}
              >
                Link
              </Text>
            </span>
          </Grid>
          <Grid style={gridStyle}>
            <Icon icon={SolidIcons.faLink} />
            <span style={{ marginLeft: 8 }}>
              <Text
                copyable={{
                  text: `<Icon icon={SolidIcons.faLink} />`,
                }}
              >
                SolidLink
              </Text>
            </span>
          </Grid>
          <Grid style={gridStyle}>
            <Icon icon={RegularIcons.faCheckCircle} />
            <span style={{ marginLeft: 8 }}>
              <Text
                copyable={{
                  text: `<Icon icon={RegularIcons.faCheckCircle} />`,
                }}
              >
                CheckCircle
              </Text>
            </span>
          </Grid>
          <Grid style={gridStyle}>
            <Icon icon={SolidIcons.faCheckCircle} />
            <span style={{ marginLeft: 8 }}>
              <Text
                copyable={{
                  text: `<Icon icon={SolidIcons.faCheckCircle} />`,
                }}
              >
                SolidCheckCircle
              </Text>
            </span>
          </Grid>
          <Grid style={gridStyle}>
            <Icon icon={RegularIcons.faChevronLeft} />
            <span style={{ marginLeft: 8 }}>
              <Text
                copyable={{
                  text: `<Icon icon={RegularIcons.faChevronLeft} />`,
                }}
              >
                ChevronLeft
              </Text>
            </span>
          </Grid>
          <Grid style={gridStyle}>
            <Icon icon={RegularIcons.faChevronRight} />
            <span style={{ marginLeft: 8 }}>
              <Text
                copyable={{
                  text: `<Icon icon={RegularIcons.faChevronRight} />`,
                }}
              >
                ChevronRight
              </Text>
            </span>
          </Grid>
          <Grid style={gridStyle}>
            <Icon icon={RegularIcons.faChevronUp} />
            <span style={{ marginLeft: 8 }}>
              <Text
                copyable={{
                  text: `<Icon icon={RegularIcons.faChevronUp} />`,
                }}
              >
                ChevronUp
              </Text>
            </span>
          </Grid>
          <Grid style={gridStyle}>
            <Icon icon={RegularIcons.faChevronDown} />
            <span style={{ marginLeft: 8 }}>
              <Text
                copyable={{
                  text: `<Icon icon={RegularIcons.faChevronDown} />`,
                }}
              >
                ChevronDown
              </Text>
            </span>
          </Grid>
          <Grid style={gridStyle}>
            <Icon icon={RegularIcons.faAngleDoubleRight} />
            <span style={{ marginLeft: 8 }}>
              <Text
                copyable={{
                  text: `<Icon icon={RegularIcons.faAngleDoubleRight} />`,
                }}
              >
                AngleDoubleRight
              </Text>
            </span>
          </Grid>
          <Grid style={gridStyle}>
            <Icon icon={RegularIcons.faAngleDoubleLeft} />
            <span style={{ marginLeft: 8 }}>
              <Text
                copyable={{
                  text: `<Icon icon={RegularIcons.faAngleDoubleLeft} />`,
                }}
              >
                AngleDoubleLeft
              </Text>
            </span>
          </Grid>
          <Grid style={gridStyle}>
            <Icon icon={RegularIcons.faAngleDoubleUp} />
            <span style={{ marginLeft: 8 }}>
              <Text
                copyable={{
                  text: `<Icon icon={RegularIcons.faAngleDoubleUp} />`,
                }}
              >
                AngleDoubleUp
              </Text>
            </span>
          </Grid>
          <Grid style={gridStyle}>
            <Icon icon={RegularIcons.faAngleDoubleDown} />
            <span style={{ marginLeft: 8 }}>
              <Text
                copyable={{
                  text: `<Icon icon={RegularIcons.faAngleDoubleDown} />`,
                }}
              >
                AngleDoubleDown
              </Text>
            </span>
          </Grid>
          <Grid style={gridStyle}>
            <Icon icon={SolidIcons.faCaretLeft} />
            <span style={{ marginLeft: 8 }}>
              <Text
                copyable={{
                  text: `<Icon icon={SolidIcons.faCaretLeft} />`,
                }}
              >
                CaretLeft
              </Text>
            </span>
          </Grid>
          <Grid style={gridStyle}>
            <Icon icon={SolidIcons.faCaretRight} />
            <span style={{ marginLeft: 8 }}>
              <Text
                copyable={{
                  text: `<Icon icon={SolidIcons.faCaretRight} />`,
                }}
              >
                CaretRight
              </Text>
            </span>
          </Grid>
          <Grid style={gridStyle}>
            <Icon icon={SolidIcons.faCaretDown} />
            <span style={{ marginLeft: 8 }}>
              <Text
                copyable={{
                  text: `<Icon icon={SolidIcons.faCaretDown} />`,
                }}
              >
                CaretDown
              </Text>
            </span>
          </Grid>
          <Grid style={gridStyle}>
            <Icon icon={SolidIcons.faCaretUp} />
            <span style={{ marginLeft: 8 }}>
              <Text
                copyable={{
                  text: `<Icon icon={SolidIcons.faCaretUp} />`,
                }}
              >
                CaretUp
              </Text>
            </span>
          </Grid>
          <Grid style={gridStyle}>
            <Icon icon={RegularIcons.faThLarge} />
            <span style={{ marginLeft: 8 }}>
              <Text
                copyable={{
                  text: `<Icon icon={RegularIcons.faThLarge} />`,
                }}
              >
                ThLarge
              </Text>
            </span>
          </Grid>
          <Grid style={gridStyle}>
            <Icon icon={SolidIcons.faThLarge} />
            <span style={{ marginLeft: 8 }}>
              <Text
                copyable={{
                  text: `<Icon icon={SolidIcons.faThLarge} />`,
                }}
              >
                SolidThLarge
              </Text>
            </span>
          </Grid>
          <Grid style={gridStyle}>
            <Icon icon={RegularIcons.faEllipsisV} />
            <span style={{ marginLeft: 8 }}>
              <Text
                copyable={{
                  text: `<Icon icon={RegularIcons.faEllipsisV} />`,
                }}
              >
                EllipsisV
              </Text>
            </span>
          </Grid>
          <Grid style={gridStyle}>
            <Icon icon={SolidIcons.faEllipsisV} />
            <span style={{ marginLeft: 8 }}>
              <Text
                copyable={{
                  text: `<Icon icon={SolidIcons.faEllipsisV} />`,
                }}
              >
                EllipsisV
              </Text>
            </span>
          </Grid>
          <Grid style={gridStyle}>
            <Icon icon={RegularIcons.faFilter} />
            <span style={{ marginLeft: 8 }}>
              <Text
                copyable={{
                  text: `<Icon icon={RegularIcons.faFilter} />`,
                }}
              >
                Filter
              </Text>
            </span>
          </Grid>
          <Grid style={gridStyle}>
            <Icon icon={SolidIcons.faFilter} />
            <span style={{ marginLeft: 8 }}>
              <Text
                copyable={{
                  text: `<Icon icon={SolidIcons.faFilter} />`,
                }}
              >
                SolidFilter
              </Text>
            </span>
          </Grid>
          <Grid style={gridStyle}>
            <Icon icon={SolidIcons.faEye} />
            <span style={{ marginLeft: 8 }}>
              <Text
                copyable={{
                  text: `<Icon icon={SolidIcons.faEye} />`,
                }}
              >
                Eye
              </Text>
            </span>
          </Grid>
          <Grid style={gridStyle}>
            <Icon icon={SolidIcons.faEyeSlash} />
            <span style={{ marginLeft: 8 }}>
              <Text
                copyable={{
                  text: `<Icon icon={SolidIcons.faEyeSlash} />`,
                }}
              >
                EyeSlash
              </Text>
            </span>
          </Grid>
          <Grid style={gridStyle}>
            <Icon icon={RegularIcons.faFilePdf} />
            <span style={{ marginLeft: 8 }}>
              <Text
                copyable={{
                  text: `<Icon icon={RegularIcons.faFilePdf} />`,
                }}
              >
                FilePdf
              </Text>
            </span>
          </Grid>
          <Grid style={gridStyle}>
            <Icon icon={SolidIcons.faUserCircle} />
            <span style={{ marginLeft: 8 }}>
              <Text
                copyable={{
                  text: `<Icon icon={SolidIcons.faUserCircle} />`,
                }}
              >
                UserCircle
              </Text>
            </span>
          </Grid>
          <Grid style={gridStyle}>
            <Icon icon={RegularIcons.faRedo} />
            <span style={{ marginLeft: 8 }}>
              <Text
                copyable={{
                  text: `<Icon icon={RegularIcons.faRedo} />`,
                }}
              >
                Redo
              </Text>
            </span>
          </Grid>
          <Grid style={gridStyle}>
            <Icon icon={RegularIcons.faUndo} />
            <span style={{ marginLeft: 8 }}>
              <Text
                copyable={{
                  text: `<Icon icon={RegularIcons.faUndo} />`,
                }}
              >
                Undo
              </Text>
            </span>
          </Grid>
          <Grid style={gridStyle}>
            <Icon icon={RegularIcons.faCheck} />
            <span style={{ marginLeft: 8 }}>
              <Text
                copyable={{
                  text: `<Icon icon={RegularIcons.faCheck} />`,
                }}
              >
                Check
              </Text>
            </span>
          </Grid>
          <Grid style={gridStyle}>
            <Icon icon={RegularIcons.faCloudUpload} />
            <span style={{ marginLeft: 8 }}>
              <Text
                copyable={{
                  text: `<Icon icon={RegularIcons.faCloudUpload} />`,
                }}
              >
                CloudUpload
              </Text>
            </span>
          </Grid>
          <Grid style={gridStyle}>
            <Icon icon={RegularIcons.faCloudDownload} />
            <span style={{ marginLeft: 8 }}>
              <Text
                copyable={{
                  text: `<Icon icon={RegularIcons.faCloudDownload} />`,
                }}
              >
                CloudDownload
              </Text>
            </span>
          </Grid>
        </Card>
      </Row>
    </React.Fragment>
  ))
  .add('Icon', () => {
    const style: CSSProperties = { position: 'absolute', top: '40%', left: '38%' };

    return (
      <Row type="flex" style={{ border: '1px solid blue', height: '80vh' }} justify="space-between">
        <Col style={{ border: '1px solid blue', display: 'flex', justifyContent: 'flex-end' }} span={4}>
          <Icon style={style} icon={RegularIcons.faCalendarAlt} />
          <Text
            copyable={{
              text: `<Icon style={style} icon={RegularIcons.faCalendarAlt}  />`,
            }}
            style={{ justifySelf: 'flex-end', alignSelf: 'flex-start' }}
          />
        </Col>
        <Col style={{ border: '1px solid blue', display: 'flex', justifyContent: 'flex-end' }} span={4}>
          <Icon style={style} icon={RegularIcons.faCloudShowers} />
          <Text
            copyable={{
              text: `<Icon style={style} icon={RegularIcons.faCloudShowers}  />`,
            }}
            style={{ justifySelf: 'flex-end', alignSelf: 'flex-start' }}
          />
        </Col>
        <Col style={{ border: '1px solid blue', display: 'flex', justifyContent: 'flex-end' }} span={4}>
          <Icon style={style} icon={RegularIcons.faCoffeePot} />
          <Text
            copyable={{
              text: `<Icon style={style} icon={RegularIcons.faCoffeePot}  />`,
            }}
            style={{ justifySelf: 'flex-end', alignSelf: 'flex-start' }}
          />
        </Col>
        <Col style={{ border: '1px solid blue', display: 'flex', justifyContent: 'flex-end' }} span={4}>
          <Icon style={style} icon={RegularIcons.faCog} />
          <Text
            copyable={{
              text: `<Icon style={style} icon={RegularIcons.faCog}  />`,
            }}
            style={{ justifySelf: 'flex-end', alignSelf: 'flex-start' }}
          />
        </Col>
        <Col style={{ border: '1px solid blue', display: 'flex', justifyContent: 'flex-end' }} span={4}>
          <Icon style={style} icon={RegularIcons.faStream} />
          <Text
            copyable={{
              text: `<Icon style={style} icon={RegularIcons.faStream}  />`,
            }}
            style={{ justifySelf: 'flex-end', alignSelf: 'flex-start' }}
          />
        </Col>
        <Col style={{ border: '1px solid blue', display: 'flex', justifyContent: 'flex-end' }} span={4}>
          <Icon style={style} icon={RegularIcons.faSignalStream} />
          <Text
            copyable={{
              text: `<Icon style={style} icon={RegularIcons.faSignalStream}  />`,
            }}
            style={{ justifySelf: 'flex-end', alignSelf: 'flex-start' }}
          />
        </Col>
        <Col style={{ border: '1px solid blue', display: 'flex', justifyContent: 'flex-end' }} span={4}>
          <Icon style={style} icon={RegularIcons.faRetweet} />
          <Text
            copyable={{
              text: `<Icon style={style} icon={RegularIcons.faRetweet}  />`,
            }}
            style={{ justifySelf: 'flex-end', alignSelf: 'flex-start' }}
          />
        </Col>
        <Col style={{ border: '1px solid blue', display: 'flex', justifyContent: 'flex-end' }} span={4}>
          <Icon style={style} icon={RegularIcons.faChevronDown} />
          <Text
            copyable={{
              text: `<Icon style={style} icon={RegularIcons.faChevronDown}  />`,
            }}
            style={{ justifySelf: 'flex-end', alignSelf: 'flex-start' }}
          />
        </Col>
        <Col style={{ border: '1px solid blue', display: 'flex', justifyContent: 'flex-end' }} span={4}>
          <Icon style={style} icon={RegularIcons.faRecycle} />
          <Text
            copyable={{
              text: `<Icon style={style} icon={RegularIcons.faRecycle}  />`,
            }}
            style={{ justifySelf: 'flex-end', alignSelf: 'flex-start' }}
          />
        </Col>
        <Col style={{ border: '1px solid blue', display: 'flex', justifyContent: 'flex-end' }} span={4}>
          <Icon style={style} icon={RegularIcons.faLongArrowRight} />
          <Text
            copyable={{
              text: `<Icon style={style} icon={RegularIcons.faLongArrowRight}  />`,
            }}
            style={{ justifySelf: 'flex-end', alignSelf: 'flex-start' }}
          />
        </Col>
        <Col style={{ border: '1px solid blue', display: 'flex', justifyContent: 'flex-end' }} span={4}>
          <Icon style={style} icon={RegularIcons.faLongArrowUp} />
          <Text
            copyable={{
              text: `<Icon style={style} icon={RegularIcons.faLongArrowUp}  />`,
            }}
            style={{ justifySelf: 'flex-end', alignSelf: 'flex-start' }}
          />
        </Col>
        <Col style={{ border: '1px solid blue', display: 'flex', justifyContent: 'flex-end' }} span={4}>
          <Icon style={style} icon={RegularIcons.faArrowAltLeft} />
          <Text
            copyable={{
              text: `<Icon style={style} icon={RegularIcons.faArrowAltLeft}  />`,
            }}
            style={{ justifySelf: 'flex-end', alignSelf: 'flex-start' }}
          />
        </Col>
        <Col style={{ border: '1px solid blue', display: 'flex', justifyContent: 'flex-end' }} span={4}>
          <Icon style={style} icon={RegularIcons.faRepeatAlt} />
          <Text
            copyable={{
              text: `<Icon style={style} icon={RegularIcons.faRepeatAlt}  />`,
            }}
            style={{ justifySelf: 'flex-end', alignSelf: 'flex-start' }}
          />
        </Col>
        <Col style={{ border: '1px solid blue', display: 'flex', justifyContent: 'flex-end' }} span={4}>
          <Icon style={style} icon={RegularIcons.faDragon} />
          <Text
            copyable={{
              text: `<Icon style={style} icon={RegularIcons.faDragon}  />`,
            }}
            style={{ justifySelf: 'flex-end', alignSelf: 'flex-start' }}
          />
        </Col>
        <Col style={{ border: '1px solid blue', display: 'flex', justifyContent: 'flex-end' }} span={4}>
          <Icon style={style} icon={RegularIcons.faEnvelopeSquare} />
          <Text
            copyable={{
              text: `<Icon style={style} icon={RegularIcons.faEnvelopeSquare}  />`,
            }}
            style={{ justifySelf: 'flex-end', alignSelf: 'flex-start' }}
          />
        </Col>
        <Col style={{ border: '1px solid blue', display: 'flex', justifyContent: 'flex-end' }} span={4}>
          <Icon style={style} icon={RegularIcons.faUser} />
          <Text
            copyable={{
              text: `<Icon style={style} icon={RegularIcons.faUser}  />`,
            }}
            style={{ justifySelf: 'flex-end', alignSelf: 'flex-start' }}
          />
        </Col>
        <Col style={{ border: '1px solid blue', display: 'flex', justifyContent: 'flex-end' }} span={4}>
          <Icon style={style} icon={RegularIcons.faVideoPlus} />
          <Text
            copyable={{
              text: `<Icon style={style} icon={RegularIcons.faVideoPlus}  />`,
            }}
            style={{ justifySelf: 'flex-end', alignSelf: 'flex-start' }}
          />
        </Col>
        <Col style={{ border: '1px solid blue', display: 'flex', justifyContent: 'flex-end' }} span={4}>
          <Icon style={style} icon={RegularIcons.faVolumeDown} />
          <Text
            copyable={{
              text: `<Icon style={style} icon={RegularIcons.faVolumeDown}  />`,
            }}
            style={{ justifySelf: 'flex-end', alignSelf: 'flex-start' }}
          />
        </Col>
        <Col style={{ border: '1px solid blue', display: 'flex', justifyContent: 'flex-end' }} span={4}>
          <Icon style={style} icon={RegularIcons.faWatchCalculator} />
          <Text
            copyable={{
              text: `<Icon style={style} icon={RegularIcons.faWatchCalculator}  />`,
            }}
            style={{ justifySelf: 'flex-end', alignSelf: 'flex-start' }}
          />
        </Col>
        <Col style={{ border: '1px solid blue', display: 'flex', justifyContent: 'flex-end' }} span={4}>
          <Icon style={style} icon={RegularIcons.faCamera} />
          <Text
            copyable={{
              text: `<Icon style={style} icon={RegularIcons.faCamera}  />`,
            }}
            style={{ justifySelf: 'flex-end', alignSelf: 'flex-start' }}
          />
        </Col>
        <Col style={{ border: '1px solid blue', display: 'flex', justifyContent: 'flex-end' }} span={4}>
          <Icon style={style} icon={RegularIcons.faCheck} />
          <Text
            copyable={{
              text: `<Icon style={style} icon={RegularIcons.faCheck}  />`,
            }}
            style={{ justifySelf: 'flex-end', alignSelf: 'flex-start' }}
          />
        </Col>
        <Col style={{ border: '1px solid blue', display: 'flex', justifyContent: 'flex-end' }} span={4}>
          <Icon style={style} icon={RegularIcons.faCartArrowDown} />
          <Text
            copyable={{
              text: `<Icon style={style} icon={RegularIcons.faCartArrowDown}  />`,
            }}
            style={{ justifySelf: 'flex-end', alignSelf: 'flex-start' }}
          />
        </Col>
        <Col style={{ border: '1px solid blue', display: 'flex', justifyContent: 'flex-end' }} span={4}>
          <Icon style={style} icon={RegularIcons.faCaretSquareRight} />
          <Text
            copyable={{
              text: `<Icon style={style} icon={RegularIcons.faCaretSquareRight}  />`,
            }}
            style={{ justifySelf: 'flex-end', alignSelf: 'flex-start' }}
          />
        </Col>
        <Col style={{ border: '1px solid blue', display: 'flex', justifyContent: 'flex-end' }} span={4}>
          <Icon style={style} icon={RegularIcons.faChevronCircleDown} />
          <Text
            copyable={{
              text: `<Icon style={style} icon={RegularIcons.faChevronCircleDown}  />`,
            }}
            style={{ justifySelf: 'flex-end', alignSelf: 'flex-start' }}
          />
        </Col>
        <Col style={{ border: '1px solid blue', display: 'flex', justifyContent: 'flex-end' }} span={4}>
          <Icon style={style} icon={RegularIcons.faChevronUp} />
          <Text
            copyable={{
              text: `<Icon style={style} icon={RegularIcons.faChevronUp}  />`,
            }}
            style={{ justifySelf: 'flex-end', alignSelf: 'flex-start' }}
          />
        </Col>
        <Col style={{ border: '1px solid blue', display: 'flex', justifyContent: 'flex-end' }} span={4}>
          <Icon style={style} icon={RegularIcons.faChevronDown} />
          <Text
            copyable={{
              text: `<Icon style={style} icon={RegularIcons.faChevronDown}  />`,
            }}
            style={{ justifySelf: 'flex-end', alignSelf: 'flex-start' }}
          />
        </Col>
        <Col style={{ border: '1px solid blue', display: 'flex', justifyContent: 'flex-end' }} span={4}>
          <Icon style={style} icon={RegularIcons.faTimes} />
          <Text
            copyable={{
              text: `<Icon style={style} icon={RegularIcons.faTimes}  />`,
            }}
            style={{ justifySelf: 'flex-end', alignSelf: 'flex-start' }}
          />
        </Col>
        <Col style={{ border: '1px solid blue', display: 'flex', justifyContent: 'flex-end' }} span={4}>
          <Icon style={style} icon={RegularIcons.faHomeLg} />
          <Text
            copyable={{
              text: `<Icon style={style} icon={RegularIcons.faHomeLg}  />`,
            }}
            style={{ justifySelf: 'flex-end', alignSelf: 'flex-start' }}
          />
        </Col>
        <Col style={{ border: '1px solid blue', display: 'flex', justifyContent: 'flex-end' }} span={4}>
          <Icon style={style} icon={RegularIcons.faHospital} />
          <Text
            copyable={{
              text: `<Icon style={style} icon={RegularIcons.faHospital}  />`,
            }}
            style={{ justifySelf: 'flex-end', alignSelf: 'flex-start' }}
          />
        </Col>
        <Col style={{ border: '1px solid blue', display: 'flex', justifyContent: 'flex-end' }} span={4}>
          <Icon style={style} icon={RegularIcons.faHourglass} />
          <Text
            copyable={{
              text: `<Icon style={style} icon={RegularIcons.faHourglass}  />`,
            }}
            style={{ justifySelf: 'flex-end', alignSelf: 'flex-start' }}
          />
        </Col>
      </Row>
    );
    // tslint:disable-next-line: max-file-line-count
  });
