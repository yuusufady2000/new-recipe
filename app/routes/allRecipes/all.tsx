import { FaSearch, FaStar, FaUsers, FaClock, FaArrowLeft } from "react-icons/fa";
import { useEffect, useState, useMemo } from "react";
import { Link } from "react-router";
import type { RecipeItem } from "~/types";
import Pagination from "~/components/pagination";

const categories = ["All", "Breakfast", "Lunch", "Dinner", "Dessert"];

const AllRecipes = () => {
  const [allRecipes, setAllRecipes] = useState<RecipeItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const [activeCategory, setActiveCategory] = useState("All");

  const recipesPerPage = 12;
const categeries = ["All", "Breakfast", "Lunch", "Dinner", "Dessert"];
  const fetchAllRecipes = async () => {
    try {
      setLoading(true);
      const res = await fetch("https://recipe-7ekh.onrender.com/recipes");
      const data = await res.json();
      setAllRecipes(data);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllRecipes();
  }, []);

  const filteredRecipes = useMemo(() => {
    let filtered = allRecipes;

    if (activeCategory !== "All") {
      filtered = filtered.filter(
        (recipe) =>
          recipe.category?.toLowerCase() === activeCategory.toLowerCase()
      );
    }

    if (searchTerm) {
      filtered = filtered.filter((recipe) =>
        recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filtered;
  }, [allRecipes, searchTerm, activeCategory]);

 const totalPages = Math.ceil(filteredRecipes.length / recipesPerPage); const indexOfLastRecipe = page * recipesPerPage; const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage; const paginatedRecipes = filteredRecipes.slice(indexOfFirstRecipe, indexOfLastRecipe);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen text-lg font-semibold text-gray-500">
        Loading recipes...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col gap-6">

        <Link to="/" className="flex items-center gap-2 text-orange-600 font-medium hover:underline">
          <FaArrowLeft /> Back to Home
        </Link>

        <div className="flex items-center bg-white shadow-md rounded-xl px-4 py-3">
          <FaSearch className="text-gray-400" />
          <input
            type="text"
            placeholder="Search recipes..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setPage(1);
            }}
            className="w-full ml-3 outline-none"
          />
        </div>

        <div className="flex gap-3 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setPage(1);
              }}
              className={` px-3 py-1 rounded text-sm cursor-pointer ${activeCategory === cat ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-200'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {searchTerm && (
          <p className="text-gray-600">
            Results for <span className="font-semibold">"{searchTerm}"</span>
          </p>
        )}

        {filteredRecipes.length === 0 ? (
          <p className="text-center text-gray-500 mt-10">No recipes found.</p>
        ) : (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {paginatedRecipes.map((recipe) => (
                <Link
                  key={recipe.id}
                  to={`/recipeInf/${recipe.id}`}
                  className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden"
                >
                  <div className="h-48">
                    <img
                      src={recipe.image}
                      alt={recipe.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="p-4 flex flex-col gap-3">
                    <h2 className="text-lg font-semibold text-orange-600">
                      {recipe.title}
                    </h2>

                    <p className="text-gray-600 text-sm line-clamp-2">
                      {recipe.summarys}
                    </p>

                    <div className="flex justify-between text-gray-600 text-sm mt-2">
                      <div className="flex flex-col items-center">
                        <FaUsers className="text-orange-500" />
                        <span>{recipe.serving}</span>
                      </div>

                      <div className="flex flex-col items-center">
                        <FaClock className="text-orange-500" />
                        <span>{recipe.foodReady}m</span>
                      </div>

                      <div className="flex flex-col items-center">
                        <FaStar className="text-orange-500" />
                        <span>{recipe.foodScore}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {totalPages > 1 && (
              <Pagination
                currentPages={page}
                totalPages={totalPages}
                onChange={ setPage}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default AllRecipes;