import logo from "./logo.svg";
import "./App.css";
import TopBanner from "./topBanner";
import BestSellers from "./bestSellers";
import SubHeading from "./SubHeading";
import ChooseLocation from "./chooseLocation";
import MenuItemTypes from "./menuItemTypes";
import CrabCakeSand from "./images/CrabCakeSand.jpg";
import FishNChips from "./images/FishNChips.jpg";
import FishNShrimp from "./images/FishNShrimp.jpg";
import HotTossChik from "./images/HotTossChik.jpg";

function App() {
  return (
    <body className="body">
      <TopBanner text="11508 N 56TH STREET, TEMPLE TERRACE, FL 33617 | 813-437-3474"></TopBanner>
      <SubHeading text="BEST SELLERS"></SubHeading>
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
        <BestSellers
          imageSrc={FishNShrimp}
          imageAlt="Fish and Shrimp"
          text="Fish and Shrimp"
        ></BestSellers>
        <BestSellers
          imageSrc={HotTossChik}
          imageAlt="Hot Tossed Chicken with Collard Greens"
          text="Hot Toss Chicken with Collard Greens"
        ></BestSellers>
      </div>
      <SubHeading text="MENU"></SubHeading>

      {/* CLick the location in order to change the menu depedning on the store location */}
      <div className="choose-location-container">
        <ChooseLocation text="Choose Location"></ChooseLocation>
      </div>

      {/* Click these and they will change the HTML being displaeyd */}
      <MenuItemTypes></MenuItemTypes>
    </body>
  );
}

export default App;
