import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";




// const resList = [
//   {
//     type: "restaurant",
//     data: {
//       type: "F",
//       name: "Meghana Food",
//       costForTwo: 50000,
//       cuisines: ["North Indian", "Biryani", "South Indian"],
//       deliveryTime: 29,
//       avgRating: 3.2,
//       id: "354679797893"
//     }
//   },
//   {
//     type: "restaurant",
//     data: {
//       type: "F",
//       name: "Kannur Food Kitchen",
//       costForTwo: 40000,
//       cuisines: ["Karela", "Biryani", "Beverage"],
//       deliveryTime: 30,
//       avgRating: 3.8,
//       id: "3546796754433"
//     }
//   },
//   {
//     type: "restaurant",
//     data: {
//       type: "F",
//       name: "Roti Wala",
//       costForTwo: 40000,
//       cuisines: ["Rooti", "Home Food", "South Food"],
//       deliveryTime: 30,
//       avgRating: 3.7,
//       id: "35462133"
//     }
//   },
//   {
//     type: "restaurant",
//     data: {
//       type: "F",
//       name: "KFC",
//       costForTwo: 60000,
//       cuisines: ["Burger", "Pizza", "Pasta"],
//       deliveryTime: 34,
//       avgRating: 3.6,
//       id: "3546798793"
//     }
//   },
//   {
//     type: "restaurant",
//     data: {
//       type: "F",
//       name: "Call Me Chow",
//       costForTwo: 28000,
//       cuisines: ["Chinese Rice", "Chinese Food", "Pam-Asian"],
//       deliveryTime: 40,
//       avgRating: 4.5,
//       id: "354675673"
//     }
//   }
// ];




//Main LAyout of the app
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />)