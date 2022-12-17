import React, { useState } from "react";
import RadioButtons from "./RadioButtons";
import { handleClick } from "./Search";

const SideTab = () => {

    
function showsidetab() {
    if(document.getElementById("sidetab").classList.contains("slideleft")) {
        document.getElementById("sidetab").classList.remove("slideleft");
        document.getElementById("sidetab").classList.add("slideright");
    }
    else {
      document.getElementById("sidetab").classList.remove("slideright");
      document.getElementById("sidetab").classList.add("slideleft");
    }

    

}

    const [veggie, setVeggie] = useState(false);
    const [vegan, setVegan] = useState(false);
    const [gluF, setGluF] = useState(false);
    const [lowF, setLowF] = useState(false);

    function handleDisplayVeggie() {
        veggie ? setVeggie(false) : setVeggie(true);
        if(veggie === false){
            let vegg = "Vegetarian";
           document.getElementById("searchinput").innerHTML = vegg;
           
          

// want to call handleClick() function from Search.js here
// or at least set "query" as "vegg"

          
        }
        
      }
      function handleDisplayVegan() {
        vegan ? setVegan(false) : setVegan(true);
      }
      function handleDisplayGluF() {
        gluF ? setGluF(false) : setGluF(true);
      }
      function handleDisplayLowF() {
        lowF ? setLowF(false) : setLowF(true);
      }
  
    return (
      
      <div id="sides">
        <div id="sidetab" className="slideleft">
          <div id="filters">
            Filter settings:
            <div>
                <RadioButtons 
                    veggie={veggie}
                    vegan={vegan}
                    gluF={gluF}
                    lowF={lowF}
                    onVeggieChange={handleDisplayVeggie}
                    onVeganChange={handleDisplayVegan}
                    onGluFChange={handleDisplayGluF}
                    onLowFChange={handleDisplayLowF}
                    />
            </div>
          </div>
          <div id="wishlist">
            Wishlist:
             <div id="wishes">
              
             </div>
          </div>



        </div>
        <div id="showsidetab" onClick={showsidetab}>&equiv;</div>


      </div>
      

    );

    

  };
  export default SideTab;