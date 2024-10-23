const Sidebar = ({ recipeTable, handleRemoveRecipes, prepareRecipe }) => {
  // console.log(recipeTable);
  // console.log(prepareRecipe);

  return (
    <div className="md:w-1/3">
      <div className="border-2 rounded-lg ml-4">
        <div>
          {/* Want to cook table */}
          <h1 className="text-center text-xl font-bold m-4 pb-4 border-b-2">
            Want to cook : {recipeTable.length}
          </h1>

          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Time</th>
                  <th>Calories</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {recipeTable.map((selected, idx) => (
                  <tr key={idx} className="hover">
                    <th>{idx + 1}</th>
                    <td>{selected.recipeName}</td>
                    <td>{selected.preparingTime}</td>
                    <td>{selected.calories}</td>
                    <td>
                      <button
                        onClick={() => handleRemoveRecipes(selected.recipeId)}
                        className="btn btn-sm bg-green-400 rounded-3xl"
                      >
                        Preparing
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div>
          {/* Currently cooking */}
          <h1 className="text-center text-xl font-bold m-4 pb-4 border-b-2">
            Currently Cook : {prepareRecipe.length}
          </h1>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Time</th>
                  <th>Calories</th>
                </tr>
              </thead>
              <tbody>
                {prepareRecipe.map((recipe, idx) => (
                  <tr key={idx}>
                    <th>{idx + 1}</th>
                    <td>{recipe.recipeName}</td>
                    <td>{recipe.preparingTime}</td>
                    <td>{recipe.calories}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
