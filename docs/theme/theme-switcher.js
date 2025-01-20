export function watchThemeChange() {
  const themeKey = 'tfsoft-web-preferences-theme'; // Key lưu trữ theme trong localStorage

  // Hàm để cập nhật theme
  function updateTheme(theme) {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  // Hàm để lấy giá trị theme từ localStorage
  function getThemeFromLocalStorage() {
    const themeData = localStorage.getItem(themeKey);
    if (themeData) {
      try {
        const parsedData = JSON.parse(themeData);
        return parsedData.value;
      } catch (e) {
        console.error('Error parsing theme data from localStorage', e);
      }
    }
    return null;
  }

  // Theo dõi sự thay đổi của localStorage
  window.addEventListener('storage', (event) => {
    if (event.key === themeKey) {
      const newTheme = getThemeFromLocalStorage();
      if (newTheme) {
        updateTheme(newTheme);
      }
    }
  });

  // Cập nhật theme khi tải trang
  const currentTheme = getThemeFromLocalStorage();
  if (currentTheme) {
    updateTheme(currentTheme);
  }
}