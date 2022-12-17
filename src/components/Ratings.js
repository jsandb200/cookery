import ReactStars from "../../node_modules/react-rating-stars-component";
import React from "react";

 
const Ratings = () => {

  function ratingChanged(newRating) {
    console.log(newRating);
  }
  
  
  
  return(
    <div>
    <ReactStars
    count={5}
    onChange={ratingChanged}
    size={24}
    isHalf={true}
    emptyIcon={<i className="far fa-star"></i>}
    halfIcon={<i className="fa fa-star-half-alt"></i>}
    fullIcon={<i className="fa fa-star"></i>}
    activeColor="#ffd700"
  />

    </div>
  
 
 
);
};

export default Ratings;
 
