import copy from 'rollup-plugin-copy';
import postcss from 'rollup-plugin-postcss';

import {
  globals,
  external,
  basePlugins,
} from './base.config';

const outputOptions = {
  globals,
  dir: 'lib',
  format: 'cjs',
  exports: 'named',
  chunkFileNames: '[name].js',
  // TODO: Need to create entry folder
  // entryFileNames: '[name]/index.js',
};

const createModuleConfig = (moduleMap) => {
  const inputOptions = {
    index: 'src/index.ts',
    ...moduleMap,
  };

  return {
    external,
    input: inputOptions,
    output: outputOptions,
    plugins: [
      postcss({
        extract: false,
        modules: true,
        extensions: ['.css', '.scss', '.less'],
        use: [
          'sass',
          ['less', {
            javascriptEnabled: true
          }],
        ],
      }),
      copy({
        targets: [{
          src: 'src/styles/_global.scss',
          dest: 'lib/styles'
        }, {
          src: 'src/styles/_font.scss',
          dest: 'lib/styles'
        }, ]
      }),
      ...basePlugins,
    ],
  };
};

export default createModuleConfig;