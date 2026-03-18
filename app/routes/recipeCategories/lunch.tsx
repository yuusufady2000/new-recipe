import { useEffect, useState } from "react";
import FoodLimit from "~/components/foodLimit";
import type { RecipeItem } from "~/types";



const Lunch = () => {

  const [lunchRecipes, setLunchRecipes] = useState<RecipeItem[]>([]);

const fetchLunch = async () => {
  try {
    const res = await fetch("https://recipe-7ekh.onrender.com/recipes/?category=Lunch");
    const data = await res.json();
    setLunchRecipes(data);
  } catch (error) {
   
   setLunchRecipes([]);
  }
  
}

useEffect(() => {
  fetchLunch();
}, []);

  return (
    <div>
        <h2 className="mb-4 mt-4 ml-5 text-2xl font-bold">
        Lunch Meals
        </h2>
      <FoodLimit
      food={lunchRecipes}
      count={12}
    />
    </div>
    
  );
};
 
export default Lunch;
