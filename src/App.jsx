import "./App.css";
import BottomCarouselItems from "./components/BottomCarousel/BottomCarouselItems";
import NavBar from "./components/NavBar/NavBar";
import ComparisonSection from "./components/Pages/ComparisonSection";
import ReviewCarousel from "./components/ReviewCarousel/ReviewCarousel";
import UpperCarouselItems from "./components/UpperCarousel/UpperCarouselItems";

function App() {
  return (
    <>
      <NavBar />
      <main>
        <BottomCarouselItems />
        <UpperCarouselItems />
        <ReviewCarousel/>
        <ComparisonSection/>
      </main>
    </>
  );
}

export default App;
