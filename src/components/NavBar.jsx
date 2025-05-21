import { useEffect, useState } from "react";
import { cn } from "../libs/utils"; // Utility function for conditional className merging

// Define navigation items with display names and anchor links
const navItems = [
  { name: " Home", href: "#home" }, // Navigates to Home section
  { name: " About", href: "#about" }, // Navigates to About section
  { name: " Skills", href: "#skill" }, // Navigates to Skills section
  { name: " Projects", href: "#project" }, // Navigates to Projects section
  { name: " Contact", href: "#contact" }, // Navigates to Contact section
];

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState("false"); // Track scroll state for navbar styling

  useEffect(() => {
    // Function to handle scroll behavior
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10); // Set to true if user scrolls down more than 10px
    };

    window.addEventListener("scroll", handleScroll); // Attach scroll listener on mount
    return () => window.removeEventListener("scroll", handleScroll); // Clean up on unmount
  }, []);

  return (
    // Navigation bar positioned at top with transition styles
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300", // Base styling
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5" // Shrink and blur on scroll
      )}
    >
      <div className="contianer flex intems-center justify-between">
        {/* Brand/Logo linking to hero section */}
        <a
          className="text-xl font-bold text-primary flex items-center"
          href="#hero"
        >
          <span className="relative z-10">
            <span className="text-glow text-foreground"> Signs_Corp </span> {""}{" "}
            Portfolio
          </span>
        </a>

        {/* Desktop version (to be implemented) */}
        {/* Mobile version (to be implemented) */}
      </div>
    </nav>
  );
};

export default NavBar; // Export the NavBar component for use in other parts of the app
