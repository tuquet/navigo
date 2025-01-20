// docs/.vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme';
import { watchThemeChange } from './theme-switcher';

export default {
  ...DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    watchThemeChange();
  },
};