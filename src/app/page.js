import NavbarV2 from "@/components/NavbarV2";
import HeroV2 from "@/components/HeroV2";
import IntroductionV2 from "@/components/IntroductionV2";
import ClassroomFeaturesV2 from "@/components/ClassroomFeaturesV2";
import FourPillarsV2 from "@/components/FourPillarsV2";
import EnrollmentV2 from "@/components/EnrollmentV2";
import AmenitiesV2 from "@/components/AmenitiesV2";
import ComprehensiveCoverage from "@/components/ComprehensiveCoverage";
import AdmissionStages from "@/components/AdmissionStages";
import Grants from "@/components/Grants";
import Faq from "@/components/Faq";
import CtaBanner from "@/components/CtaBanner";
import ContactInfo from "@/components/ContactInfo";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <NavbarV2 />
      <HeroV2 />
      <IntroductionV2 />
      <ClassroomFeaturesV2 />
      <FourPillarsV2 />
      <EnrollmentV2 />
      <AmenitiesV2 />
      <ComprehensiveCoverage />
      <AdmissionStages />
      <Grants />
      <Faq />
      <CtaBanner />
      <ContactInfo />
      <Footer />
    </>
  );
}
