import React from "react";

const RadioButtons = (filts) => {

    function handleVeggieChange(e) {
        filts.onVeggieChange(e.target.checked);
      }
      function handleVeganChange(e) {
        filts.onVeganChange(e.target.checked);
      }
      function handleGluFChange(e) {
        filts.onGluFChange(e.target.checked);
      }
      function handleLowFChange(e) {
        filts.onLowFChange(e.target.checked);
      }


      return (
        <form>
            <p><input
            type="checkbox"
            checked={filts.veggie}
            onChange={handleVeggieChange}
            />{" "}
            Only show Vegetarian options</p>
            <p><input
            type="checkbox"
            checked={filts.vegan}
            onChange={handleVeganChange}
            />{" "}
            Only show Vegan options</p>
            <p><input
            type="checkbox"
            checked={filts.gluF}
            onChange={handleGluFChange}
            />{" "}
            Only show Gluten Free options</p>
            <p><input
            type="checkbox"
            checked={filts.lowF}
            onChange={handleLowFChange}
            />{" "}
            Only show Low Fat options</p>
            
            
            
            

        </form>
        

      );



};

export default RadioButtons;