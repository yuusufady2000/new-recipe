
import type { RecipeItem } from "~/types";

type RelatedRecipesProps = {
  category: RecipeItem[] | undefined;
  count: number;
}

const RelatedRecipes = ({ category, count }: RelatedRecipesProps) => {
    
    if (!category) return null;
  

    return (  <section className="max-w-6xl mx-auto mt-12 px-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Related Recipes</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {category?.slice(0, count).map((recipe) => (
            <div key={recipe.id} className="bg-white rounded-xl shadow-md overflow-hidden">
              <img 
                src={recipe.image.startsWith("/") ? recipe.image : `/${recipe.image}`}
               alt={recipe.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h4 className="text-lg font-semibold">{recipe.title}</h4>
                <p className="text-gray-600">{recipe.summarys}</p>
              </div>
            </div>
          ))}
        </div>
      </section>);
}
 
export default RelatedRecipes;

