import DefaultTheme from 'vitepress/theme';
import CustomLayout from './CustomLayout.vue';
import CustomNotFound from './CustomNotFound.vue';
import vRemixicon, { icons } from '../lib/vRemixicon';
import './custom.css';
import { watchThemeChange } from './theme-switcher.ts';

export default {
  ...DefaultTheme,
  Layout: CustomLayout,
  NotFound: CustomNotFound,
  enhanceApp({ app }) {
    app.use(vRemixicon, icons);
    watchThemeChange();
  }
}
