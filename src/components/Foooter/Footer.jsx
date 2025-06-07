const Footer = () => {
  return (
    <footer className="w-full bg-black text-gray-400 py-6 mt-0 border-t border-gray-800">
      <div className="w-full px-6 flex flex-col md:flex-row items-center justify-between text-sm">
        {/* Left side */}
        <p>
          &copy; {new Date().getFullYear()} Christopher LaFumee. All rights
          reserved.
        </p>

        {/* Right side - External Links */}
        <div className="flex flex-wrap gap-4 justify-center md:justify-end mt-4 md:mt-0">
          <a
            href="https://github.com/ChrisLaFumee"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-700 hover:bg-orange-800 text-white font-medium py-2 px-4 rounded-full transition-all duration-300 shadow hover:shadow-orange-500/50"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/christopher-lafumee-488685327"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-700 hover:bg-orange-800 text-white font-medium py-2 px-4 rounded-full transition-all duration-300 shadow hover:shadow-orange-500/50"
          >
            LinkedIn
          </a>
          <a
            href="mailto:your@email.com"
            className="bg-orange-700 hover:bg-orange-800 text-white font-medium py-2 px-4 rounded-full transition-all duration-300 shadow hover:shadow-orange-500/50"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
