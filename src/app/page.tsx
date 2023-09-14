import Footer from "@/components/Footer";
import HorizontalScroll from "@/components/Home/HorizontalScroll";
import Image from "next/image";
import TextScroll from "@/components/Home/TextScroll";
import Hero from "@/components/Home/Hero";
import Navbar from "@/components/Navbar";
import About from "@/components/Home/About";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <HorizontalScroll />
      <About />
      <TextScroll />
      <About />
      <Footer />
    </div>
  );
}
