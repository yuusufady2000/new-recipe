import { FaUtensils } from "react-icons/fa";
import { IoAdd } from "react-icons/io5";
import { Link } from "react-router";



const Header = () => {
  return (
    <header className="sticky top-0 z-[1000] bg-green-700 shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <h2 className="flex items-center gap-2 text-2xl font-bold text-white">
          <FaUtensils className="text-yellow-400" />
          Tasty<span className="text-orange-400">Bites</span>
        </h2>

        <div className="flex items-center gap-6">
          <Link
            to="/allRecipes"
            className="text-lg font-medium text-white transition hover:text-yellow-300"
          >
           
          </Link>

          
        </div>
      </div>
    </header>
  );
};

export default Header;
