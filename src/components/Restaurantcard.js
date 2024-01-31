const RestaurantCard = (props) => {
    return (
      <div className="res-cards">
        <div className="card" style={{ width: "18rem" }}>
          <a href="#"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgJH9dRmWfTfuWkaw6qKwIT_DE-rcY161JwQbQfLmyuQ&s" className="card-img-top" alt="Image" /></a>
          <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">{props.cuisines}</p>
            <a href="#" className="btn btn-primary">Order Now</a>
          </div>
        </div>
      </div>
    );
  };

export default RestaurantCard;