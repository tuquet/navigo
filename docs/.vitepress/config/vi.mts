import type { DefaultTheme } from 'vitepress';

import { defineConfig } from 'vitepress';

import { version } from '../../../package.json';

export const vi = defineConfig({
  description:
    'Phần mềm Marketing của TFSoftware, giúp bạn quản lý và lập kế hoạch dự án một cách hiệu quả.',
  lang: 'vi-VN',
  themeConfig: {
    darkModeSwitchLabel: 'Chủ đề',
    darkModeSwitchTitle: 'Chế độ tối',
    docFooter: {
      next: 'Trang tiếp theo',
      prev: 'Trang trước',
    },
    editLink: {
      pattern: 'https://github.com/tuquet/navigo/edit/main/docs/src/:path',
      text: 'Chỉnh sửa trang này',
    },
    footer: {
      copyright: `Copyright © 2020-${new Date().getFullYear()} TF Software.`,
      message: `<a href="https://www.tfsoftware.vn/privacy-policy.html">Chính Sách Và Điều Khoản Bảo Mật</a>`,
    },
    langMenuLabel: 'Đa ngôn ngữ',
    lastUpdated: {
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium',
      },
      text: 'Cập nhật lần cuối',
    },
    lightModeSwitchTitle: 'Chế  độ sáng',
    nav: nav(),

    outline: {
      label: 'Trang điều hướng',
    },
    returnToTopLabel: 'Quay lại đầu',

    sidebar: {
      '/browser-automation/': {
        base: '/browser-automation/',
        items: sidebarWorkflow(),
      },
      '/commercial/': {
        base: '/commercial/',
        items: sidebarCommercial(),
      },
      '/guide/': { base: '/guide/', items: sidebarGuide() },
    },
    sidebarMenuLabel: 'Menu',
  },
});

function sidebarGuide(): DefaultTheme.SidebarItem[] {
  return [
    {
      collapsed: false,
      text: 'Bắt đầu',
      items: [
        {
          link: 'introduction/about-us',
          text: 'Về TF Software',
        },
        {
          link: 'introduction/why',
          text: 'Tại sao chọn chúng tôi?',
        },
        { link: 'introduction/setup', text: 'Hướng dẫn cơ bản' },
        { link: 'introduction/quick-start', text: 'Bắt đầu nhanh' },
      ],
    },
    {
      collapsed: false,
      text: 'Khái niệm cơ bản',
      items: [
        {
          collapsed: true,
          link: 'device',
          text: 'Thiết bị',
        },
        {
          collapsed: true,
          link: 'credential',
          text: 'Thông tin xác thực',
        },
        {
          collapsed: true,
          link: 'fingerprint/ip',
          text: 'Vân tay thiết bị',
          items: [
            { link: 'fingerprint/ip', text: 'Địa chỉ IP' },
            { link: 'fingerprint/timezone', text: 'Timezone' },
            { link: 'fingerprint/geolocation', text: 'Geo location' },
            { link: 'fingerprint/webrtc-ip', text: 'WebRTC IP' },
            { link: 'fingerprint/hardware-canvas', text: 'Hardware: Canvas' },
            { link: 'fingerprint/hardware-webgl', text: 'Hardware: WebGL' },
            { link: 'fingerprint/audio', text: 'Hardware: Audio' },
            { link: 'fingerprint/hardware-cpu-ram', text: 'Hardware: CPU,RAM' },
            {
              link: 'fingerprint/software-user-agent',
              text: 'Software: User agent',
            },
            { link: 'fingerprint/software-screen', text: 'Software: Screen' },
            { link: 'fingerprint/software-font', text: 'Software: Font' },
            { link: 'fingerprint/software-os', text: 'Software: Hệ điều hành' },
            {
              link: 'fingerprint/tcp-ip-fingerprint',
              text: 'TCP/IP Fingerprint',
            },
          ],
        },
      ],
    },
    {
      collapsed: false,
      text: 'Tài liệu khác',
      items: [
        {
          base: '/',
          link: 'browser-automation/introduction',
          text: 'Tự động hóa trình duyệt',
        },
      ],
    },
  ];
}

