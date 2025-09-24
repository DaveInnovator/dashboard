import { Bell, User, Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="flex items-center justify-between bg-white dark:bg-gray-900 shadow p-4">
      {/* Left */}
      <div className="font-bold text-lg text-gray-800 dark:text-gray-100">
        Admin Dashboard
      </div>

      {/* Right */}
      <div className="flex items-center space-x-4">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        <Bell className="text-gray-600 dark:text-gray-300" size={20} />
        <User className="text-gray-600 dark:text-gray-300" size={20} />
      </div>
    </div>
  );
};

export default Navbar;
