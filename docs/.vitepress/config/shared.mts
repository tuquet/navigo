import type { PwaOptions } from '@vite-pwa/vitepress';
import type { HeadConfig } from 'vitepress';

import { resolve } from 'node:path';

import {
  viteArchiverPlugin,
  viteVxeTableImportsPlugin,
} from '@vben/vite-config';

import {
  GitChangelog,
  GitChangelogMarkdownSection,
} from '@nolebase/vitepress-plugin-git-changelog/vite';
import tailwind from 'tailwindcss';
import { defineConfig, postcssIsolateStyles } from 'vitepress';
import {
  groupIconMdPlugin,
  groupIconVitePlugin,
} from 'vitepress-plugin-group-icons';

import { demoPreviewPlugin } from './plugins/demo-preview';
// import { search as zhSearch } from './zh.mts';
import { search as viSearch } from './vi.mts';

export const shared = defineConfig({
  appearance: 'dark',
  head: head(),
  markdown: {
    preConfig(md) {
      md.use(demoPreviewPlugin);
      md.use(groupIconMdPlugin);
    },
  },
  pwa: pwa(),
  srcDir: 'src',
  themeConfig: {
    i18nRouting: true,
    logo: 'https://unpkg.com/@tfsoft/static-source@1.0.1/static/logo-white.png',
    search: {
      options: {
        locales: {
          // ...zhSearch,
          ...viSearch,
        },
      },
      provider: 'local',
    },
    siteTitle: 'TF Software',
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/tuquet/navigo/releases',
      },
      {
        icon: 'facebook',
        link: 'https://www.facebook.com/groups/1736733590245766',
      },
      {
        icon: 'telegram',
        link: 'https://t.me/tfsoftware',
      },
      {
        icon: 'youtube',
        link: 'https://www.youtube.com/channel/UC76eew60GIR1taDB0RzS3Rg',
      },
    ],
  },
  title: 'TF Software',
  vite: {
    build: {
      chunkSizeWarningLimit: Infinity,
      minify: 'terser',
    },
    css: {
      postcss: {
        plugins: [
          tailwind(),
          postcssIsolateStyles({ includeFiles: [/vp-doc\.css/] }),
        ],
      },
      preprocessorOptions: {
        scss: {
          api: 'modern',
        },
      },
    },
    json: {
      stringify: true,
    },
    plugins: [
      // @ts-ignore - vitepress-plugin-git-changelog
      GitChangelog({
        mapAuthors: [
          {
            mapByNameAliases: ['Vben'],
            name: 'vben',
            username: 'anncwb',
          },
          {
            name: 'vince',
            username: 'vince292007',
          },
          {
            name: 'Li Kui',
            username: 'likui628',
          },
        ],
        repoURL: () => 'https://github.com/tuquet/navigo',
      }),
      // @ts-ignore - vitepress-plugin-git-changelog
      GitChangelogMarkdownSection(),
      // @ts-ignore - vitepress-plugin-git-changelog
      viteArchiverPlugin({ outputDir: '.vitepress' }),
      // @ts-ignore - vitepress-plugin-group-icons
      groupIconVitePlugin(),
      // @ts-ignore - @vben/vite-config
      await viteVxeTableImportsPlugin(),
    ],
    server: {
      fs: {
        allow: ['../..'],
      },
      host: true,
      port: 6173,
    },

    ssr: {
      external: ['@vue/repl'],
    },
  },
});

function head(): HeadConfig[] {
  return [
    ['meta', { content: 'Vbenjs Team', name: 'author' }],
    [
      'meta',
      {
        content: 'vben, vitejs, vite, shacdn-ui, vue',
        name: 'keywords',
      },
    ],
    ['link', { href: '/favicon.ico', rel: 'icon', type: 'image/svg+xml' }],
    [
      'meta',
      {
        content:
          'width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no',
        name: 'viewport',
      },
    ],
    ['meta', { content: 'navigo docs', name: 'keywords' }],
    ['link', { href: '/favicon.ico', rel: 'icon' }],
    [
      'script',
      {
        'data-website-id': 'd8fbe70c-3cc0-4f6c-a0a4-2ffcab1ca500',
        defer: 'true',
        src: 'https://cloud.umami.is/script.js',
      },
    ],
  ];
}

function pwa(): PwaOptions {
  return {
    includeManifestIcons: false,
    manifest: {
      description: 'TFSoftware',
      icons: [
        {
          sizes: '192x192',
          src: 'https://unpkg.com/@tfsoft/static-source@1.0.1/static/256w/logo-square.png',
          type: 'image/png',
        },
        {
          sizes: '512x512',
          src: 'https://unpkg.com/@tfsoft/static-source@1.0.1/static/512w/logo-square.png',
          type: 'image/png',
        },
      ],
      id: '/',
      name: 'TFSoftware',
      short_name: 'tfsoftware',
      theme_color: '#ffffff',
    },
    outDir: resolve(process.cwd(), '.vitepress/dist'),
    registerType: 'autoUpdate',
    workbox: {
      globPatterns: ['**/*.{css,js,html,svg,png,ico,txt,woff2}'],
      maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
    },
  };
}
