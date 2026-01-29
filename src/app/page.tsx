import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Products from "@/components/Products";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import CoreValues from "@/components/CoreValues";
import Branches from "@/components/Branches";
import AboutMD from "@/components/AboutMD";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutMD />
      <CoreValues />
      <Services />
      <Products />
      <Testimonials />
      <Branches />
      <Contact />
    </main>
  );
}
