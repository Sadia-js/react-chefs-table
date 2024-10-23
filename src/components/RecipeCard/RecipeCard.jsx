import { MdAccessTime } from "react-icons/md";
import { FaFire } from "react-icons/fa";


const RecipeCard = ({ recipe, addRecipeToTable, isActive }) => {
//   console.log(recipe);
  const { recipeImage, recipeName, shortDescription, ingredients, preparingTime, calories } = recipe;
  return (
    <div>
      <div className="card h-full border-2 p-4">
        <figure className="rounded-lg mb-4">
          <img className="h-48 w-full object-cover" src={recipeImage} alt="" />
        </figure>
        <div>
          <h2 className="card-title">{recipeName}</h2>
          <p>{shortDescription}</p>
          <div className="divider"></div>
          <h2 className="text-lg font-semibold">Ingredients : {ingredients.length}</h2>
          <ul className="ml-8">
            {ingredients.map((ingredient, idx) => (
              <li className="text-gray-500 list-disc" key={idx}>{ingredient}</li>
            ))}
          </ul>
          <div className="divider"></div>
          <div className="flex items-center justify-between">
            <p className="flex items-center gap-1">
                <span className="text-xl"><MdAccessTime /></span>
                <span>{preparingTime}</span>
            </p>
            <p className="flex items-center gap-1">
                <span className="text-xl"><FaFire /></span>
                <span>{calories}</span>
            </p>
          </div>
        </div>
        <div className="card-actions mt-4">
            <button onClick={()=>addRecipeToTable(recipe, true)} className={`btn rounded-3xl px-6 ${isActive && 'bg-green-400'}`}>Want to cook</button>
            {/* <button onClick={()=>addRecipeToTable(recipe, true)} className="btn rounded-3xl px-6 bg-green-400">Want to cook</button> */}
          </div>
      </div>
    </div>
  );
};

export default RecipeCard;
