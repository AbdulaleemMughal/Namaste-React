import { LOGO_URL } from "../utils/constant";
import { useState, useEffect } from "react";

const Header = () => {

  const [btnName, setBtnName] = useState("Login")

  // If no dependency array => useEffect is called on every render........
  // If dependency array is empty = [] => useeffect will beinitial render . It will render only one time.
  // If dependency array is [btnName] => useeffect will be called everytime [btnName] is updated.

  useEffect(() => { 
    console.log("Use EffectHook Called");
  }, [btnName]);

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
          <button className="login" onClick={() => {
            btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
          }}>{btnName}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;