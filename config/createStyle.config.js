import postcss from 'rollup-plugin-postcss';
import clear from 'rollup-plugin-clear';

import {
  external,
  basePlugins,
  antdVarsConfig,
} from './base.config';

const createStyleConfig = (moduleName) => ({
  external,
  input: `src/components/${moduleName}/index.ts`,
  output: {
    file: `garbage/${moduleName}.js`,
    format: 'es',
  },
  plugins: [
    clear({
      targets: ['garbage']
    }),
    postcss({
      modules: false,
      minimize: true,
      extensions: ['.css', '.scss', '.less'],
      use: [
        'sass',
        ['less', {
          javascriptEnabled: true,
          modifyVars: antdVarsConfig,
        }]
      ],
      // Generate styles to moduleName folder
      extract: `lib/${moduleName}/style/index.css`
    }),
    ...basePlugins,
  ],
});

export default createStyleConfig;