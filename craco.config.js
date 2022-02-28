/**
 * 配置别名操作
 *  1. yarn add @craco/craco
 *  2. 将package.json里react-scripts改成craco
 *  3. 创建craco.config.js文件
 *  4. 配置如下
 */
const path = require('path')

const resolve = dir => path.resolve(__dirname, dir)

module.exports = {
  webpack: {
    alias: {
      "@": resolve("src"),
      "assets": resolve("src/assets"),
      "common": resolve("src/common"),
      "components": resolve("src/components"),
      "pages": resolve("src/pages"),
      "router": resolve("src/router"),
      "services": resolve("src/services"),
      "store": resolve("src/store"),
      "utils": resolve("src/utils")
    }
  }
}