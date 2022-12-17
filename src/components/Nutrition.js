import React from "react";


const Nutrition = ({ item }) => {

function show() {
  if(document.getElementById("nutrition").classList.contains("hide")){
    document.getElementById("nutrition").classList.remove("hide");
    document.getElementById("nutrition").classList.add("show");
    document.getElementById("nutritionbutton").innerHTML = "----- Hide -----";
  }
  else {
    document.getElementById("nutrition").classList.remove("show");
    document.getElementById("nutrition").classList.add("hide");
    document.getElementById("nutritionbutton").innerHTML = "----- Show -----";
  }
}

  return (
    <div id="nutritioncontainer">
      <h3>Nutritional value for : {item.name}</h3>
    <div id="nutrition" className="hide">
      <ul style={{ listStyle: "none" }}>
        <li>Serving size:{item.serving_size_g} g</li>
        <li>Calories per serving :{item.calories}</li>
        <li>Sugar content per serving{item.sugar_g} g</li>
        <li>Total fat content per serving:{item.fat_total_g} g</li>
        <li>Saturated fat content per serving:{item.fat_saturated_g}g</li>
        <li>Protein content per serving:{item.protein_g}g</li>
        <li>Total carbohydrates per serving:{item.carbohydrates_total_g}g</li>
        <li>Fiber per serving: {item.fiber_g}g</li>
        <li>Sodium per serving:{item.sodium_mg}mg</li>
        <li>Potassium per serving:{item.potassium_mg}mg</li>
        <li>Cholesterol per serving:{item.cholesterol_mg}mg</li>
      </ul>
    </div>
    <button onClick={show} id="nutritionbutton">----- Show -----</button>
    </div>
  );
};
export default Nutrition;