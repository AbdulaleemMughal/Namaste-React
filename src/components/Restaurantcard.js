import { CARD_URL } from "../utils/constant";

const RestaurantCard = (props) => {
  // const resData = props;

  // const {
  //   cloudnaryimageID,
  //   name,
  //   avgRating,
  //   cuusines,
  //   costForTwo,
  //   sla,
  // } = resData?.info;

  return (
    <div className="res-cards flex">
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

// Higher Order Component:
// input => restaurantCard and returing restaurantCard with promoted lable on it.

export const withPromotedLable = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;