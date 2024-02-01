import RestaurantCard from "./Restaurantcard";
import { useState, useEffect } from "react";
import resList from "../utils/monkdata";
import Shimmer from "./Shimmer";

const Body = () => {

  //State Variable  - Super Powerfull Variable
  const [listofRestaurants, setlistofRestaurants] = useState([resList]);

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    // const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng77.6244809999999&page_type=DESKTOP_WEB_LISTENING");

    const data = await fetch("https://www.swiggy.com/mapi/misc_new/location-features?lat=31.37090&lng=73.03360&features=CITY_INFO%2CINSTAMART");

    const json = await data.json();

    console.log(json);

    // setlistofRestaurants(json.data.cards[2].data.data.cards);
    // This can be done when we have the correct API, Since we donot have the correct Api therefore it will not work

    // Conditional Rendering
    // if(listofRestaurants === 0){
    //   return <Shimmer />;
    // }
  };
  // Instead of using if statement we can also use ternarary operator

  return listofRestaurants.length ===0 ? <Shimmer /> : (
    <div className="body">
      <div className="filter">
        <button className="filter-btn btn btn-primary" onClick={() => {
          //Filter Logic Here
          const FilteredList = listofRestaurants.filter(
            (res) => res.data.avgRating > 4
          );

          setlistofRestaurants(FilteredList);

        }}>Top Rated Restaurants</button>
      </div>
      <div className="res-container">
        {/* {
          listofRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.data.id} resData={restaurant} />
          ))
        } */}

        <RestaurantCard name="KFC" cuisines="Biryani, pizza" />
        <RestaurantCard name="KFC" cuisines="Biryani, pizza" />
        <RestaurantCard name="KFC" cuisines="Biryani, pizza" />
        <RestaurantCard name="KFC" cuisines="Biryani, pizza" />
      </div>
    </div>
  );
};

export default Body;