import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

import pkg from './package.json';

const input = 'src/index.js';

const external = [
  ...Object.keys(pkg.dependencies || {}),
  ...Object.keys(pkg.peerDependencies || {}),
];

const plugins = [resolve(), commonjs(), terser()];

export default [
  {
    input,
    output: {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
    },
    external,
    plugins,
  },
  {
    input,
    output: {
      file: pkg.module,
      format: 'es',
      exports: 'named',
    },
    external,
    plugins,
  },
];
