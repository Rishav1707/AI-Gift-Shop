import Header from "./components/Header";
import Footer from "./components/Footer";
import GiftCard from "./components/GiftCard";
import TrendingGifts from "./components/TrendingGifts";
import ContactForm from "./components/ContactForm";
import AIchat from "./components/AIchat";
import HomeVideo from "./components/HomeVideo";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <HomeVideo />
      <AIchat />
      <GiftCard />
      <TrendingGifts />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default App;
