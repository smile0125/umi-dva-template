import { defineConfig } from 'umi';
import routers from './routers';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  hash: true,
  antd: {
    // dark: false,
    // compact: false,
  },
  fastRefresh: {},
  routes: routers,
  fastRefresh: {},
  theme: {
    // 参考地址：https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less
    '@font-size-base': '20px',
    '@font-size-sm': '18px',
    '@font-size-xs': '16px',
    '@font-size-lg': '22px',
  },
  layout: {
    // 支持任何不需要 dom 的
    // https://procomponents.ant.design/components/layout#prolayout
    name: 'HONG',
    // locale: true,
    layout: 'side',
    logo: false,
  },
});
