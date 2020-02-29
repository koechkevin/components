import dts from "rollup-plugin-dts";

// TODO: Batch output module
const createTypeConfig = () => ({
  input: 'src/components/Menu/interface.d.ts',
  output: {
    file: 'lib/Menu.d.ts',
    format: 'es',
  },
  plugins: [dts()],
});

export default createTypeConfig;