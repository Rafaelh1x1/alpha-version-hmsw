import logo from "./logo.svg";
import "./App.css";
import TopBanner from "./topBanner";
import BestSellers from "./bestSellers";
import CrabCakeSand from "./images/CrabCakeSand.jpg";
import FishNChips from "./images/FishNChips.jpg";
import FishNShrimp from "./images/FishNShrimp.jpg";
import HotTossChik from "./images/HotTossChik.jpg";

function App() {
  return (
    <div className="body">
      <TopBanner text="11508 N 56TH STREET, TEMPLE TERRACE, FL 33617 | 813-437-3474"></TopBanner>
      <BestSellers
        image1="CrabCakeSand"
        image1alt="Crab Cake Sandwich"
        image2="FishNChips"
        image2alt="Fish and Chips"
        image3="FishNShrimp"
        image3alt="Fish and Shrimp"
        image4="HotTossChik"
        image4alt="Hot Tossed Chicken with collard greens"
      ></BestSellers>
    </div>
  );
}

export default App;
