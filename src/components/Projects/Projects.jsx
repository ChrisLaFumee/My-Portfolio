export default function Projects() {
  return (
    <section id="projects" className="py-4 scroll-mt-20 w-full">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">Projects</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {/* First Project */}
          <div className="border border-gray-700 rounded-2xl shadow-lg p-4 sm:p-6 bg-gray-900">
            <h3 className="text-lg sm:text-xl font-semibold mb-2">
              Limitless Fitness Tracking
            </h3>
            <p className="text-gray-300 text-sm sm:text-base">
              A full-stack app where users can log workouts, track gains, and
              earn real-world rewards.
            </p>
            <a
              href="https://github.com/YourUsername/FitnessTrackerApp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-4 py-2 rounded-xl border hover:bg-orange-500 transition text-white text-sm sm:text-base"
            >
              View App
            </a>
          </div>
          {/* Second Project */}
          <div className="border border-gray-700 rounded-2xl shadow-lg p-4 sm:p-6 bg-gray-900">
            <h3 className="text-lg sm:text-xl font-semibold mb-2">
              Micro-Habit Tracker
            </h3>
            <p className="text-gray-300 text-sm sm:text-base">
              A full-stack app where users can track habits like meditation and
              workouts to earn real-world rewards.
            </p>
            <a
              href="https://github.com/YourUsername/FitnessTrackerApp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-4 py-2 rounded-xl border hover:bg-orange-500 transition text-white text-sm sm:text-base"
            >
              View App
            </a>
          </div>
          {/* Third Project */}
          <div className="border border-gray-700 rounded-2xl shadow-lg p-4 sm:p-6 bg-gray-900">
            <h3 className="text-lg sm:text-xl font-semibold mb-2">
              Super Journaling
            </h3>
            <p className="text-gray-300 text-sm sm:text-base">
              A full-stack app where users can journal their thoughts and mood
              and reflect on how their activities and overall day affects their
              mental health.
            </p>
            <a
              href="https://github.com/YourUsername/FitnessTrackerApp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-4 py-2 rounded-xl border hover:bg-orange-500 transition text-white text-sm sm:text-base"
            >
              View App
            </a>
          </div>
          {/* Fourth Project */}
          <div className="border border-gray-700 rounded-2xl shadow-lg p-4 sm:p-6 bg-gray-900">
            <h3 className="text-lg sm:text-xl font-semibold mb-2">
              Limitless Community Challenges
            </h3>
            <p className="text-gray-300 text-sm sm:text-base">
              A full-stack app where users can join a community of like-minded
              individuals to take on challenges together, track progress, and
              earn rewards.
            </p>
            <a
              href="https://github.com/YourUsername/FitnessTrackerApp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-4 py-2 rounded-xl border hover:bg-orange-500 transition text-white text-sm sm:text-base"
            >
              View App
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
