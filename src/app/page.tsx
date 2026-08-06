import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import AIWork from "@/components/AIWork";
import Building from "@/components/Building";
import Code from "@/components/Code";
import CaseStudies from "@/components/CaseStudies";
import Leadership from "@/components/Leadership";
import Writing from "@/components/Writing";
import Connect from "@/components/Connect";
import Footer from "@/components/Footer";
import AskWidget from "@/components/AskWidget";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <AIWork />
      <Building />
      <Code />
      <CaseStudies />
      <Leadership />
      <Writing />
      <Connect />
      <Footer />
      <AskWidget />
    </>
  );
}
