import { useState, useEffect } from "react";
import "./DarkMode.css";
import DarkModeIcon from "@mui/icons-material/DarkMode";

function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const isDark = localStorage.getItem("darkMode") === "true";
    setIsDarkMode(isDark);
  }, []);

  const handleToggle = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem("darkMode", newMode);
    document.body.classList.toggle("dark-mode", newMode);
  };

  return (
    <div className="dark-mode-toggle" onClick={handleToggle}>
      <DarkModeIcon />
      <span>{isDarkMode ? "Light Mode" : "Dark Mode"}</span>
    </div>
  );
}

export default DarkModeToggle;
