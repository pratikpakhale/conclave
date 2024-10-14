import About from "@/components/About";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="w-full flex flex-col ">
      <Navbar />
      <HeroSection />
      <About />
      <Footer />
    </div>
  );
}
