const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-black text-gray-100 overflow-x-hidden border-b border-gray-800">
      <div className="w-full px-6 py-4 flex justify-between items-center">
        {/* Logo / Name */}
        <h1 className="text-2xl font-bold">Christopher LaFumee</h1>

        {/* Navigation Links */}
        <nav className="flex gap-4">
          <a
            href="#about"
            className="bg-orange-700 hover:bg-orange-800 text-white font-medium py-2 px-4 rounded-full transition-all duration-300 shadow hover:shadow-orange-500/50"
          >
            About
          </a>
          <a
            href="#projects"
            className="bg-orange-700 hover:bg-orange-800 text-white font-medium py-2 px-4 rounded-full transition-all duration-300 shadow hover:shadow-orange-500/50"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="bg-orange-700 hover:bg-orange-800 text-white font-medium py-2 px-4 rounded-full transition-all duration-300 shadow hover:shadow-orange-500/50"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
