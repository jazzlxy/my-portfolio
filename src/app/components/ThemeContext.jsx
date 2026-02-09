"use client";
import React, { createContext, useContext, useState } from "react";

// 1. Create Theme Context
const ThemeContext = createContext();

// 2. Create hooks to use theme anywhere
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }
  return context;
};

// 3. Provider component
export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true); // Always start with dark mode

  // Toggle between dark and light
  const toggleTheme = () => {
    const newMode = !darkMode; // Flip: true→false or false→true
    setDarkMode(newMode);

    // If currently true (Dark): !true makes it false.
    // If currently false (Light): !false makes it true.

    if (newMode) {
      // Dark mode
      document.documentElement.classList.remove("light");
    } else {
      // Light mode
      document.documentElement.classList.add("light");
    }
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Step by step:
// isDarkMode is true
// !true = false
// So: newMode = false
// Result: We switch to LIGHT mode

// Step by step:
// isDarkMode is false
// !false = true
// So: newMode = true

// Result: We switch to DARK mode
