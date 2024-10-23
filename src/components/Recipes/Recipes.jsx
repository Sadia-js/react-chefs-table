import { useEffect, useState } from "react";
import RecipeCard from "../RecipeCard/RecipeCard";

const Recipes = ({addRecipeToTable, isActive}) => {
    const [recipes, setRecipes] = useState([]);
    useEffect(()=>{
        fetch('./recipes.json')
        .then(res => res.json())
        .then(data => setRecipes(data))
    },[])
  return (
    <div className="md:w-2/3">
     <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
     {
        recipes.map((recipe, idx) => <RecipeCard 
        key={idx} 
        recipe={recipe}
        addRecipeToTable={addRecipeToTable}
        isActive={isActive}
        ></RecipeCard>)
     }
     </div>
    </div>
  );
};

export default Recipes;
