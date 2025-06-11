export default function Resume() {
  return (
    <section id="resume" className="w-full">
      <div className="py-4 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 border-b border-gray-700 pb-2">
          📄 Resume
        </h2>
        <p className="text-lg text-gray-300 mb-6">
          Download a copy of my resume or view it directly below.
        </p>

        <div className="flex justify-center mb-8">
          <a
            href="/Tech-Resume.pdf"
            download
            className="transition-transform transform hover:scale-105"
          >
            <button className="bg-orange-700 text-white text-base sm:text-lg px-6 py-2 rounded-2xl shadow-md hover:bg-orange-600 transition-colors">
              Download Resume
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
