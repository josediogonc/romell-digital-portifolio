import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { Roles } from "@/components/sections/Roles";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <SelectedWork />
        <Roles />
        <About />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
