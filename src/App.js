import logo from "./logo.svg";
import "./App.css";
import TopBanner from "./topBanner";
import BestSellers from "./bestSellers";
import SubHeading from "./subHeading";
import CrabCakeSand from "./images/CrabCakeSand.jpg";
import FishNChips from "./images/FishNChips.jpg";
import FishNShrimp from "./images/FishNShrimp.jpg";
import HotTossChik from "./images/HotTossChik.jpg";

function App() {
  return (
    <div className="body">
      <TopBanner text="11508 N 56TH STREET, TEMPLE TERRACE, FL 33617 | 813-437-3474"></TopBanner>
      <SubHeading text="Best Sellers"></SubHeading>
      <div className="best-seller-section">
        <BestSellers
          imageSrc={CrabCakeSand}
          imageAlt="Crab Cake Sandwich"
          text="Crab Cake Sandwich with chips"
        ></BestSellers>
        <BestSellers
          imageSrc={FishNChips}
          imageAlt="Fish and Chips"
          text="Fish and Chips"
        ></BestSellers>
      </div>
    </div>
  );
}

export default App;
