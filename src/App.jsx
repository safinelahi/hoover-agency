import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import BottomCarouselItems from "./components/BottomCarousel/BottomCarouselItems";
import UpperCarouselItems from "./components/UpperCarousel/UpperCarouselItems"; 
import ReviewCarousel from "./components/ReviewCarousel/ReviewCarousel";

function App() {
  return (
    <>
      <NavBar />
      <main>
        <BottomCarouselItems />
        <UpperCarouselItems />
        <ReviewCarousel/>
      </main>
    </>
  );
}

export default App;
