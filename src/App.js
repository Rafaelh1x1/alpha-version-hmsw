import "./App.css";
import TopBanner from "./topBanner";
import BestSellers from "./bestSellers";
import SubHeading from "./SubHeading";
import ChooseLocation from "./chooseLocation";
import MenuItemTypes from "./menuItemTypes";
import ContentText from "./content";
import StickyBar from "./stickyBar";
import CrabCakeSand from "./images/CrabCakeSand.jpg";
import FishNChips from "./images/FishNChips.jpg";
import FishNShrimp from "./images/FishNShrimp.jpg";
import HotTossChik from "./images/HotTossChik.jpg";

function App() {
  return (
    <body className="body">
      <TopBanner text="11508 N 56TH STREET, TEMPLE TERRACE, FL 33617 |    813-437-3474"></TopBanner>
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
      <SubHeading text="HOURS & LOCATIONS"></SubHeading>
      <div>
        <ContentText
          text="11508 N 56th Street,
Temple Terrace, FL 33617"
        ></ContentText>
        <ContentText text="813-437-3474"></ContentText>
        <ContentText text="info@halfmoonseafood.com"></ContentText>
        <ContentText text="GET DIRECTIONS"></ContentText>
        <ContentText text="Tuesday - Saturday - 11 am - 9 pm"></ContentText>
        <ContentText text="Tuesday - Saturday - 11 am - 9 pm"></ContentText>
      </div>
      <SubHeading text="WHO ARE WE?"></SubHeading>
      <div>
        <ContentText text="When faced to raise prices or decrease quality, Half Moon Seafood Co. was born to challenge the seafood status quo. Founded in 2020, the Half Moon team is committed to providing our guests with quality seafood in an affordable, fast-casual format. "></ContentText>
        <ContentText text="We take pride in our relationships with our suppliers to ensure we only serve seafood from transparent and sustainable sources. The Half Moon team is committed to providing a thoughtfully sourced meal, always made-to-order for you. Our goal is simple, to serve quality (and delicious) fish sandwiches, made with as few ingredients as possible. "></ContentText>
        <ContentText
          text="When it comes to great food, we don’t think you should have to choose between fast and healthy. Half Moon Seafood Co. found a home in Tampa Bay, and we could not be more excited to join the community.

Half Moon...full belly. "
        ></ContentText>{" "}
      </div>
      <SubHeading text="WORK WITH US"></SubHeading>
      <div>
        <ContentText text="We’d love to have you join our team! Please use the form below to apply. Feel free to send in your resume even if you don't see the position you're looking for listed."></ContentText>
        <ContentText text="APPLY NOW"></ContentText>
      </div>
      <SubHeading text="CONTACT US"></SubHeading>
      <ContentText text="Send us a message and we’ll get back to you as soon as possible. Looking forward to hearing from you."></ContentText>
      <ContentText text="Name"></ContentText>
      <ContentText text="Email"></ContentText>
      <ContentText text="Phone Number"></ContentText>
      <ContentText text="Reason for reaching out?"></ContentText>
      <ContentText text="SEND"></ContentText>
      <StickyBar></StickyBar>
    </body>
  );
}

export default App;
