// First edition, that was extremely simple

// function setDarkMode() {
//   var element = document.body;
//   element.classList.toggle("dark");
// }

const colorThemes = document.querySelectorAll('[name="theme"]');

// Store current theme set
const storeTheme = function (theme) {
  localStorage.setItem("theme", theme);
};

// Set correct theme when visitor returns
const setTheme = function () {
  const activeTheme = localStorage.getItem("theme");
  colorThemes.forEach((themeOption) => {
    if (themeOption.id === activeTheme) {
      themeOption.checked = true;
    }
  });
  // A Fallback(1) for no ":has()" support
  document.documentElement.className = activeTheme;
};

colorThemes.forEach((themeOption) => {
  themeOption.addEventListener("click", () => {
    storeTheme(themeOption.id);
    // A Fallback(2) for no ":has()" support
    document.documentElement.className = themeOption.id;
  });
});

document.onload = setTheme();