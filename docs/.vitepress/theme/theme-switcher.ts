export function watchThemeChange() {

  // Nếu không phải là client-side, không làm gì cả
  if (typeof window === 'undefined') {
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
    if (event.origin === 'http://localhost:5888') {
      const { theme } = event.data;
      if (theme) {
        updateTheme(theme);
      }
    }
  });
}