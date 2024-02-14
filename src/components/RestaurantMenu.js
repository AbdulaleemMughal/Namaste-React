import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Params, useParams } from "react-router-dom";

const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);

    const {resId} = useParams();
    // We will use it in the fetched link

    useEffect(() => {
        fetchMenu();
    },[]);

    const fetchMenu = async () => {
        const data = await fetch("https://www.swiggy.com/restaurants/milano-ice-cream-trol-bank-hospital-jubilee-hills-hyderabad-636702");

        const json = await data.json();

        console.log(json);

        setResInfo(json.data);
    };

    const {name, cuisines, costForTwoMessage } = 
    resInfo?.cards[0]?.card?.card?.info;

    const {itemCards} = 
    resInfo?.card[2]?.groupedCard?.cardsGroupedMap?.REGULAR?.cards[1]?.card?.card;


    return (
        <div className="container">
            <div className="menu">
                {/* <h1>{name}</h1>  This will work by fetching the live data. */} 
                <h1>Hotel Empire</h1>
                <h2>Menu</h2>
                <ul>
                    {/* {itemCards.map((items) => (
                        <li key={items.cards.info.id}>  Key will be the id of each menufood. It would be compulsory.
                            {items.cards.info.name} - {" "}  {items.cards.info.price || items.card.info.defaultprice}
                        </li>
                    ))}   This will also work by fetching the live data*/}
                    <li>Biryani</li>
                    <li>Burger</li>
                    <li>Cold Drink</li>
                </ul>
            </div>
        </div>
    );
}

export default RestaurantMenu;