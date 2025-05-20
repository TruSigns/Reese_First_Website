import  ThemeToggle  from "../components/ThemeToggle";
import StarBackground from "../components/StarBackground";

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme toggle */}
      <ThemeToggle />
      {/* Background effect */}
      <StarBackground/>

      {/* Navbar */}

      {/* Main content */}

      {/* Footer */}
    </div>
  );
}

export default Home;
