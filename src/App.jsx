import TrendingGifts from "./components/TrendingGifts";
import AIGiftIdeas from "./components/AIGiftIdeas";
import HomeVideo from "./components/HomeVideo";
import GiftCard from "./components/GiftCard";
import Header from "./components/Header";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <HomeVideo />
      <AIGiftIdeas />
      <GiftCard />
      <TrendingGifts />
    </div>
  );
};

export default App;
