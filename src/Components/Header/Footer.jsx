import React, { useEffect, useState } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-[#204e51] dark:bg-[#10282a] text-white transition duration-300 p-4">
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="flex items-center gap-2 px-4 py-2 rounded-md bg-white dark:bg-gray-800 text-black dark:text-white shadow"
      >
        {darkMode ? (
          <>
            <FiSun className="text-xl" />
            <span>Light Mode</span>
          </>
        ) : (
          <>
            <FiMoon className="text-xl" />
            <span>Dark Mode</span>
          </>
        )}
      </button>

      <div className="mt-8">
        <p className="text-lg">This background changes with dark mode!</p>
      </div>
    </div>
  );
};

export default DarkModeToggle;
