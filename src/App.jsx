import Hero from "./components/Hero/Hero";
import Header from "./components/Header/Header";
import Footer from "./components/Foooter/Footer";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/Resume";
import ScrollToTopButton from "./components/ScrollToTopButton/ScrollToTopButton";

function App() {
  return (
    <div className="min-h-screen bg-white p-2 md:p-4 rounded-xl shadow-lg">
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
