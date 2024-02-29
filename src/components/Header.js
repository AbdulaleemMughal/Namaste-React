import { LOGO_URL } from "../utils/constant";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {

  const [btnName, setBtnName] = useState("Login")

  // If no dependency array => useEffect is called on every render........
  // If dependency array is empty = [] => useeffect will beinitial render . It will render only one time.
  // If dependency array is [btnName] => useeffect will be called everytime [btnName] is updated.

  // useEffect(() => { 
  //   console.log("Use EffectHook Called");
  // }, [btnName]);

  const onlineStatus = useOnlineStatus();

  const { LoggedInUser } = useContext(UserContext);
  console.log({ LoggedInUser });


  // Subscribing to the store using the selector.
  const cartItems = useSelector((store) => store.cart.items)

  return (
    <div className="flex justify-between bg-pink-200 shadow-md">
      <div className="logo-container">
        <img className="w-56" src={LOGO_URL} />
      </div>
      <div className=" flex item">
        <ul className="flex p-4 m-4">
          <li className="p-3">
            Online Status: {onlineStatus ? "🟢" : "🔴"}
          </li>
          <li className="p-3">
            <Link to="/grocery">Grocery Store</Link>
          </li>
          <li className="p-3">
            <Link to="/">Home</Link>
          </li>
          <li className="p-3">
            <Link to="/about">About Us</Link>
          </li>
          <li className="p-3">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="p-3 font-bold text-xl">
            <Link to="/cart">
              Cart ({cartItems.length} items)</Link></li>
          <button className="mb-4" onClick={
            () => {
              btnName === "Login" ?
                setBtnName("Logout") :
                setBtnName("Login");
            }}>
            {btnName}
          </button>
          <li className="p-3 font-bold">
            {LoggedInUser}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;