function sidebarCommercial(): DefaultTheme.SidebarItem[] {
  return [
    {
      link: 'community',
      text: 'Cộng đồng',
    },
    {
      link: 'technical-support',
      text: 'Hỗ trợ kỹ thuật',
    },
    {
      link: 'customized',
      text: 'Phát triển theo yêu cầu',
    },
  ];
}

function sidebarWorkflow(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Tự động hóa trình duyệt',
      items: [
        {
          link: 'introduction',
          text: 'Giới thiệu',
        },
      ],
    },
    {
      collapsed: true,
      text: 'Quy trình',
      items: sidebarBrowserAutomationWorkflows(),
    },
    {
      collapsed: false,
      text: 'Khối',
      items: sidebarBrowserAutomationBlock(),
    },
    {
      collapsed: true,
      text: 'Nâng cao',
      items: sidebarBrowserAutomationReference(),
    },
    {
      collapsed: false,
      text: 'Tài liệu khác',
      items: [
        {
          base: '/',
          link: '../guide/introduction/setup',
          text: 'Hướng dẫn cơ bản',
        },
      ],
    },
  ];
}

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: version,
      items: [
        {
          link: 'https://github.com/tuquet/navigo/releases',
          text: 'Nhật ký phát hành',
        },
        {
          link: 'https://github.com/users/tuquet/projects/2',
          text: 'Lộ trình phát triển',
        },
      ],
    },
    {
      activeMatch: '^/(guide|components)/',
      text: 'Tài liệu',
      items: [
        {
          activeMatch: '^/guide/',
          link: '/guide/introduction/setup',
          text: 'Hướng dẫn cơ bản',
        },
        {
          activeMatch: '^/browser-automation/',
          link: '/browser-automation/introduction',
          text: 'Tự động hóa trình duyệt',
        },
      ],
    },
    {
      activeMatch: '^/commercial/',
      link: '/commercial/community',
      text: 'Cộng đồng',
    },
    {
      link: '/sponsor/personal',
      text: 'Tài trợ',
    },
    {
      link: 'https://id.tfsoftware.vn',
      text: 'Đăng nhập',
    },
  ];
}

function sidebarBrowserAutomationWorkflows(): DefaultTheme.SidebarItem[] {
  return [
    { link: '/workflow/overview', text: 'Overview' },
    {
      link: '/workflow/running-a-workflow',
      text: 'Running a Workflow',
    },
    { link: '/workflow/blocks', text: 'Blocks' },
    { link: '/workflow/sharing-workflow', text: 'Sharing a Workflow' },
    { link: '/workflow/global-data', text: 'Global Data' },
    { link: '/workflow/table', text: 'Table' },
    { link: '/workflow/variables', text: 'Variables' },
    { link: '/workflow/table-or-variable', text: 'Table or Variable' },
    { link: '/workflow/parameters', text: 'Parameters' },
    { link: '/workflow/settings', text: 'Settings' },
    { link: '/workflow/debug-mode', text: 'Debug Mode' },
    { link: '/workflow/element-selector', text: 'Element Selector' },
    { link: '/workflow/expressions', text: 'Expressions' },
    { link: '/workflow/looping', text: 'Looping' },
    { link: '/workflow/testing-mode', text: 'Testing mode' },
  ];
}

