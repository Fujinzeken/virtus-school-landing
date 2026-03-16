import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import MissionValues from "@/components/MissionValues";
import WhyChooseUs from "@/components/WhyChooseUs";
import CampusGallery from "@/components/CampusGallery";
import IbExplainer from "@/components/IbExplainer";
import Programmes from "@/components/Programmes";
import AcademicTracks from "@/components/AcademicTracks";
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
      <MissionValues />
      <WhyChooseUs />
      <CampusGallery />
      <IbExplainer />
      <Programmes />
      <AcademicTracks />
      <Teachers />
      <News />
      <CtaBanner />
      <Footer />
    </>
  );
}
