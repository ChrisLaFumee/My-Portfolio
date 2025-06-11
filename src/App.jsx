import Hero from "./components/Hero/Hero";
import Header from "./components/Header/Header";
import Footer from "./components/Foooter/Footer";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/Resume";
import ScrollToTopButton from "./components/ScrollToTopButton/ScrollToTopButton";

function App() {
  return (
    <div className="min-h-screen bg-zinc-900 text-gray-400">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"></div>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Resume />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default App;
