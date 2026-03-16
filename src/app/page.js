import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import WhyChooseUs from "@/components/WhyChooseUs";
import CampusGallery from "@/components/CampusGallery";
import Programmes from "@/components/Programmes";
import Teachers from "@/components/Teachers";
import News from "@/components/News";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Introduction />
      <WhyChooseUs />
      <CampusGallery />
      <Programmes />
      <Teachers />
      <News />
      <CtaBanner />
      <Footer />
    </>
  );
}
