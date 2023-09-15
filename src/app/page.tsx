import Footer from "@/components/Footer";
import HorizontalScroll from "@/components/Home/HorizontalScroll";
import TextScroll from "@/components/Home/TextScroll";
import Hero from "@/components/Home/Hero";
import About from "@/components/Home/About";
import Team from "@/components/Home/Team";
import Line from "@/components/Home/Line";
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
      <Footer />
    </div>
  );
}
