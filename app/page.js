import About from "@/app/components/about";
import Header from "@/app/components/header";
import Hero from "@/app/components/hero";
import Lines from "@/components/lines";
import Projects from "./components/projects";
import Work from "./components/work";
import Contact from "./components/contact";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="h-full w-full ">
      <Lines />
      <Header />
      <Hero />
      <About />
      <Projects/>
      <Work/>
      <Contact/>
      <Footer />
    </div>
  );
}
