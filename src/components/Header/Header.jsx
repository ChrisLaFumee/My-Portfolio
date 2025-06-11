const Header = () => {
  return (
    <header className="py-4 sticky top-0 z-50">
      <div className="w-full px-2 sm:px-4 md:px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-2">
        {/* Logo / Name */}
        <h1 className="text-xl sm:text-2xl font-bold mb-2 md:mb-0 text-center md:text-left">
          Christopher LaFumee
        </h1>

        {/* Navigation Links */}
        <nav className="flex flex-col md:flex-row gap-2 md:gap-4 w-full md:w-auto justify-center md:justify-end">
          <a
            href="#about"
            className="bg-orange-700 hover:bg-orange-800 text-white font-medium py-2 px-4 rounded-full transition-all duration-300 shadow hover:shadow-orange-500/50 text-sm sm:text-base text-center"
          >
            About
          </a>
          <a
            href="#projects"
            className="bg-orange-700 hover:bg-orange-800 text-white font-medium py-2 px-4 rounded-full transition-all duration-300 shadow hover:shadow-orange-500/50 text-sm sm:text-base text-center"
          >
            Projects
          </a>
          <a
            href="#resume"
            className="bg-orange-700 hover:bg-orange-800 text-white font-medium py-2 px-4 rounded-full transition-all duration-300 shadow hover:shadow-orange-500/50 text-sm sm:text-base text-center"
          >
            Resume
          </a>
          <a
            href="#contact"
            className="bg-orange-700 hover:bg-orange-800 text-white font-medium py-2 px-4 rounded-full transition-all duration-300 shadow hover:shadow-orange-500/50 text-sm sm:text-base text-center"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
