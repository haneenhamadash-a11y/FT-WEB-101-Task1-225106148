// 1. Find the button by its id
const themeButton = document.getElementById("theme-button");

if (themeButton) {
  const updateThemeButton = () => {
    const isDark = document.body.classList.toggle("dark");
    themeButton.setAttribute("aria-pressed", String(isDark));
    themeButton.textContent = isDark ? "Switch to light mode" : "Toggle dark mode";
  };

  // 2. Listen for a click
  themeButton.addEventListener("click", updateThemeButton);
}