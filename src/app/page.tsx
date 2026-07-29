import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Building from "@/components/Building";
import Code from "@/components/Code";
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
      <Building />
      <Code />
      <Leadership />
      <Writing />
      <Connect />
      <Footer />
      <AskWidget />
    </>
  );
}
