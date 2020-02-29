import {
  globals,
  external,
  utilsPlugins,
} from './base.config';

const createUtilsConfig = () => ({
  input: 'src/utils/index.ts',
  output: {
    file: 'lib/utils.js',
    format: 'cjs',
    globals,
  },
  external,
  plugins: utilsPlugins,
});

export default createUtilsConfig;