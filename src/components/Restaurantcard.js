import { CARD_URL } from "../utils/constant";
import resList from "../utils/monkdata";

const RestaurantCard = (props) => {
  // const resData = props;
  return (
    <div className="res-cards">
      <div className="card" style={{ width: "18rem" }}>
        <a href="#"> <img src={CARD_URL}
          className="card-img-top" alt="Image" /></a>
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">{props.cuisines}</p>
          <p className="card-text">{props.city}</p>
          <a href="#" className="btn btn-success">Order Now</a>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;