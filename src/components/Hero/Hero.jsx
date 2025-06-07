const Hero = () => {
  return (
    <section className="w-full h-screen flex items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <div className="text-center px-6">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          ChrisCross Coding
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Full-Stack Developer | Health & Fitness Profressional | Small Business
          Owner | Community Builder
        </p>
        <a
          href="#projects"
          className="inline-block bg-orange-700 hover:bg-orange-800 text-gray-100 font-semibold py-3 px-6 rounded-2xl transition-transform duration-300 hover:scale-105 no-underline"
        >
          My Projects
        </a>
      </div>
    </section>
  );
};

export default Hero;