function sidebarBrowserAutomationBlock(): DefaultTheme.SidebarItem[] {
  return [
    {
      collapsed: true,
      text: 'General',
      items: [
        {
          link: '/blocks/trigger.md',
          text: 'Trigger Block',
        },
        {
          link: '/blocks/execute-workflow.md',
          text: 'Execute Workflow Block',
        },
        {
          link: '/blocks/delay.md',
          text: 'Delay Block',
        },
        {
          link: '/blocks/export-data.md',
          text: 'Export Data Block',
        },
        {
          link: '/blocks/webhook.md',
          text: 'HTTP Request Block',
        },
        {
          link: '/blocks/blocks-group.md',
          text: 'Blocks Group Block',
        },
        {
          link: '/blocks/clipboard.md',
          text: 'Clipboard Block',
        },
        {
          link: '/blocks/wait-connections.md',
          text: 'Wait Connections Block',
        },
        {
          link: '/blocks/notification.md',
          text: 'Notification Block',
        },
        {
          link: '/blocks/workflow-state.md',
          text: 'Workflow State Block',
        },
        {
          link: '/blocks/parameter-prompt.md',
          text: 'Parameter Prompt Block',
        },
      ],
    },
    {
      collapsed: true,
      text: 'Browser',
      items: [
        {
          link: '/blocks/active-tab.md',
          text: 'Active Tab Block',
        },
        {
          link: '/blocks/new-tab.md',
          text: 'New Tab Block',
        },
        {
          link: '/blocks/switch-tab.md',
          text: 'Switch Tab Block',
        },
        {
          link: '/blocks/new-window.md',
          text: 'New Window Block',
        },
        {
          link: '/blocks/proxy.md',
          text: 'Proxy Block',
        },
        {
          link: '/blocks/go-back.md',
          text: 'Go Back Block',
        },
        {
          link: '/blocks/go-forward.md',
          text: 'Go Forward Block',
        },
        {
          link: '/blocks/close-tab.md',
          text: 'Close Tab/window Block',
        },
        {
          link: '/blocks/take-screenshot.md',
          text: 'Take Screenshot Block',
        },
        {
          link: '/blocks/browser-event.md',
          text: 'Browser Event Block',
        },
        {
          link: '/blocks/handle-dialog.md',
          text: 'Handle Dialog Block',
        },
        {
          link: '/blocks/handle-download.md',
          text: 'Handle Download Block',
        },
        {
          link: '/blocks/reload-tab.md',
          text: 'Reload Tab Block',
        },
        {
          link: '/blocks/tab-url.md',
          text: 'Get Tab Url Block',
        },
        {
          link: '/blocks/cookie.md',
          text: 'Cookie Block',
        },
      ],
    },
    {
      collapsed: true,
      text: 'Web Interaction',
      items: [
        {
          link: '/blocks/event-click.md',
          text: 'Click Element Block',
        },
        {
          link: '/blocks/get-text.md',
          text: 'Get Text Block',
        },
        {
          link: '/blocks/element-scroll.md',
          text: 'Scroll Element Block',
        },
        {
          link: '/blocks/link.md',
          text: 'Link Block',
        },
        {
          link: '/blocks/attribute-value.md',
          text: 'Attribute Value Block',
        },
        {
          link: '/blocks/forms.md',
          text: 'Forms Block',
        },
        {
          link: '/blocks/javascript-code.md',
          text: 'Javascript Code Block',
        },
        {
          link: '/blocks/trigger-event.md',
          text: 'Trigger Event Block',
        },
        {
          link: '/blocks/switch-to.md',
          text: 'Switch Frame Block',
        },
        {
          link: '/blocks/upload-file.md',
          text: 'Upload File Block',
        },
        {
          link: '/blocks/hover-element.md',
          text: 'Hover Element Block',
        },
        {
          link: '/blocks/save-assets.md',
          text: 'Save Assets Block',
        },
        {
          link: '/blocks/press-key.md',
          text: 'Press Key Block',
        },
        {
          link: '/blocks/create-element.md',
          text: 'Create Element Block',
        },
      ],
    },
    {
      collapsed: true,
      text: 'Control Flow',
      items: [
        {
          link: '/blocks/repeat-task.md',
          text: 'Repeat Task Block',
        },
        {
          link: '/blocks/conditions.md',
          text: 'Conditions Block',
        },
        {
          link: '/blocks/element-exists.md',
          text: 'Element Exists Block',
        },
        {
          link: '/blocks/while-loop.md',
          text: 'While Loop Block',
        },
        {
          link: '/blocks/loop-data.md',
          text: 'Loop Data Block',
        },
        {
          link: '/blocks/loop-elements.md',
          text: 'Loop Elements Block',
        },
        {
          link: '/blocks/loop-breakpoint.md',
          text: 'Loop Breakpoint Block',
        },
      ],
    },
    {
      collapsed: true,
      text: 'Online Services',
      items: [
        {
          link: '/blocks/google-sheets.md',
          text: 'Google Sheets Block',
        },
        {
          link: '/blocks/google-sheets-drive.md',
          text: 'Google Sheets (GDrive) Block',
        },
        {
          link: '/blocks/google-drive.md',
          text: 'Google Drive Block',
        },
      ],
    },
    {
      collapsed: true,
      text: 'Data',
      items: [
        {
          link: '/blocks/insert-data.md',
          text: 'Insert Data Block',
        },
        {
          link: '/blocks/delete-data.md',
          text: 'Delete Data Block',
        },
        {
          link: '/blocks/log-data.md',
          text: 'Get Log Data Block',
        },
        {
          link: '/blocks/slice-variable.md',
          text: 'Slice Variable Block',
        },
        {
          link: '/blocks/increase-variable.md',
          text: 'Increase Variable Block',
        },
        {
          link: '/blocks/regex-variable.md',
          text: 'Regex Variable Block',
        },
        {
          link: '/blocks/data-mapping.md',
          text: 'Data Mapping Block',
        },
        {
          link: '/blocks/sort-data.md',
          text: 'Sort Data Block',
        },
      ],
    },
  ];
}

