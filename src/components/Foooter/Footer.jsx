const Footer = () => {
  return (
    <footer className="w-full bg-black text-gray-400 py-6 mt-0 border-t border-gray-800">
      <div className="w-full px-6 flex flex-col md:flex-row items-center justify-between text-sm">
        {/* Left */}
        <p>
          &copy; {new Date().getFullYear()} Christopher LaFumee. All rights
          reserved.
        </p>

        {/* Right */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a
            href="https://github.com/ChrisLaFumee"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-400 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-400 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:your@email.com"
            className="hover:text-orange-400 transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
