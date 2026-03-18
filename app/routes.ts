import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [index("routes/home.tsx"),
    route('recipeInf', "routes/recipeInf/recipeInformation.tsx"),
     route('recipeInf/:id', "routes/recipeInf/detail.tsx"),
    
    route('allRecipes', './routes/allRecipes/all.tsx')
] satisfies RouteConfig;
