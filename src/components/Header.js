import { LOGO_URL } from "../utils/constant";

const Header = () => {
    return (
      <div className="header">
        <div className="logo-container">
          <img className="logo" src={LOGO_URL} />
        </div>
        <div className="nav-item">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Cart</a></li>
          </ul>
        </div>
      </div>
    );
  };

export default Header;