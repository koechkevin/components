import createModuleConfig from './config/createModule.config';
import createStyleConfig from './config/createStyle.config';
import createTypeConfig from './config/createType.config';
import createUtilsConfig from './config/createUtils.config';
import {
  moduleMap,
} from './config/base.config';

const rollupConfig = [
  createModuleConfig(moduleMap),
  createTypeConfig(),
  createUtilsConfig(),
]
// TODO: Create extra CSS styles
// .concat(Object.keys(moduleMap).map(moduleName => createStyleConfig(moduleName)));

export default rollupConfig;