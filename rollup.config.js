// rollup.config.js
import dts from 'rollup-plugin-dts'
import DevConfig from './config/rollup.config.dev'
import ProdConfig from './config/rollup.config.prod'

const isDev = process.env.NODE_ENV === 'dev' // 是否为开发环境


export default [
  isDev ? DevConfig : ProdConfig,
  {
    input: "dist/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
    external: [/\.css$/]
  }
]