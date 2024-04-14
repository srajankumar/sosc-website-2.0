import HorizontalScroll from "@/components/Home/HorizontalScroll";
import TextScroll from "@/components/Home/TextScroll";
import Hero from "@/components/Home/Hero";
import Team from "@/components/Home/Team";
import About from "@/components/Home/About";
import Clubs from "@/components/Home/Clubs";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <TextScroll />
      <Clubs />
      <HorizontalScroll />
      <Team />
    </div>
  );
}
