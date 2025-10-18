import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import BottomCarouselItems from "./components/BottomCarousel/BottomCarouselItems";
import UpperCarouselItems from "./components/UpperCarousel/UpperCarouselItems"; // ✅ use this instead of UpperCarousel

function App() {
  return (
    <>
      <NavBar />
      <main>
        <BottomCarouselItems />
        <UpperCarouselItems /> 
      </main>
    </>
  );
}

export default App;
