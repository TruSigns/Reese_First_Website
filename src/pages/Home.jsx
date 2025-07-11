import  ThemeToggle  from "../components/ThemeToggle";
import StarBackground from "../components/StarBackground";
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme toggle */}
      <ThemeToggle />
      
      {/* Background effect */}
      <StarBackground/>

      {/* Navbar */}
      <NavBar />

      {/* Main content */}
      <main>
        <HeroSection />
      </main>

      {/* Footer */}
    </div>
  );
}

export default Home;
