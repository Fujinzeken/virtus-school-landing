import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import Advantages from "@/components/Advantages";
import CampusGallery from "@/components/CampusGallery";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Introduction />
      <WhyChooseUs />
      <CampusGallery />
    </>
  );
}
