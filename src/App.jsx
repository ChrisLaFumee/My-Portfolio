import Hero from "./components/Hero/Hero";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="min-h-screen bg-white p-4 md:p-8 rounded-xl shadow-lg">
      <Header />
      <Hero />
      <div></div>
    </div>
  );
}

export default App;
