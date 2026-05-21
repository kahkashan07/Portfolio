import { Nav } from "./components/portfolio/Nav";
import { Hero } from "./components/portfolio/Hero";
import { About } from "./components/portfolio/About";
import { Skills } from "./components/portfolio/Skills";
import { Education } from "./components/portfolio/Education";
import { Contact } from "./components/portfolio/Contact";

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Education />
      <Contact />
    </>
  );
}

export default App;