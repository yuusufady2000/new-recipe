import { useEffect, useState } from "react";


const AddRecipe = () => {
    return ( <div>
   

    </div> );
}
 
export default AddRecipe;
 


// type AddRecipeProps = {
//   isOpen: boolean;
//   onClose: () => void;
//   onAddRecipe: (recipe: Omit<RecipeItem, "id">) => void;
// };

// type RecipeFormState = Omit<RecipeItem, "id">;

// const initialFormState: RecipeFormState = {
//   category: "Breakfast",
//   title: "",
//   image: "",
//   foodReady: 0,
//   serving: 1,
//   foodScore: 0,
//   summarys: "",
//   pricePerServings: 0,
// };

// const numberFields: Array<
//   keyof Pick<RecipeFormState, "foodReady" | "serving" | "foodScore" | "pricePerServings">
// > = ["foodReady", "serving", "foodScore", "pricePerServings"];

// const AddRecipe = ({ isOpen, onClose, onAddRecipe }: AddRecipeProps) => {
//   const [formData, setFormData] = useState<RecipeFormState>(initialFormState);

//   useEffect(() => {
//     if (!isOpen) {
//       setFormData(initialFormState);
//     }
//   }, [isOpen]);

//   if (!isOpen) {
//     return null;
//   }

//   const handleChange = (
//     event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
//   ) => {
//     const { name, value } = event.target;

//     if (numberFields.includes(name as (typeof numberFields)[number])) {
//       setFormData((prev) => ({ ...prev, [name]: Number(value) }));
//       return;
//     }

//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
//     event.preventDefault();

//     onAddRecipe({
//       ...formData,
//       image: formData.image.trim() || "images/recipe1.jpg",
//       title: formData.title.trim(),
//       summarys: formData.summarys.trim(),
//     });
//   };

//   return (
//     <div className="fixed inset-0 z-[1200] flex items-center justify-center bg-black/50 px-4 py-8">
//       <div className="w-full max-w-2xl rounded-3xl bg-white shadow-2xl">
//         <div className="flex items-center justify-between border-b px-6 py-4">
//           <div>
//             <h2 className="text-2xl font-bold text-gray-900">Add Recipe</h2>
//             <p className="text-sm text-gray-500">
//               Choose a category and your recipe will appear there instantly.
//             </p>
//           </div>

//           <button
//             type="button"
//             onClick={onClose}
//             className="rounded-full px-3 py-2 text-sm font-semibold text-gray-500 transition hover:bg-gray-100 hover:text-gray-900"
//           >
//             Close
//           </button>
//         </div>

//         <form onSubmit={handleSubmit} className="grid gap-4 px-6 py-6 md:grid-cols-2">
//           <label className="flex flex-col gap-2 text-sm font-medium text-gray-700 md:col-span-2">
//             Recipe Title
//             <input
//               type="text"
//               name="title"
//               value={formData.title}
//               onChange={handleChange}
//               required
//               placeholder="Egusi Soup"
//               className="rounded-2xl border border-gray-300 px-4 py-3 focus:border-orange-400 focus:outline-none"
//             />
//           </label>

//           <label className="flex flex-col gap-2 text-sm font-medium text-gray-700">
//             Category
//             <select
//               name="category"
//               value={formData.category}
//               onChange={handleChange}
//               className="rounded-2xl border border-gray-300 px-4 py-3 focus:border-orange-400 focus:outline-none"
//             >
//               {RECIPE_CATEGORIES.map((category: RecipeCategory) => (
//                 <option key={category} value={category}>
//                   {category}
//                 </option>
//               ))}
//             </select>
//           </label>

//           <label className="flex flex-col gap-2 text-sm font-medium text-gray-700">
//             Image URL or Path
//             <input
//               type="text"
//               name="image"
//               value={formData.image}
//               onChange={handleChange}
//               placeholder="images/dinner1.jpg or https://..."
//               className="rounded-2xl border border-gray-300 px-4 py-3 focus:border-orange-400 focus:outline-none"
//             />
//           </label>

//           <label className="flex flex-col gap-2 text-sm font-medium text-gray-700">
//             Ready Time (mins)
//             <input
//               type="number"
//               name="foodReady"
//               value={formData.foodReady}
//               onChange={handleChange}
//               min="1"
//               required
//               className="rounded-2xl border border-gray-300 px-4 py-3 focus:border-orange-400 focus:outline-none"
//             />
//           </label>

//           <label className="flex flex-col gap-2 text-sm font-medium text-gray-700">
//             Servings
//             <input
//               type="number"
//               name="serving"
//               value={formData.serving}
//               onChange={handleChange}
//               min="1"
//               required
//               className="rounded-2xl border border-gray-300 px-4 py-3 focus:border-orange-400 focus:outline-none"
//             />
//           </label>

//           <label className="flex flex-col gap-2 text-sm font-medium text-gray-700">
//             Food Score
//             <input
//               type="number"
//               name="foodScore"
//               value={formData.foodScore}
//               onChange={handleChange}
//               min="0"
//               max="100"
//               required
//               className="rounded-2xl border border-gray-300 px-4 py-3 focus:border-orange-400 focus:outline-none"
//             />
//           </label>

//           <label className="flex flex-col gap-2 text-sm font-medium text-gray-700">
//             Price Per Serving
//             <input
//               type="number"
//               name="pricePerServings"
//               value={formData.pricePerServings}
//               onChange={handleChange}
//               min="0"
//               required
//               className="rounded-2xl border border-gray-300 px-4 py-3 focus:border-orange-400 focus:outline-none"
//             />
//           </label>

//           <label className="flex flex-col gap-2 text-sm font-medium text-gray-700 md:col-span-2">
//             Summary
//             <textarea
//               name="summarys"
//               value={formData.summarys}
//               onChange={handleChange}
//               required
//               rows={4}
//               placeholder="Tell people a little about the recipe."
//               className="rounded-2xl border border-gray-300 px-4 py-3 focus:border-orange-400 focus:outline-none"
//             />
//           </label>

//           <div className="flex items-center justify-end gap-3 md:col-span-2">
//             <button
//               type="button"
//               onClick={onClose}
//               className="rounded-full border border-gray-300 px-5 py-3 font-semibold text-gray-700 transition hover:bg-gray-100"
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               className="rounded-full bg-orange-500 px-5 py-3 font-semibold text-white transition hover:bg-orange-600"
//             >
//               Submit Recipe
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddRecipe;
