import "./App.scss";
import Hero from "./pages/Hero";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import { Helmet } from "react-helmet";

function App() {
  const description =
    "Experienced freelance web developer specializing in building dynamic and responsive web applications. Proficient in Python, JavaScript, TypeScript, React, Next.js and Django. View my portfolio of full-stack projects and let's discuss your next web development project.";

  return (
    <>
      <Helmet>
        <title>DevonWeb | Melbourne-based web developer</title>
        <meta name="description" content={description} />
        <meta
          property="og:title"
          content="DevonWeb | Melbourne-based web developer"
        />
        <meta property="og:description" content={description} />
        <meta
          property="og:image"
          content="https://devonweb.au/assets/personal-site-Bgu7vIiK.png"
        />
        <meta property="og:url" content="https://devonweb.au" />
        <meta property="og:type" content="website" />
      </Helmet>

      <Navbar />
      <Hero />
      <About />
      <Projects />
      <p>&copy; Devon Arganaraz 2024</p>
    </>
  );
}

export default App;
