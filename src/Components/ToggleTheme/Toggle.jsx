import React, { useEffect, useState } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';

const Toggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="px-4 py-2 rounded-md bg-white  dark:bg-[#10282a]
       text-gray-900 dark:text-white transition flex items-center gap-2"
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
  );
};

export default Toggle;
