import { useState } from "react";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import OurRecipes from "./components/OurRecipes/OurRecipes";
import Recipes from "./components/Recipes/Recipes";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  const [recipeTable, setRecipeTable] = useState([]);
  const [prepareRecipe, setPrepareRecipe] = useState([]);
  const [isActive, setIsActive] = useState(false);

  const addRecipeToTable = (recipe, active) => {
    // console.log(recipe);
    const isExist = recipeTable.find(previousRecipe => previousRecipe.recipeId === recipe.recipeId);
    if(!isExist){
      const remainingTable = [...recipeTable, recipe]; 
      setRecipeTable(remainingTable);
      setIsActive(active);
    }
    else{
      alert('Recipe already exists in the table');
      setIsActive(false);
    }
  }

  const handleRemoveRecipes = id => {
    const deletedRecipe = recipeTable.find(recipe => recipe.recipeId === id);
    const remainingRecipe = recipeTable.filter(recipe => recipe.recipeId !== id);
    setRecipeTable(remainingRecipe);
    setPrepareRecipe([...prepareRecipe, deletedRecipe]);
    // console.log(deletedRecipe)
  }
  return (
    <>
      <div className="w-11/12 mx-auto">
        <Navbar></Navbar>
        <Hero></Hero>
        <OurRecipes></OurRecipes>
        <section className="flex flex-col lg:flex-row my-10">
          <Recipes addRecipeToTable={addRecipeToTable} isActive={isActive}></Recipes>
          <Sidebar recipeTable={recipeTable} handleRemoveRecipes={handleRemoveRecipes} prepareRecipe={prepareRecipe}></Sidebar>
        </section>
      </div>
    </>
  );
}

export default App;
