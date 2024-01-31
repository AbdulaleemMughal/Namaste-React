import RestaurantCard from "./Restaurantcard";

const Body = () => {
    return (
      <div className="body">
        <div className="search">Search</div>
        <div className="res-container">
          <RestaurantCard name="Al-Makkah Foods" cuisines= "Biryani, pizza, cold drink"/>
          <RestaurantCard name="Al-Makkah Foods" cuisines= "Biryani, pizza, cold drink"/>
          <RestaurantCard name="Al-Makkah Foods" cuisines= "Biryani, pizza, cold drink"/>
          <RestaurantCard name="Al-Makkah Foods" cuisines= "Biryani, pizza, cold drink"/>
          <RestaurantCard name="Al-Makkah Foods" cuisines= "Biryani, pizza, cold drink"/>
          <RestaurantCard name="Al-Makkah Foods" cuisines= "Biryani, pizza, cold drink"/>
          <RestaurantCard name="Al-Makkah Foods" cuisines= "Biryani, pizza, cold drink"/>
          <RestaurantCard name="Al-Makkah Foods" cuisines= "Biryani, pizza, cold drink"/>
        </div>
      </div>
    );
  };

export default Body;