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

        <div className="grid md:grid-cols-2 gap-8 p-6">

          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg">
            <img
              src={recipeDetail.image.startsWith("/") ? recipeDetail.image : `/${recipeDetail.image}`}
              alt={recipeDetail?.title}
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent p-4">
              <h2 className="text-white text-2xl font-bold">{recipeDetail?.title}</h2>
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-col justify-between gap-6">

            {/* Description */}
            <p className="text-gray-700 text-lg leading-relaxed">{recipeDetail?.summarys}</p>

            {/* Horizontal Cards */}
            <div className="flex justify-between gap-4 mt-4">

              {/* Food Score */}
              <div className="bg-orange-50 p-4 rounded-xl flex flex-col items-center justify-center shadow w-28">
                 <p className="text-gray-500 text-sm">Food Score</p>
                 <FaStar className="text-orange-500 text-2xl my-1" />
                <p className="font-semibold text-lg">{recipeDetail.foodScore}</p>

              </div>

              {/* Servings */}
              <div className="bg-orange-50 p-4 rounded-xl flex flex-col items-center justify-center shadow w-28">
                <p className="text-gray-500 text-sm">Servings</p>
                 <FaUsers className="text-orange-500 text-2xl my-1" />
                <p className="font-semibold text-lg">{recipeDetail.serving}</p>

              </div>

              {/* Ready In */}
              <div className="bg-orange-50 p-4 rounded-xl flex flex-col items-center justify-center shadow w-28">
                   <p className="text-gray-500 text-sm">Ready In</p>
                <FaClock className="text-orange-500 text-2xl my-1" />
                <p className="font-semibold text-lg">{recipeDetail.foodReady} mins</p>
               
             
              </div>
            </div>

            {/* Ingredients */}
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-2">Ingredients</h3>
              <ul className="list-disc list-inside text-gray-700">
                {recipeDetail.ingredients.map((ing, idx) => (
                  <li key={idx}>{ing}</li>
                ))}
              </ul>
            </div>

            {/* Cooking Instructions */}
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-2">Cooking Instructions</h3>
              <ol className="list-decimal list-inside text-gray-700 space-y-1">
                {recipeDetail.cookingInstructions.map((step, idx) => (
                  <li key={idx}>{step}</li>
                ))}
              </ol>
            </div>

            {/* Prep Info */}
            <div className="mt-6 flex flex-wrap gap-4">
              <div className="bg-gray-100 p-3 rounded-xl shadow">
                <p className="text-gray-600 text-sm">Prep Time: {recipeDetail.preparationTime}</p>
              </div>
              <div className="bg-gray-100 p-3 rounded-xl shadow">
                <p className="text-gray-600 text-sm">Refrigeration: {recipeDetail.refrigerationTime}</p>
              </div>
              <div className="bg-gray-100 p-3 rounded-xl shadow">
                <p className="text-gray-600 text-sm">Storage: {recipeDetail.storageSize}</p>
              </div>
            </div>

            {/* Nutrition */}
            <div className="mt-5">
              <h3 className="text-xl font-semibold mb-2">Nutrition Information</h3>
              <p className="text-gray-700">
                Calories: {recipeDetail.nutritionInformation.calories} | Protein: {recipeDetail.nutritionInformation.protein} | Carbs: {recipeDetail.nutritionInformation.carbohydrates} | Fat: {recipeDetail.nutritionInformation.fat}
              </p>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mt-6">
             
              <button 
              onClick={() => setMadeIt(true)}
             
             className={`flex-1 bg-green-500 text-white font-bold py-4 rounded-2xl shadow-lg hover:bg-green-600 transition-all text-lg ${madeIt ? 'bg-blue-500 hover:bg-blue-600' : ''}`}>
                {madeIt ? (
                   <div className="flex items-center justify-center gap-2">
       Congratulations!!!
      <span className="text-white text-xl">✔️</span>
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