import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import postcss from "rollup-plugin-postcss";
import svgr from '@svgr/rollup' // svg 支持 // 打包分析 
import packageJson from '../package.json'

const ProdPlugins = [
  resolve(),
  commonjs(),
  typescript({ tsconfig: './tsconfig.json', exclude: [".css"] }),
  postcss(
    {
      modules: true
    }
  ),
  svgr({ icon: true }),
]

export default {
  // 核心选项
  input: "src/index.ts",
  output: [{
    file: packageJson.main,
    format: 'esm',
  },],
  plugins: ProdPlugins,
  external: ["react", "typescript", "@testing-library/react", "jest-junit", "jest", "@svgr/rollup", "rollup-plugin-visualizer"],
}