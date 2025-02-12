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
      copyright: `Copyright © 2020-${new Date().getFullYear()} Navigo.`,
      message: 'Một sản phẩm của TFSoftware.',
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
      '/commercial/': {
        base: '/commercial/',
        items: sidebarCommercial(),
      },
      '/guide/': { base: '/guide/', items: sidebarGuide() },
      '/workflow/': { base: '/workflow/', items: sidebarWorkflow() },
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
        // { link: 'introduction/thin', text: 'Phiên bản Lite' },
      ],
    },
    {
      collapsed: false,
      text: 'Tài liệu khác',
      items: [
        {
          base: '/',
          link: 'workflow/introduction',
          text: 'Tự động hóa trình duyệt',
        },
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
    // {
    //   text: 'Căn cứ',
    //   items: [
    //     { link: 'essentials/concept', text: 'Khái niệm cơ bản' },
    //     { link: 'essentials/development', text: 'Phát triển địa phương' },
    //     { link: 'essentials/route', text: 'Định tuyến và thực đơn' },
    //     { link: 'essentials/settings', text: 'Cấu hình' },
    //     { link: 'essentials/icons', text: 'biểu tượng' },
    //     { link: 'essentials/styles', text: 'phong cách' },
    //     { link: 'essentials/external-module', text: 'Các mô -đun bên ngoài' },
    //     { link: 'essentials/build', text: 'Xây dựng và triển khai' },
    //     {
    //       link: 'essentials/server',
    //       text: 'Tương tác máy chủ và giả định dữ liệu',
    //     },
    //   ],
    // },
    // {
    //   text: 'Chuyên sâu',
    //   items: [
    //     { link: 'in-depth/login', text: 'Đăng nhập' },
    //     // { link: 'in-depth/layout', text: '布局' },
    //     { link: 'in-depth/theme', text: 'Chủ đề' },
    //     { link: 'in-depth/access', text: 'Quyền' },
    //     { link: 'in-depth/locale', text: 'Quốc tế hóa' },
    //     { link: 'in-depth/features', text: 'Các chức năng phổ biến' },
    //     { link: 'in-depth/check-updates', text: 'Kiểm tra cập nhật' },
    //     { link: 'in-depth/loading', text: 'Tải toàn cầu' },
    //     {
    //       link: 'in-depth/ui-framework',
    //       text: 'Chuyển đổi thư viện thành phần',
    //     },
    //   ],
    // },
    // {
    //   text: 'Dự án',
    //   items: [
    //     { link: 'project/standard', text: 'Đặc điểm kỹ thuật' },
    //     { link: 'project/cli', text: 'CLI' },
    //     { link: 'project/dir', text: 'Mục lục Mô tả' },
    //     { link: 'project/test', text: 'Kiểm tra đơn vị' },
    //     { link: 'project/tailwindcss', text: 'Tailwind CSS' },
    //     { link: 'project/changeset', text: 'Changeset' },
    //     { link: 'project/vite', text: 'Vite Config' },
    //   ],
    // },
    // {
    //   text: 'Khác',
    //   items: [
    //     { link: 'other/project-update', text: 'Cập nhật dự án' },
    //     { link: 'other/remove-code', text: 'Xóa mã' },
    //     { link: 'other/faq', text: 'Câu hỏi thường gặp' },
    //   ],
    // },
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
      collapsed: false,
      text: 'Quy trình',
      items: [],
    },
    {
      collapsed: false,
      text: 'Khối',
      items: [],
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
          activeMatch: '^/workflow/',
          link: '/workflow/introduction',
          text: 'Tự động hóa trình duyệt',
        },
      ],
    },
    {
      activeMatch: '^/commercial/',
      link: '/commercial/community',
      text: 'Hỗ trợ',
    },
    {
      link: 'https://id.tfsoftware.vn',
      text: 'Đăng nhập',
    },
    {
      link: '/sponsor/personal',
      text: 'Tài trợ',
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
