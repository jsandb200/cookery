import React, { useState, useEffect } from "react";
import FetchNutrition from "./FetchNutrition";
import FetchRecipes from "./FetchRecipes";
import { ImSearch } from "react-icons/im";

function Search({selectedMessage}) {
  const [searchString, setSearchString] = useState("");
  const [searchField, setSearchField] = useState("");
  const [isShown, setIsShown] = useState(false);
 
 function handleClick() {


    setSearchField(searchString);
    setIsShown(true);

    }

    
      
    

      
    useEffect(() => {
      setSearchField(selectedMessage);
      setIsShown(true);

    }, [selectedMessage]);
    

    

  return (
    <div id="searchdiv">
      <div id="searchbar">
        
        <input
          id="searchinput"
          className="form-control"
          type="text"
          placeholder="Search ..."
          onChange={(e) => setSearchString(e.target.value)}
        />
        <button onClick={handleClick} id="searchbutton"><ImSearch/></button>
      </div>





      
      {isShown && <FetchNutrition query={searchField}/>}
      {isShown && <FetchRecipes query={searchField}/>}

    </div>
  );
}

export default Search;
