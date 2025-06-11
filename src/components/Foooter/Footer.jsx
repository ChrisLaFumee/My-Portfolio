const Footer = () => {
  return (
    <footer id="contact" className="py-8 w-full">
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
            className="bg-gray-900 hover:bg-gray-800 border border-gray-700  font-medium py-2 px-4 rounded-full transition-all duration-300"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/christopher-lafumee-488685327"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-900 hover:bg-gray-800 border border-gray-700 font-medium py-2 px-4 rounded-full transition-all duration-300"
          >
            LinkedIn
          </a>
          <a
            href="https://www.tiktok.com/@chriscrosscoding"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-900 hover:bg-gray-800 border border-gray-700 px-4 py-2 rounded-2xl shadow-md transition-all duration-300"
          >
            TikTok
          </a>
          <a
            href="mailto:your@email.com"
            className="bg-gray-900 hover:bg-gray-800 border border-gray-700 font-medium py-2 px-4 rounded-full transition-all duration-300"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
