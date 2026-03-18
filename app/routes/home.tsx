import Hero from "~/components/hero";
import type { Route } from "./+types/home";
import BreakFast from "./recipeCategories/breakFast";
import Header from "~/components/header";
import Lunch from "./recipeCategories/lunch";
import Dinner from "./recipeCategories/dinner";
import Footer from "~/components/footer";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (<div>
    <Header />
    <Hero/>
    <BreakFast/>
    <Lunch/>
    <Dinner/>
    <Footer/>
  </div>);
}
