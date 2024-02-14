import { LOGO_URL } from "../utils/constant";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {

  const [btnName, setBtnName] = useState("Login")

  // If no dependency array => useEffect is called on every render........
  // If dependency array is empty = [] => useeffect will beinitial render . It will render only one time.
  // If dependency array is [btnName] => useeffect will be called everytime [btnName] is updated.

  // useEffect(() => { 
  //   console.log("Use EffectHook Called");
  // }, [btnName]);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-item">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li>Cart</li>
          <button className="login" onClick={() => {
            btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
          }}>{btnName}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;