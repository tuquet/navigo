export function watchThemeChange() {
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
    console.log('event', event);
    if (event.origin === 'https://docs.tfsoftware.vn') {
      const { theme } = event.data;
      if (theme) {
        updateTheme(theme);
      }
    }
  });
}