import Footer from "@/components/Footer";
import HorizontalScroll from "@/components/Home/HorizontalScroll";
import Image from "next/image";
import TextScroll from "@/components/Home/TextScroll";
import Hero from "@/components/Home/Hero";
import Navbar from "@/components/Navbar";
export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="h-screen bg-black">
        <Hero />
      </div>
      <div className="h-screen bg-white">
        <TextScroll />
        <HorizontalScroll />
      </div>
      <div className="h-[1000vh]"></div>
      <Footer />
    </div>
  );
}
