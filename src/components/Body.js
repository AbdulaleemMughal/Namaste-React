import RestaurantCard from "./Restaurantcard";
import { useState } from "react";

const Body = () => {

  //State Variable  - Super Powerfull Variable
  const [listofRestaurants, setlistofRestaurants] = useState([]);

  return (
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
        {
          listofRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.data.id} resData={restaurant} />
          ))
        }
      </div>
    </div>
  );
};

export default Body;