import React, { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

const Toggle = () => {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "dark";
    }
    return false;
  });

  useEffect(() => {
    const root = document.documentElement;
    const theme = darkMode ? "dark" : "light";

    root.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="px-4 py-2 rounded-md bg-gray-300 kala cursor-pointer 
      text-base-content 
                 transition  items-center gap-2 shadow  "
    >
      {darkMode ? (
        <>
          <FiSun className="md:text-xl" />
          
        </>
      ) : (
        <>
          <FiMoon className="md:text-xl" />
          
        </>
      )}
    </button>
  );
};

export default Toggle;
