import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Town Of Us: Mira Docs',
  tagline: 'A comprehensive guide to Town Of Us: Mira',
  favicon: 'img/logo.ico',
  url: 'https://au-avengers.github.io',
  baseUrl: '/docs.toum.gg/',
  // url: 'https://docstoum.com',
  // baseUrl: 'docstoum.com',
  organizationName: 'AU-Avengers',
  projectName: 'docs.toum.gg',
  //deploymentBranch: 'gh-pages',
  deploymentBranch: 'gh-pages',
  onBrokenLinks: 'warn',
  staticDirectories: ['static'],
  onBrokenMarkdownLinks: 'warn',
  trailingSlash: false,
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/AU-Avengers/docs.toum.gg/blob/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl:
            'https://github.com/AU-Avengers/docs.toum.gg/blob/main/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/Embed.png',
    navbar: {
      title: 'Town Of Us: Mira',
      logo: {
        alt: 'Town Of Us: Mira Logo',
        src: '/img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'rolesSidebar',
          position: 'left',
          label: 'Roles',
        },
        {
          type: 'docSidebar',
          sidebarId: 'modifiersSidebar',
          position: 'left',
          label: 'Modifiers',
        },
        {
          to: '/blog',
          label: 'Changelog',
          position: 'left',
        },
        {
          href: 'https://discord.gg/ugyc4EVUYZ',
          label: 'Discord',
          position: 'right',
        },
        {
          href: 'https://github.com/AU-Avengers/TOU-Mira',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Roles',
              to: '/docs/category/crewmates',
            },
             {
               label: 'Modifiers',
               to: '/docs/modifiers',
             },
            {
              label: 'Changelog',
              to: '/blog',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/ugyc4EVUYZ',
            },
            {
              label: 'GitHub Organization',
              href: 'https://github.com/AU-Avengers',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} AU Avengers. All rights reserved.`,
    },
    colorMode: {
      defaultMode: 'dark'
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['csharp', 'ini']
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
