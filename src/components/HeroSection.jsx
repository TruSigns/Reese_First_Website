function HeroSection() {
  return (
    <section
      id="hero"
      className=" relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight" >
            <span className="opactiy-0 animate-fade-in"> Hi, I'm</span>
            <span className="text-primary opacity-0-0 animate-fade-in-delay-1">{" "}Maurice</span>
            <span className="text-gradient ml-2 opacity-0-0 animate-fade-in-delay-2">{" "} Ruffin</span>
          </h1>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
