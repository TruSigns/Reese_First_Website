import { useEffect, useState } from "react";

// Star: id, size, x, y, opacity, animationDuration
// Meteor: id, size, x, y, delay, animationDuration

export const StarBackground = () => {
  // State to store generated star and meteor data
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  // Generate stars and meteors on mount; regenerate stars on window resize
  useEffect(() => {
    generateStars();
    generateMeteors();

    // Regenerate stars on screen resize for responsiveness
    const handleResize = () => {
      generateStars();
    };

    window.addEventListener("resize", handleResize);

    // Cleanup listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Generate randomized star data
  const generateStars = () => {
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 10000
    );

    const newStars = [];

    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1,                 // 1px to 4px
        x: Math.random() * 100,                      // % from left
        y: Math.random() * 100,                      // % from top
        opacity: Math.random() * 0.5 + 0.5,          // 0.5 to 1
        animationDuration: Math.random() * 4 + 2,    // 2s to 6s
      });
    }

    setStars(newStars);
  };

  // Generate a few randomized meteor streaks
  const generateMeteors = () => {
    const numberOfMeteors = 4;
    const newMeteors = [];

    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 2 + 1,                 // base size (for scaling)
        x: Math.random() * 100,                      // % from left
        y: Math.random() * 20,                       // % from top (limited range)
        delay: Math.random() * 15,                   // animation delay in seconds
        animationDuration: Math.random() * 3 + 3,    // 3s to 6s
      });
    }

    setMeteors(newMeteors);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Render each star as a subtle glowing dot */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-pulse-subtle"
          style={{
            width: star.size + "px",
            height: star.size + "px",
            left: star.x + "%",
            top: star.y + "%",
            opacity: star.opacity,
            animationDuration: star.animationDuration + "s",
          }}
        />
      ))}

      {/* Render meteor streaks with delay and custom animation */}
      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor animate-meteor"
          style={{
            width: meteor.size * 50 + "px",               // long horizontal streak
            height: meteor.size * 2 + "px",                // thin vertical thickness
            left: meteor.x + "%",
            top: meteor.y + "%",
            animationDelay: meteor.delay + "s",            // delay must be suffixed
            animationDuration: meteor.animationDuration + "s",
          }}
        />
      ))}
    </div>
  );
};

export default StarBackground;
