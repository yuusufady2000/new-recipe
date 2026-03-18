import { useState, useEffect } from "react";
import {  Link, useParams } from "react-router";
import { FaArrowLeft, FaClock, FaStar, FaUsers } from "react-icons/fa";
import type { RecipeItem } from "~/types";
import RelatedRecipes from "~/components/relatedRecipes";

const RecipeDetailPage = () => {
  const { id } = useParams();
  const [recipeDetail, setRecipeDetail] = useState<RecipeItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [madeIt, setMadeIt] = useState(false);
  const [relatedRecipes, setRelatedRecipes] = useState<RecipeItem[]>([]);

  const fetchRecipeDetail = async () => {
    try {
      setLoading(true);
      const res = await fetch(`https://recipe-7ekh.onrender.com/recipes/${id}`);
      const data = (await res.json()) as RecipeItem;
      setRecipeDetail(data);
    } catch {
      setRecipeDetail(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) fetchRecipeDetail();
  }, [id]);

 


 const fetchRelatedRecipes = async (category: string) => {
    try {
      const res = await fetch(`https://recipe-7ekh.onrender.com/recipes?category=${category}`);
      const data = (await res.json()) as RecipeItem[];
      setRelatedRecipes(data);
    } catch {
      setRelatedRecipes([]);
      
    }
  };
 
  useEffect(() => {
    if (recipeDetail?.category) {
      fetchRelatedRecipes(recipeDetail.category);
    }
  }, [recipeDetail?.category]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen text-lg font-semibold text-gray-500">
        Loading recipe...
      </div>
    );
  }

  if (!recipeDetail) {
    return (
      <div className="flex items-center justify-center h-screen text-lg font-semibold text-gray-500">
        Recipe not found.
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gradient-to-b from-orange-50 to-white py-12 px-6">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">

        {/* Back Link */}
        <div className="p-6">
          <Link
            to="/"
            className="text-orange-600 font-semibold hover:underline flex items-center gap-2"
          >
            <FaArrowLeft />
            Back to Home
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 p-4 md:p-6">
  {/* Image */}
  <div className="relative rounded-2xl overflow-hidden shadow-lg">
    <img
      src={recipeDetail.image.startsWith("/") ? recipeDetail.image : `/${recipeDetail.image}`}
      alt={recipeDetail.title}
      className="w-full h-64 sm:h-80 md:h-[400px] object-cover"
    />
    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent p-3 md:p-4">
      <h2 className="text-white text-xl sm:text-2xl font-bold">{recipeDetail.title}</h2>
    </div>
  </div>

  {/* Details */}
  <div className="flex flex-col justify-between gap-4 md:gap-6">
    {/* Description */}
    <p className="text-gray-700 text-base sm:text-lg leading-relaxed">{recipeDetail.summarys}</p>

    {/* Horizontal Cards */}
    <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-4 mt-3">
      <div className="bg-orange-50 p-3 sm:p-4 rounded-xl flex flex-col items-center justify-center shadow w-full sm:w-28">
        <p className="text-gray-500 text-sm">Food Score</p>
        <FaStar className="text-orange-500 text-2xl my-1" />
        <p className="font-semibold text-lg">{recipeDetail.foodScore}</p>
      </div>

      <div className="bg-orange-50 p-3 sm:p-4 rounded-xl flex flex-col items-center justify-center shadow w-full sm:w-28">
        <p className="text-gray-500 text-sm">Servings</p>
        <FaUsers className="text-orange-500 text-2xl my-1" />
        <p className="font-semibold text-lg">{recipeDetail.serving}</p>
      </div>

      <div className="bg-orange-50 p-3 sm:p-4 rounded-xl flex flex-col items-center justify-center shadow w-full sm:w-28">
        <p className="text-gray-500 text-sm">Ready In</p>
        <FaClock className="text-orange-500 text-2xl my-1" />
        <p className="font-semibold text-lg">{recipeDetail.foodReady} mins</p>
      </div>
    </div>

    {/* Ingredients */}
    <div className="mt-4">
      <h3 className="text-lg sm:text-xl font-semibold mb-2">Ingredients</h3>
      <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base">
        {recipeDetail.ingredients.map((ing, idx) => (
          <li key={idx}>{ing}</li>
        ))}
      </ul>
    </div>

    {/* Cooking Instructions */}
    <div className="mt-4">
      <h3 className="text-lg sm:text-xl font-semibold mb-2">Cooking Instructions</h3>
      <ol className="list-decimal list-inside text-gray-700 space-y-1 text-sm sm:text-base">
        {recipeDetail.cookingInstructions.map((step, idx) => (
          <li key={idx}>{step}</li>
        ))}
      </ol>
    </div>

    {/* Prep Info */}
    <div className="mt-4 flex flex-wrap gap-2 sm:gap-4">
      <div className="bg-gray-100 p-2 sm:p-3 rounded-xl shadow text-sm sm:text-base">
        Prep Time: {recipeDetail.preparationTime}
      </div>
      <div className="bg-gray-100 p-2 sm:p-3 rounded-xl shadow text-sm sm:text-base">
        Refrigeration: {recipeDetail.refrigerationTime}
      </div>
      <div className="bg-gray-100 p-2 sm:p-3 rounded-xl shadow text-sm sm:text-base">
        Storage: {recipeDetail.storageSize}
      </div>
    </div>

    {/* Nutrition */}
    <div className="mt-4 text-sm sm:text-base">
      <h3 className="text-lg sm:text-xl font-semibold mb-2">Nutrition Information</h3>
      <p className="text-gray-700">
        Calories: {recipeDetail.nutritionInformation.calories} | Protein: {recipeDetail.nutritionInformation.protein} | Carbs: {recipeDetail.nutritionInformation.carbohydrates} | Fat: {recipeDetail.nutritionInformation.fat}
      </p>
    </div>

    {/* Button */}
    <div className="mt-4">
      <button
        onClick={() => setMadeIt(true)}
        className={`w-full bg-green-500 text-white font-bold py-3 sm:py-4 rounded-2xl shadow-lg hover:bg-green-600 transition-all text-base sm:text-lg ${madeIt ? 'bg-blue-500 hover:bg-blue-600' : ''}`}
      >
        {madeIt ? (
          <div className="flex items-center justify-center gap-2">
            Congratulations!!! <span className="text-white text-xl">✔️</span>
          </div>
        ) : (
          "I Made It"
        )}
      </button>
    </div>
  </div>
</div>
      </div>

       <RelatedRecipes 
       category={relatedRecipes}
       count={3}
       />
    </section>

  
  );
};

export default RecipeDetailPage;