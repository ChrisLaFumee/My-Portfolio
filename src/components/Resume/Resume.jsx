export default function Resume() {
  return (
    <section id="resume" className="w-full">
      <div className="py-4 max-w-4xl mx-auto text-center  border-b border-gray-700 pb-2">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 pb-2">Resume</h2>

        <a
          href="/Christopher-LaFumee-Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="block max-w-[200px] mx-auto"
        >
          <img
            src="/resume-thumbnail.png"
            alt="Resume Preview"
            className="mt-4 w-full rounded-lg shadow-lg hover:opacity-80 transition"
          />
        </a>

        <p className="text-lg text-gray-300 pb-2 mt-4">
          Download a copy of my resume.
        </p>

        <button className="bg-gray-900 hover:bg-gray-800 border border-gray-700 text-base sm:text-lg px-6 py-2 rounded-2xl shadow-md transition-colors">
          Download Resume
        </button>

        <div className="flex justify-center mb-8">
          <a
            href="/Tech-Resume.pdf"
            download
            className="transition-transform transform hover:scale-105"
          ></a>
        </div>
      </div>
    </section>
  );
}
