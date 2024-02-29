// import { useState, useEffect } from "react";
// import Shimmer from "./Shimmer";
import { Params, useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {

    const [showIndex, setShowIndex] = useState(0);

    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId);
    const {name, cuisines, costForTwoMessage } = 
    resInfo?.cards[0]?.card?.card?.info;

    const {itemCards} = 
    resInfo?.card[2]?.groupedCard?.cardsGroupedMap?.REGULAR?.cards[1]?.card?.card;

    const categories = resInfo?.card[2]?.groupedCard?.cardsGroupedMap?.REGULAR?.cards[1]?.card?.card.filter(
        (c) =>
        c.card?.["card"]?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.Category"
        );


    return (
        <div className="container">
            <div className="text-center">
                {/* <h1>{name}</h1>  This will work by fetching the live data. */} 
                <h1 className="font-bold my-10 text-2xl">Hotel Empire</h1>
                <h2>Menu</h2>
                <ul>
                    {/* {itemCards.map((items) => (
                        <li key={items.cards.info.id}> // Key will be the id of each menufood. It would be compulsory.
                            {items.cards.info.name} - {" "}  {items.cards.info.price || items.card.info.defaultprice}
                        </li>
                    ))}   This will also work by fetching the live data*/}

                    {categories.map((category, index) => 
                        <RestaurantCategory 
                        key={categories?.card?.card?.title} 
                        data={categories?.card?.card}
                        showItems={index === showIndex ? true : false}
                        setShowIndex = {() => setShowIndex(index)}
                        />
                    )};


                </ul>
            </div>
        </div>
    );
}

export default RestaurantMenu;