import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";


const ItemList = ({ item }) => {

    const dispatch = useDispatch();

    const handleAddItem = () =>{
        dispatch(action("pizza"));
    };

    return (
        <div>
                {item.map(item => (
                    <div key={item.card?.info?.id} className="p-2 m-2 border-b-2 border-black text-left">
                        <div className="py-2">
                            <span>{item.card.info.name}</span>
                            <span>{item.card.info.price ?
                                item.card.info.price / 100 :
                                item.card.info.defaultprice / 100}</span>
                        </div>

                        <p className="text-xs">{item.card.info.description}</p>
                        <button className="mx-16 p-2 rounded-lg bg-black text-white shadow-lg" 
                        onClick={handleAddItem}>
                            ADD+
                        </button>
                    </div>
                ))}
        </div>
    );
};

export default ItemList;