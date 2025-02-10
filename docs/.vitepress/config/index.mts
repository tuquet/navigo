import { withPwa } from '@vite-pwa/vitepress';
import { defineConfigWithTheme } from 'vitepress';

import { en } from './en.mts';
import { shared } from './shared.mts';
import { vi } from './vi.mts';

export default withPwa(
  defineConfigWithTheme({
    ...shared,
    locales: {
      en: {
        label: 'English',
        lang: 'en',
        link: '/en/',
        ...en,
      },
      root: {
        label: 'Tiếng Việt',
        lang: 'vi',
        ...vi,
      },
    },
  }),
);
