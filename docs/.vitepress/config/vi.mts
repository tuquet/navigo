import type { DefaultTheme } from 'vitepress';

import { defineConfig } from 'vitepress';

import { version } from '../../../package.json';

export const vi = defineConfig({
  description:
    'Khung hệ thống quản lý doanh nghiệp & quản trị doanh nghiệp VBEN',
  lang: 'vi-VN',
  themeConfig: {
    darkModeSwitchLabel: 'Chủ đề',
    darkModeSwitchTitle: 'Chuyển sang chế độ tối',
    docFooter: {
      next: 'Trang tiếp theo',
      prev: 'Trang trước',
    },
    editLink: {
      pattern:
        'https://github.com/vbenjs/vue-vben-admin/edit/main/docs/src/:path',
      text: 'Chỉnh sửa trang này trên github',
    },
    footer: {
      copyright: `Copyright © 2020-${new Date().getFullYear()} Vben`,
      message: 'Phát hành dựa trên giấy phép MIT.',
    },
    langMenuLabel: 'Đa ngôn ngữ',
    lastUpdated: {
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium',
      },
      text: 'Cập nhật lần cuối',
    },
    lightModeSwitchTitle: 'Chuyển sang chế độ ánh sáng',
    nav: nav(),

    outline: {
      label: 'Trang điều hướng trang',
    },
    returnToTopLabel: 'Quay lại đầu',

    sidebar: {
      '/commercial/': { base: '/commercial/', items: sidebarCommercial() },
      '/components/': { base: '/components/', items: sidebarComponents() },
      '/guide/': { base: '/guide/', items: sidebarGuide() },
    },
    sidebarMenuLabel: '菜单',
  },
});

function sidebarGuide(): DefaultTheme.SidebarItem[] {
  return [
    {
      collapsed: false,
      text: 'Giới thiệu',
      items: [
        {
          link: 'introduction/vben',
          text: 'Về Vben Admin',
        },
        {
          link: 'introduction/why',
          text: 'Tại sao chọn chúng tôi?',
        },
        { link: 'introduction/quick-start', text: 'Bắt đầu nhanh chóng' },
        { link: 'introduction/thin', text: 'Phiên bản Lite' },
        {
          base: '/',
          link: 'components/introduction',
          text: 'Tài liệu thành phần',
        },
      ],
    },
    {
      text: 'Căn cứ',
      items: [
        { link: 'essentials/concept', text: 'Khái niệm cơ bản' },
        { link: 'essentials/development', text: 'Phát triển địa phương' },
        { link: 'essentials/route', text: 'Định tuyến và thực đơn' },
        { link: 'essentials/settings', text: 'Cấu hình' },
        { link: 'essentials/icons', text: 'biểu tượng' },
        { link: 'essentials/styles', text: 'phong cách' },
        { link: 'essentials/external-module', text: 'Các mô -đun bên ngoài' },
        { link: 'essentials/build', text: 'Xây dựng và triển khai' },
        {
          link: 'essentials/server',
          text: 'Tương tác máy chủ và giả định dữ liệu',
        },
      ],
    },
    {
      text: 'Chuyên sâu',
      items: [
        { link: 'in-depth/login', text: 'Đăng nhập' },
        // { link: 'in-depth/layout', text: '布局' },
        { link: 'in-depth/theme', text: 'Chủ đề' },
        { link: 'in-depth/access', text: 'Quyền' },
        { link: 'in-depth/locale', text: 'Quốc tế hóa' },
        { link: 'in-depth/features', text: 'Các chức năng phổ biến' },
        { link: 'in-depth/check-updates', text: 'Kiểm tra cập nhật' },
        { link: 'in-depth/loading', text: 'Tải toàn cầu' },
        {
          link: 'in-depth/ui-framework',
          text: 'Chuyển đổi thư viện thành phần',
        },
      ],
    },
    {
      text: 'dự án',
      items: [
        { link: 'project/standard', text: '规范' },
        { link: 'project/cli', text: 'CLI' },
        { link: 'project/dir', text: '目录说明' },
        { link: 'project/test', text: '单元测试' },
        { link: 'project/tailwindcss', text: 'Tailwind CSS' },
        { link: 'project/changeset', text: 'Changeset' },
        { link: 'project/vite', text: 'Vite Config' },
      ],
    },
    {
      text: 'khác',
      items: [
        { link: 'other/project-update', text: '项目更新' },
        { link: 'other/remove-code', text: '移除代码' },
        { link: 'other/faq', text: '常见问题' },
      ],
    },
  ];
}

