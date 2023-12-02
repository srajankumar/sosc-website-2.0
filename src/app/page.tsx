import HorizontalScroll from "@/components/Home/HorizontalScroll";
import TextScroll from "@/components/Home/TextScroll";
import Hero from "@/components/Home/Hero";
import Team from "@/components/Home/Team";

import About from "@/components/Description";
export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <HorizontalScroll />
      <About />
      <TextScroll />
      <Team />
    </div>
  );
}
