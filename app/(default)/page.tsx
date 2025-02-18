export const metadata = {
  title: "Home - Stellar",
  description: "Page description",
};

import Cta from "@/components/cta";
import Features from "@/components/features";
import Features02 from "@/components/features-02";
import Features03 from "@/components/features-03";
import Features04 from "@/components/features-04";
import Hero from "@/components/hero";
import Testimonials from "@/components/testimonials";
import TestimonialsCarousel from "@/components/testimonials-carousel";
import LogoWall from "../../components/logo-wall";
import Pricing from "./pricing-section";

export default function Home() {
  return (
    <>
      <Hero />
      <LogoWall />
      <Features />
      <Features02 />
      <Features03 />
      <TestimonialsCarousel />
      <Features04 />
      <Pricing />
      <Testimonials />
      <Cta />
    </>
  );
}
