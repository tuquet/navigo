export function watchThemeChange() {
  if (typeof window === 'undefined') {
    // Nếu không phải là client-side, không làm gì cả
    return;
  }

  // Hàm để cập nhật theme
  function updateTheme(theme) {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  updateTheme('dark');

  // Lắng nghe thông điệp từ iframe
  window.addEventListener('message', (event) => {
    if (event.origin === 'https://docs.tfsoftware.vn') {
      const { theme } = event.data;
      if (theme) {
        updateTheme(theme);
      }
    }
  });
}