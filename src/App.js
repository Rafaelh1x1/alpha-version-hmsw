import logo from "./logo.svg";
import "./App.css";
import TopBanner from "./topBanner";
import BestSellers from "./bestSellers";

function App() {
  return (
    <div>
      <TopBanner></TopBanner>
      <div className="bestSellers">
        <BestSellers></BestSellers>
      </div>
    </div>
  );
}

export default App;
