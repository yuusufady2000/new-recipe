import { useEffect, useState } from "react";
import FoodLimit from "~/components/foodLimit";
import type { RecipeItem } from "~/types";




const Dinner = () => {

const [dinner, setDinner] = useState<RecipeItem[]>([]);

const fetchDinner = async () => {
  try {
    const res = await fetch("https://recipe-7ekh.onrender.com/recipes/?category=Dinner");
    const data = await res.json();
    setDinner(data);
  } catch (error) {
   
   setDinner([]);
  }
  
}

useEffect(() => {
  fetchDinner();
}, []);

  return (
    <div>
       <h2 className="mb-4 mt-4 ml-5 text-2xl font-bold">
        Dinner Meals
        </h2>
 <FoodLimit
      food={dinner}
      count={12}
    />
    </div>
   
  );
};
 
export default Dinner;
