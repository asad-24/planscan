import Header from "./Header/Header";
import HeroSection from "./HeroSection/HeroSection";
import LearnMore from "./LearnMore/LearnMore";
import OurTechnology from "./OurTechnologies/OurTechnology";
import DetailSection from "./detailsSection/DetailSection";
import Footer from "./footer/Footer";

// import DetailSection from "./detailsSection/DetailSection";



export default function LandingPage() {
  return (
    <div>
      <Header/>
      <HeroSection/>
      <DetailSection/>
      <OurTechnology/>
      <LearnMore/>
      <Footer/>
    
    </div>
  )
}
