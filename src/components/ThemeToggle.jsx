import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "../libs/utils";


// Theme toggle component to switch between dark and light modes
export const ThemeToggle = () => {
  // State to track whether dark mode is enabled
  const [isDarkMode, setIsDarkMode] = useState(false);


/**
 * On component mount, check the stored theme preference in localStorage.
 * If the theme is "dark", enable dark mode by updating state and adding the "dark" class to the HTML root.
 * If no preference is set or it's not "dark", default to light mode and update localStorage accordingly.
 */
  useEffect(() => {
    const storeTheme = localStorage.getItem("theme");
    if (storeTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light")
      setIsDarkMode(false)
    }
  }, []);

  // Function to toggle the theme mode
  const toggleTheme = () => {
    // If dark mode is currently enabled, remove the 'dark' class
    // If dark mode is not enabled, add the 'dark' class
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light"); // to keep setting light
      setIsDarkMode(false); // Set state to light mode
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark"); // to keep setting Dark
      setIsDarkMode(true); // Set state to dark mode
    }
  };

  // Return a button that toggles the theme when clicked
  // The icon changes based on the current mode using a ternary operator
  return (
    <button onClick={toggleTheme} className={cn("fixed max-sm:hidden top-5 right-5 z-50 rounded-full transition-colors duration-300",
      "focus:outline-hidden"
    )}>
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-500" />
      ) : (
        <Moon className="h-6 w-6 text-blue-500" />
      )}
    </button>
  );
};

export default ThemeToggle;
//----------------------NOTES--------------------------------------------//
// timestamp is 39:10
