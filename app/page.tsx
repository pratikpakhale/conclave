// import About from "@/components/Home/About";
import Footer from "@/components/Footer";
import HeroSection from "@/components/Home/HeroSection";
import Navbar from "@/components/Navbar";
import TimeLine from "@/components/Home/TimeLine";
import OverTheYears from "@/components/Home/OverTheYears";
import Testimonials from "@/components/Testimonials/Testimonials";

export default function Home() {
  return (
    <div className="w-full flex flex-col ">
      <Navbar />
      <HeroSection />
      {/* <About /> */}
      <Testimonials />
      <TimeLine />

      <OverTheYears />
      <Footer />
    </div>
  );
}
