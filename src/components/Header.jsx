import logo from "../assets/AI-logo.png";
import "./styles/Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="navlist">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#aichat">AIchat</a>
          </li>
          <li>
            <a href="#giftcard">GiftCard</a>
          </li>
          <li>
            <a href="#trendinggifts">TrendingGifts</a>
          </li>
          <li>
            <a href="#contact">Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
