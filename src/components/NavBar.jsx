import { useEffect, useState } from "react";
import { cn } from "../libs/utils";

// Define navigation items with display names and anchor links
const navItems = [
  { name: " Home", href: "#home" }, // Navigates to Home section
  { name: " About", href: "#about" }, // Navigates to About section
  { name: " Skills", href: "#skill" }, // Navigates to Skills section
  { name: " Projects", href: "#project" }, // Navigates to Projects section
  { name: " Contact", href: "#contact" }, // Navigates to Contact section
];

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState("false");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    // Navigation bar p
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
      )}
    >
      <div className="contianer flex intems-center justify-between">
        <a className="text-xl font-bold text-primary flex items-center"
        href="#hero">
          <span className="relative z-10">
            <span className="text-glow text-foreground"> Signs_Corp </span> {""} Portfolio
          </span>
        </a>

        {/* Desktop version */}
        {/* Mobile version */}
      </div>
    </nav>
  );
};

export default NavBar; // Export the NavBar component for use in other parts of the app
