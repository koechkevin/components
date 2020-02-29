import typescript from 'rollup-plugin-typescript2';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import json from 'rollup-plugin-json';
import url from 'rollup-plugin-url';
import fs from 'fs';
import path from 'path';

import pkg from '../package.json';

const componentDir = 'src/components';
const ignoredModules = ['Colors'];
const moduleNames = fs.readdirSync(path.resolve(componentDir));

export const moduleMap = moduleNames
  .filter(name => !ignoredModules.includes(name))
  .reduce((prev, name) => {
    prev[name] = `${componentDir}/${name}/index.ts`;
    return prev;
  }, {});

export const external = Object.keys(pkg.peerDependencies);

export const babelOptions = {
  exclude: 'node_modules/**',
  extensions: ['.js', '.jsx', '.ts', '.tsx'],
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
    '@babel/typescript',
  ],
};

export const globals = {
  dva: 'dva',
  antd: 'antd',
  react: 'React',
  'react-dom': 'ReactDOM',
  'date-fns': 'dateFns',
};

const commonJs = {
  include: /node_modules/,
  namedExports: {
    // node_modules/prop-types/factoryWithTypeCheckers.js#L115
    'prop-types': [
      'array',
      'bool',
      'func',
      'number',
      'object',
      'string',
      'symbol',
      'any',
      'arrayOf',
      'element',
      'elementType',
      'instanceOf',
      'node',
      'objectOf',
      'oneOf',
      'oneOfType',
      'shape',
      'exact',
    ],
  },
};

export const utilsPlugins = [
  typescript(),
  resolve(),
  commonjs(),
  babel(babelOptions)
];

export const basePlugins = [
  typescript({
    clean: true,
    tsconfig: 'tsconfig.json',
    typescript: require('typescript'),
  }),
  url(),
  json({
    include: 'src/**'
  }),
  resolve(),
  commonjs(commonJs),
  babel(babelOptions),
];

export const antdVarsConfig = {
  '@primary-color': '#0171D3',
  '@success-color': '#388E3C',
  '@warning-color': '#F5A622',
  '@error-color': '#C81400',
  '@text-color': '#1D1D1D',
  '@tooltip-bg': '#545454',
  '@heading-1-size': '48px',
  '@heading-2-size': '32px',
  '@heading-3-size': '24px',
  '@heading-4-size': '16px',
  '@font-family': 'OpenSans, sans-serif',
};