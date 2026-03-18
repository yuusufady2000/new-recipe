export type RecipeInf = {
  query: string;
  title: string;
  cuisine: string;
  diet: string;
  includeIngredients: string;
  excludeIngredients: string;
  type: string;
  instructionsRequired: boolean;
  fillIngredients: boolean;
  addRecipeInformation: boolean;
  addRecipeNutrition: boolean;
};

export type RecipeItem = {
  id: number;
  category: string;                // Breakfast, Lunch, Dinner, Dessert
  title: string;                   // Recipe title
  image: string;                   // Recipe image URL
  foodReady: number;               // Time in minutes to be ready
  serving: number;                 // Number of servings
  foodScore: number;               // Rating or food score
  summarys: string;                // Short description of the recipe

  // Ingredients list
  ingredients: string[];

  // Step-by-step cooking instructions
  cookingInstructions: string[];

  // Prep & storage info
  preparationTime: string;         // e.g., "10 minutes"
  refrigerationTime: string;       // e.g., "Chill 20 minutes" or "None"
  storageSize: string;             // e.g., "Refrigerate up to 1 day"

  // Nutrition info
  nutritionInformation: {
    calories: number;
    protein: string;
    carbohydrates: string;
    fat: string;
  };
};
