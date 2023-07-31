import Footer from "@/components/Footer";
import HorizontalScroll from "@/components/Home/HorizontalScroll";
import Image from "next/image";
import TextScroll from '@/components/Home/TextScroll'
export default function Home() {
  return (
    <div>
      <div
        className="
        h-screen bg-white"
        >
        <TextScroll />
        <HorizontalScroll />
      </div>
      <div className="
        h-[1000vh]
        ">

      </div>
      <Footer />
    </div>
  );
}
