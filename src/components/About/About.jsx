const About = () => {
  return (
    <section
      id="about"
      className="py-4 border-b border-gray-700 pb-12 scroll-mt-20"
    >
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
        {/* Headshot */}
        <img
          src="/assets/Headshot-Photo.jpg"
          alt="Christopher LaFumee Headshot"
          className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shadow-lg mb-6 md:mb-0"
        />
        {/* About Text */}
        <div className="text-center md:text-left flex-1">
          <h2 className="text-4xl font-bold mb-6">About Me</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Hi, my name is Christopher — a Full Stack Engineer with a passion
            for building meaningful health and wellness experiences through
            technology. With over 12 years of experience as a personal trainer
            and coach, including running my own fitness and nutrition business,
            I bring a unique blend of real-world insight and technical skill to
            every project. Whether I’m crafting clean, user-friendly frontends
            or architecting robust backend systems, I thrive on helping people
            level up their lives — digitally and physically.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
