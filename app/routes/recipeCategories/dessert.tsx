import { useEffect, useState } from "react";
import FoodLimit from "~/components/foodLimit";
import type { RecipeItem } from "~/types";



const Dessert = () => {

const [dessert, setDessert] = useState<RecipeItem[]>([]);

const fetchDessert = async () => {
  try {
    const res = await fetch("https://recipe-7ekh.onrender.com/recipes/?category=Dessert");
    const data = await res.json();
    setDessert(data);
  } catch (error) {
   
   setDessert([]);
  }
  
}

useEffect(() => {
  fetchDessert();
}, []);

  return (
    <div>
       <h2 className="mb-4 mt-4 ml-5 text-2xl font-bold">
        Dessert Meals
        </h2>
      <FoodLimit
      food={dessert}
      count={12}
     
    />
    </div>
    
  );
};
 
export default Dessert;
