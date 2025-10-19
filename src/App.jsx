import "./App.css";
import BottomCarouselItems from "./components/BottomCarousel/BottomCarouselItems";
import NavBar from "./components/NavBar/NavBar";
import AgencyGrowth from "./components/Pages/AgencyGrowth";
import ClientBrief from "./components/Pages/ClientBrief";
import ComparisonSection from "./components/Pages/ComparisonSection";
import ComparisonSection2 from "./components/Pages/ComparisonSection2";
import CtaSection from "./components/Pages/CtaSection";
import FAQSection from "./components/Pages/FAQSection";
import Footer from "./components/Pages/Footer";
import Hero from "./components/Pages/Hero";
import ReviewCarousel from "./components/ReviewCarousel/ReviewCarousel";
import UpperCarouselItems from "./components/UpperCarousel/UpperCarouselItems";

function App() {
  return (
    <>
      <NavBar />
      <main>
        <Hero/>
        <BottomCarouselItems />
        <UpperCarouselItems />
        <AgencyGrowth/>
        <ReviewCarousel/>
        <ComparisonSection/>
        <ComparisonSection2/>
        <FAQSection/>
        <CtaSection/>
        <ClientBrief/>
        <Footer/>
      </main>
    </>
  );
}

export default App;
