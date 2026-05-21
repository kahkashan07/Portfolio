import { Nav } from "../components/portfolio/Nav";
import { Hero } from "../components/portfolio/Hero";
import { About } from "../components/portfolio/About";
import { Skills } from "../components/portfolio/Skills";
import { Education } from "../components/portfolio/Education";
import { Contact } from "../components/portfolio/Contact";

export default function Home() {
  return (
    <main className="overflow-x-hidden">

      <Nav />

      <Hero />

      <About />

      <Skills />

      <Education />

      <Contact />

    </main>
  );
}