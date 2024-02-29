import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {

    // const [showItems, setShowItems] = useState(false);

    const handleClick = () => {
        setShowIndex();
        //If the showitem is true then it will make it false and if it is false then it will make it true
    };

    return (
        // Accordian Start
        <div className="w-6/12 mx-auto bg-gray-200 shadow-md p-4">
            <div className="flex justify-between cursor-pointer"
                onClick={handleClick()}>
                <span className="font-bold">{data.title} ({data.itemcards.length})</span>
                <span>⬇️</span>
            </div>

            {showItems && <ItemList item={data.itemcards} />}
        </div>
    );
};

export default RestaurantCategory;