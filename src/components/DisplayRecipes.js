import React from 'react';
import Recipes from "./Recipes";



    


const DisplayRecipes = ({items}) => {

    

    var i=0;

    if(items.length > 0){
   return (
       <div>
        
           {  items.map((r) => {
                i=i+1;
               return (
                
                <div key={r.id} id={"recipe"+i}> <Recipes recipe={r} /></div>

               )
               
           })}

       </div>
   );}
   else{
    return (
        <div id='voidinput'>Please enter a valid keyword.</div>
    )
  }
}




export default DisplayRecipes;