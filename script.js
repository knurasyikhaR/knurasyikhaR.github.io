document.addEventListener("DOMContentLoaded", function () {
  const themeToggle = document.getElementById("theme-toggle");
  const currentTheme = localStorage.getItem("theme") || "light";

  document.body.classList.toggle("dark-mode", currentTheme === "dark");
  themeToggle.textContent =
    currentTheme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode";

  themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    const newTheme = document.body.classList.contains("dark-mode")
      ? "dark"
      : "light";
    themeToggle.textContent =
      newTheme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode";
    localStorage.setItem("theme", newTheme);
  });
});
