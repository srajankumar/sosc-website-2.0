import HorizontalScroll from "@/components/Home/HorizontalScroll";
import TextScroll from "@/components/Home/TextScroll";
import Hero from "@/components/Home/Hero";
import Team from "@/components/Home/Team";
import Line from "@/components/Home/Line";

import About from "@/components/Description";
export default function Home() {
  return (
    <div>
      <Line />
      <Hero />
      <About />
      <HorizontalScroll />
      <About />
      <TextScroll />
      <Team />
    </div>
  );
}
