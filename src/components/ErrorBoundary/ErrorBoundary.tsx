import { Col, Icon, Row } from 'antd';
import React, { Component, ReactNode } from 'react';

import { Title } from '../Typography';

const initialState = {
  hasError: false,
  error: null,
  info: null,
};

interface InternalProps {
  children: ReactNode;
  initialState?: InternalState;
}

interface InternalState {
  hasError: boolean;
  error: Error | null;
  info: any;
}

export default class ErrorBoundary extends Component<InternalProps, InternalState> {
  constructor(props: InternalProps) {
    super(props);
    this.state = {
      ...initialState,
      ...props.initialState,
    };
  }

  public componentDidCatch(error: Error, info: any) {
    this.setState({
      hasError: true,
      error,
      info,
    });
    // TODO: Log the error to an error reporting service
    // ErrorReportService(error, info);
  }

  public render() {
    const { hasError, error, info } = this.state;

    if (hasError) {
      return (
        <Row style={{ padding: 50 }}>
          <Col>
            <Title level={3} mark type="danger">
              <Icon type="warning" />
              Error😭！
            </Title>
          </Col>
          <Col>
            <details style={{ whiteSpace: 'pre-wrap' }}>
              {error && error.toString()}
              <br />
              {info && info.componentStack}
            </details>
          </Col>
        </Row>
      );
    }

    return this.props.children;
  }
}
