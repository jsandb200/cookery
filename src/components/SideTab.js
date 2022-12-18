import React, { useState } from "react";
import RadioButtons from "./RadioButtons";
import { VscThreeBars } from "react-icons/vsc";


const SideTab = ({setMessage}) => {

    
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
          setGluF(false);
          setVegan(false);
          setLowF(false);


          let vegg = "Vegetarian";
          setMessage(vegg);
        }
        else {
          setMessage("");
        }
        
      }
      function handleDisplayVegan() {
        vegan ? setVegan(false) : setVegan(true);
        if(vegan === false){
          setGluF(false);
          setVeggie(false);
          setLowF(false);
          let veg = "Vegan";
          setMessage(veg);
        }
        else {
          setMessage("");
        }
        
      }
      function handleDisplayGluF() {
        gluF ? setGluF(false) : setGluF(true);
        if(gluF === false){
          setVeggie(false);
          setVegan(false);
          setLowF(false);
          let gluf = "gluten free";
          setMessage(gluf);
        }
        else {
          setMessage("");
        }
        
      }
      function handleDisplayLowF() {
        lowF ? setLowF(false) : setLowF(true);
        if(lowF === false){
          setGluF(false);
          setVegan(false);
          setVeggie(false);
          let lowf = "low fat";
          setMessage(lowf);
        }
        else {
          setMessage("");
        }
        
      }
  
    return (
      
      <div id="sides">
        <div id="sidetab" className="slideleft">
          <div id="filters">
            <h2>Filter settings:</h2>
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
           <h2>Wishlist:</h2> 
             <div id="wishes">
              
             </div>
          </div>



        </div>
        <div id="showsidetab" onClick={showsidetab}><VscThreeBars/></div>


      </div>
      

    );

    

  };
  export default SideTab;