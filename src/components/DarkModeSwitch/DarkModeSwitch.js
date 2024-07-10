"use client";
import React from "react";
import { Sun } from "react-feather";
import VisuallyHidden from "@/components/VisuallyHidden";
import Cookies from "js-cookie";
import { DARK_TOKENS, LIGHT_TOKENS } from "@/constants";

function DarkModeSwitch({ className }) {
  const toggleDarkMode = () => {
    const root = document.documentElement;
    const nextTheme = root.dataset.colorTheme === "light" ? "dark" : "light";

    const tokens = nextTheme === "light" ? LIGHT_TOKENS : DARK_TOKENS;
    root.dataset.colorTheme = nextTheme;
    for (const [token, value] of Object.entries(tokens)) {
      root.style.setProperty(token, value);
    }
    Cookies.set("theme", nextTheme);
  };

  return (
    <button onClick={toggleDarkMode} className={className}>
      <Sun size="1.5rem" />
      <VisuallyHidden>Toggle dark / light mode</VisuallyHidden>
    </button>
  );
}

export default DarkModeSwitch;
