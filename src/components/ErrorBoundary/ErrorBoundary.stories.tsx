import React from 'react';

import { object } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import ErrorBoundary from './ErrorBoundary';

const initialState = {
  hasError: false,
  error: null,
  info: null,
};

const withErrors = {
  hasError: true,
  error: new Error('This is a test error'),
  info: null,
};

storiesOf('ErrorBoundary', module)
  .add('default', () => (
    <ErrorBoundary initialState={object('initialState', initialState)}>
      <div style={{ padding: 50 }}>
        Error Boundary Component without errors
      </div>
    </ErrorBoundary>
  ))
  .add('withErrors', () => (
    <ErrorBoundary initialState={object('with errors', withErrors)}>
      Error Boundary Component with errors
    </ErrorBoundary>
  ));
