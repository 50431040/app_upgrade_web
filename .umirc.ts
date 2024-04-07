import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: 'App Upgrade',
  },
  routes: [
    {
      name: 'home',
      path: '/',
      component: '@/pages/Home',
    },
    {
      name: 'appManagement',
      path: '/table',
      component: '@/pages/Table',
    },
  ],
  npmClient: 'yarn',
  sassLoader: {},
  locale: {
    default: 'zh-CN',
    baseSeparator: '-',
    title: true,
  },
});
