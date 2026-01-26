"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navlink from "./Navlink";
import {
  Bars3Icon,
  XMarkIcon,
  MoonIcon,
  SunIcon,
} from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const Navlinks = [
  /* my array */
  {
    title: "Home",
    path: "#home" /* path - variable name */,
  },
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Skills",
    path: "#skills",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  /* State to track if mobile menu is open */
  const [navbarOpen, setNavbarOpen] = useState(false); /*set false to close */
  const [isDarkMode, setIsDarkMode] =
    useState(true); /* Default dark galaxy mode */

  const switchTheme = () => {
    const newMode = !isDarkMode; // Flip: true→false or false→true
    setIsDarkMode(newMode);

    // If True (dark) → remove "light" class
    // If False (light) → add "light" class
    if (newMode === true) {
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
    }
    // Save choice to browser (to remember next time)
    localStorage.setItem("theme", newMode ? "dark" : "light");
  };
  //   /* When page loads, check if user had a saved preference */
  //   useEffect(() => {
  //     const savedTheme = localStorage.getItem("theme");

  //     if (savedTheme === "light") {
  //         setIsDarkMode(false); // user prefer light mode
  //         document.documentElement.classList.add("light");
  //     } else {
  //         setIsDarkMode(true); // user prefer dark galaxy mode
  //         document.documentElement.classList.remove("light");
  //     }
  //   });

  return (
    <nav className="nav-fix">
      <div className="navbar">
        {/* Logo */}
        <Link href={"/"}>
          {isDarkMode ? (
            /* Dark mode show dark logo */
            <Image
              src="/images/dark-logo.png"
              alt="dark logo"
              className="logo"
              width={60}
              height={60}
            />
          ) : (
            /* Light mode show light logo */
            <Image
              src="/images/bplight-logo.png"
              alt="light logo"
              className="logo"
              width={60}
              height={60}
            />
          )}
        </Link>

        {/* Desktop menu items*/}
        <div className="main-menu" id="navbar">
          <ul className="menu-item">
            {Navlinks.map((navItem, indexPosition) => (
              <li key={indexPosition}>
                <Navlink href={navItem.path} title={navItem.title} />
              </li>
            ))}
          </ul>
        </div>
        <div className="mobile-menu">
          {/* if navbarOpen is closed/false, ? = show hamburger : = otherwise show x */}
          {!navbarOpen ? (
            <button onClick={() => setNavbarOpen(true)} className="bar-icon">
              <Bars3Icon className="w-4 h-4" />
            </button>
          ) : (
            <button onClick={() => setNavbarOpen(false)} className="x-icon">
              <XMarkIcon className="w-4 h-4" />
            </button>
          )}
        </div>
        <div className="switch-theme">
          {/* if isDarkMode is true, ? = show sun : = otherwise show Moon */}
          <button onClick={switchTheme}>
            {isDarkMode ? (
              <SunIcon className="w-6 h-6 text-yellow-400" />
            ) : (
              <MoonIcon className="w-6 h-6 text-purple-600" />
            )}
          </button>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={Navlinks} /> : null}
    </nav>
  );
};

export default Navbar;

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
