import Hero from "./sections/Hero";
import Companies from "./sections/Companies";
import Features from "./sections/Features";
import Statistics from "./sections/Statistics";
import Testimonials from "./sections/Testimonials";
import CTA from "./sections/CTA";
import Footer from "./sections/Footer";

function Home() {
  return (
    <>
      <Hero />
      <Companies />
      <Features />
      <Statistics />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
}

export default Home;