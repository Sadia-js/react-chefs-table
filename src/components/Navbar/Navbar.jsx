import { IoIosContact } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="flex flex-col gap-5 lg:gap-0 lg:flex-row justify-between items-center py-5">
        <div>
            <h1 className="text-2xl font-bold">Recipe Calories</h1>
        </div>
        <div className="space-x-5">
            <button className="btn">Home</button>
            <button>Recipes</button>
            <button>About</button>
            <button>Search</button>
        </div>
        <div className="flex items-center gap-2">
            <input className="bg-gray-50 rounded-full pl-6 py-2" type="search" placeholder="Search" />
            <span className="text-3xl bg-green-300 p-1 rounded-full"><IoIosContact /></span>
        </div>
    </div>
  );
};

export default Navbar;
