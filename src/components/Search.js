import React, { useState } from "react";
import FetchNutrition from "./FetchNutrition";
import FetchRecipes from "./FetchRecipes";


function Search() {
  const [searchString, setSearchString] = useState("");
  const [searchField, setSearchField] = useState("");
  const [isShown, setIsShown] = useState(false);
 
 function handleClick() {

// function I want to call in SideTab.js

    setSearchField(searchString);
    setIsShown(true);

    }


    

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
        <button onClick={handleClick}>Search</button>
      </div>





      
      {isShown && <FetchNutrition query={searchField}/>}
      {isShown && <FetchRecipes query={searchField}/>}

    </div>
  );
}

export default Search;