function sidebarBrowserAutomationReference(): DefaultTheme.SidebarItem[] {
  return [
    { link: '/reference/storage', text: 'Storage' },
    { link: '/reference/packages', text: 'Packages' },
    { link: '/reference/condition-builder', text: 'Condition Builder' },
    {
      link: '/reference/workflow-common-errors',
      text: 'Workflow Common Errors',
    },
    {
      link: '/reference/javascript-execution-context',
      text: 'JavaScript Execution Context',
    },
  ];
}

export const search: DefaultTheme.AlgoliaSearchOptions['locales'] = {
  root: {
    placeholder: 'Tìm kiếm tài liệu',
    translations: {
      button: {
        buttonAriaLabel: 'Tìm kiếm tài liệu',
        buttonText: 'Tìm kiếm tài liệu',
      },
      modal: {
        errorScreen: {
          helpText: 'Bạn có thể cần kiểm tra kết nối mạng của mình',
          titleText: 'Không thể nhận được kết quả',
        },
        footer: {
          closeText: 'Đóng cửa',
          navigateText: 'Công tắc',
          searchByText: 'Nhà cung cấp tìm kiếm',
          selectText: 'chọn',
        },
        noResultsScreen: {
          noResultsText: 'Không thể tìm thấy kết quả liên quan',
          reportMissingResultsLinkText: 'Bấm để phản hồi',
          reportMissingResultsText: 'Bạn có nghĩ rằng truy vấn nên có kết quả?',
          suggestedQueryText: 'Bạn có thể cố gắng truy vấn',
        },
        searchBox: {
          cancelButtonAriaLabel: 'Hủy bỏ',
          cancelButtonText: 'Hủy bỏ',
          resetButtonAriaLabel: 'Điều kiện truy vấn rõ ràng',
          resetButtonTitle: 'Điều kiện truy vấn rõ ràng',
        },
        startScreen: {
          favoriteSearchesTitle: '收藏',
          noRecentSearchesText: 'Không có lịch sử tìm kiếm',
          recentSearchesTitle: 'Lịch sử tìm kiếm',
          removeFavoriteSearchButtonTitle: 'Hủy bỏ khỏi yêu thích',
          removeRecentSearchButtonTitle: 'Xóa khỏi lịch sử tìm kiếm',
          saveRecentSearchButtonTitle: 'Lưu vào lịch sử tìm kiếm',
        },
      },
    },
  },
};
