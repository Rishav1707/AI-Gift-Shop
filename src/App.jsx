import Header from "./components/Header";
import GiftCard from "./components/GiftCard";
import TrendingGifts from "./components/TrendingGifts";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import AIGiftIdeas from "./components/AIGiftIdeas";
import HomeVideo from "./components/HomeVideo";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <HomeVideo />
      <AIGiftIdeas />
      <GiftCard />
      <TrendingGifts />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default App;
