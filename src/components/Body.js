import RestaurantCard from "./Restaurantcard";
import { useState, useEffect } from "react";
import resList from "../utils/monkdata";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {

  //State Variable  - Super Powerfull Variable
  const [listofRestaurants, setlistofRestaurants] = useState([]);
  const [filteredrestaurant, setFilteredrestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");
  console.log("Body Rendered");

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    // const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng77.6244809999999&page_type=DESKTOP_WEB_LISTENING");

    const data = await fetch("https://corsproxy.io/?https://www.google-analytics.com/j/collect?v=1&_v=j101&a=987503097&t=pageview&_s=1&dl=https%3A%2F%2Fwww.swiggy.com%2Fcity%2Fbangalore&ul=en-us&de=UTF-8&dt=Order%20Food%20Online%20In%20Bangalore%20%7C%20Food%20Home%20Delivery%20%7C%20Swiggy&sd=24-bit&sr=1362x186&vp=1362x186&je=0&_u=QACAAEABAAAGACAAI~&jid=&gjid=&cid=148806710.1706569857&tid=UA-53591212-9&_gid=328318647.1707781381&_slc=1&gtm=45He4270n81WGCN3LHv77032815za200&cd1=unsupported&cd2=-&cd3=-&cd4=-&gcd=13l3l3l3l1&dma=0&z=509933014");

    const json = await data.json();

    console.log(json);

    // setlistofRestaurants(json.data.cards[2].data.data.cards);
    // setFilteredrestaurant(json.data.cards[2].data.data.cards);
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
        <div className="search">
          <input type="text" className="search-box" value={searchText} onChange={(e) => {
            setSearchText(e.target.value);
          }}/>
          <button 
            className="btn btn-primary" 
            onClick={ () =>{
              console.log(searchText);
            
              const filteredRestaurants = listofRestaurants.filter((res) => 
              res.data.name.toLowerCase().includes(searchText.toLowerCase()) 
              );

              setFilteredrestaurant(filteredRestaurants);
            }}
          
          >Search</button>
        </div>
        
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
          filteredrestaurant.map((restaurant) => (
            <RestaurantCard key={restaurant.data.id} resData={restaurant} />
          ))
        } */}

        {/* <link to={"/restaurants/" + items.cards.info.id} key={items.cards.info.id}><RestaurantCard key={items.cards.info.id} name="KFC" cuisines="Biryani, pizza" /></link> 
        This will work by fetching the live data */}


        <RestaurantCard name="KFC" cuisines="Biryani, pizza" city="lahore"/>
        <RestaurantCard name="KFC" cuisines="Biryani, pizza" />
        <RestaurantCard name="KFC" cuisines="Biryani, pizza" />
      </div>
    </div>
  );
};

export default Body;