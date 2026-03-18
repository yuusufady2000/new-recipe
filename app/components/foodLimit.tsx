import { Link } from "react-router";
import { FaClock, FaUsers, FaStar } from "react-icons/fa";
import type { RecipeItem } from "~/types";

type Props = {
  food: RecipeItem[];
  count: number;
};

const FoodLimit = ({ food, count }: Props) => {
  if (!food || food.length === 0) return null;

  return (
    <section className="px-6 py-8">

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {food.slice(0, count).map((item) => (
          <Link key={item.id} to={`/recipeInf/${item.id}`}>
            <div className="flex h-full flex-col rounded-xl bg-white shadow-md transition hover:shadow-lg">
              <img
                src={item.image.startsWith("/") ? item.image : `/${item.image}`}
                alt={item.title}
                className="h-44 w-full rounded-t-xl object-cover"
              />

              <div className="flex flex-1 flex-col p-4">
                <h3 className="mb-2 line-clamp-2 text-lg font-semibold">
                  {item.title}
                </h3>

                <div className="mb-3 flex items-center gap-4 text-sm text-gray-600">
                  <span className="flex items-center gap-1">
                    <FaStar className="text-yellow-500" />
                    {Math.round(item.foodScore || 0)}
                  </span>

                  <span className="flex items-center gap-1">
                    <FaClock />
                    {item.foodReady} min
                  </span>

                  <span className="flex items-center gap-1">
                    <FaUsers />
                    {item.serving}
                  </span>
                </div>
             
                <p
                  className="flex-1 line-clamp-3 text-sm text-gray-600"
                  dangerouslySetInnerHTML={{
                    __html: item.summarys || "",
                  }}
                />

                <div className="mt-4 flex items-center justify-between border-t pt-3">
                  <span className="text-sm text-gray-500">Price</span>

                </div>
              </div>
            </div>
           
          </Link>
        ))}
      </div>
    </section>
  );
};

export default FoodLimit;
