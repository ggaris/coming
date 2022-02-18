// rollup.config.js
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'
import postcss from "rollup-plugin-postcss";

const packageJson = require("./package.json")


export default [
  {
    // 核心选项
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true
      }, {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json', exclude: [".css"] }),
      postcss(
        {
          modules: true
        }
      )
    ],
    external: ["react", "typescript", "@testing-library/react", "jest-junit", "jest"],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
    external: [/\.css$/]
  }
]