import { useEffect, useState } from "react";

import { Link } from "react-router";
import FoodLimit from "~/components/foodLimit";

import type { RecipeItem } from "~/types";



const BreakFast = () => {
  const [showBreakFast, setShowBreakFast] = useState<RecipeItem[]>([]);

  const fetchBreakFast = async () => {
    try {
      const res = await fetch(
        "https://recipe-7ekh.onrender.com/recipes?category=Breakfast"
      );
      const data = await res.json();
      console.log(data);
      setShowBreakFast(data);
    } catch (error) {
      setShowBreakFast([]);

    }
  };

  useEffect(() => {
    fetchBreakFast();
  }, []);

  return (
    <div>
      <h2 className="mb-1 mt-5 ml-5 text-2xl font-bold">
        Breakfast Meals
        </h2>
       <FoodLimit 
   food={showBreakFast} 
   count={12}/>
    </div>
  
  );
};

export default BreakFast;
