import Hero from "./components/Hero/Hero";
import Header from "./components/Header/Header";
import Footer from "./components/Foooter/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white p-4 md:p-8 rounded-xl shadow-lg">
      <Header />
      <Hero />
      <Footer />
    </div>
  );
}

export default App;
