const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-black text-gray-100 overflow-x-hidden">
      <div className="w-full px-6 py-4 flex justify-between items-center">
        {/* Logo / Name */}
        <h1 className="text-2xl font-bold">Christopher LaFumee</h1>

        {/* Navigation Links */}
        <nav className="space-x-6">
          <a href="#about" className="hover:text-orange-400 transition-colors">
            About
          </a>
          <a
            href="#projects"
            className="hover:text-orange-400 transition-colors"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="hover:text-orange-400 transition-colors"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