function sidebarCommercial(): DefaultTheme.SidebarItem[] {
  return [
    {
      link: 'community',
      text: 'Nhóm truyền thông',
    },
    {
      link: 'technical-support',
      text: 'Hỗ trợ kỹ thuật',
    },
    {
      link: 'customized',
      text: 'Phát triển tùy chỉnh',
    },
  ];
}

function sidebarComponents(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Các thành phần',
      items: [
        {
          link: 'introduction',
          text: 'giới thiệu',
        },
      ],
    },
    {
      collapsed: false,
      text: 'Các thành phần bố trí',
      items: [
        {
          link: 'layout-ui/page',
          text: 'Trang trang',
        },
      ],
    },
    {
      collapsed: false,
      text: 'Thành phần chung',
      items: [
        {
          link: 'common-ui/vben-api-component',
          text: 'Apicomponent API Packager',
        },
        {
          link: 'common-ui/vben-modal',
          text: 'Hộp phương thức phương thức',
        },
        {
          link: 'common-ui/vben-drawer',
          text: 'Ngăn kéo ngăn kéo',
        },
        {
          link: 'common-ui/vben-form',
          text: 'Hình thức hình thức',
        },
        {
          link: 'common-ui/vben-vxe-table',
          text: 'Bảng VXE',
        },
        {
          link: 'common-ui/vben-count-to-animator',
          text: 'CountToAnimator Hoạt hình kỹ thuật số',
        },
        {
          link: 'common-ui/vben-ellipsis-text',
          text: 'EllipsisText Bỏ qua văn bản',
        },
      ],
    },
  ];
}

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      activeMatch: '^/(guide|components)/',
      text: 'Tài liệu',
      items: [
        {
          activeMatch: '^/guide/',
          link: '/guide/introduction/vben',
          text: 'Hướng dẫn',
        },
        {
          activeMatch: '^/components/',
          link: '/components/introduction',
          text: 'Các thành phần',
        },
        {
          text: 'Phiên bản lịch sử',
          items: [
            {
              link: 'https://doc.vvbin.cn',
              text: '2.x Tài liệu phiên bản',
            },
          ],
        },
      ],
    },
    {
      text: 'Thử nghiệm',
      items: [
        {
          text: 'Vben Admin',
          items: [
            {
              link: 'https://www.vben.pro',
              text: 'Phiên bản demo',
            },
            {
              link: 'https://ant.vben.pro',
              text: 'Ant Design Vue Phiên bản',
            },
            {
              link: 'https://naive.vben.pro',
              text: 'Naive Phiên bản',
            },
            {
              link: 'https://ele.vben.pro',
              text: 'Phiên bản Element Plus',
            },
          ],
        },
        {
          text: '其他',
          items: [
            {
              link: 'https://vben.vvbin.cn',
              text: 'Vben Admin 2.x',
            },
          ],
        },
      ],
    },
    {
      text: version,
      items: [
        {
          link: 'https://github.com/vbenjs/vue-vben-admin/releases',
          text: 'Cập nhật nhật ký',
        },
        {
          link: 'https://github.com/orgs/vbenjs/projects/5',
          text: 'Lộ trình',
        },
        {
          link: 'https://github.com/vbenjs/vue-vben-admin/blob/main/.github/contributing.md',
          text: 'đóng góp',
        },
      ],
    },
    {
      link: '/commercial/technical-support',
      text: '🦄 Hỗ trợ kỹ thuật',
    },
    {
      link: '/sponsor/personal',
      text: '✨ nhà tài trợ',
    },
    {
      link: '/commercial/community',
      text: '👨‍👦‍👦 Nhóm truyền thông',
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
