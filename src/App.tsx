import "./App.scss";
import Hero from "./pages/Hero";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Hero />

      <About />

      <Projects />

      <p>&copy; Devon Arganaraz 2024</p>
    </>
  );
}

export default App;
