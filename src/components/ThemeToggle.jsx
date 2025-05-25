import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light"); // Jangan langsung pakai localStorage!

  // Akses localStorage hanya setelah komponen ter-mount (di browser)
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
      if (storedTheme === "dark") {
        document.documentElement.classList.add("dark");
      }
    } else {
      // Atur default sesuai preferensi sistem
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      if (prefersDark) {
        setTheme("dark");
        document.documentElement.classList.add("dark");
      }
    }
  }, []);

  // Reaktif saat user toggle
  useEffect(() => {
    localStorage.setItem("theme", theme);
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleToggle = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <button
      onClick={handleToggle}
      className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
      aria-label="Toggle dark mode"
    >
      {theme === "light" ? "" : ""}
    </button>
  );
}
