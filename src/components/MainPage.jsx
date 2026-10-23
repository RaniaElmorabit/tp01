import { useState } from "react";
import RecipeList from "./RecipeList";
import RecipeFilter from "./RecipeFilter";

export default function MainPage() {
    const [Recipes, setRecipes] = useState([
        {
            id: 1,
            nom: "Tacos méditerranéens",
            categorie: "Plat",
            description: "Tacos légers et parfumés.",
            ingredients: ["Tortilla", "Poulet", "Tomate", "Feta"],
            difficulte: 4,
            date: "11/19/2025, 12:47:37 PM",
            image: ""
        },
        {
            id: 2,
            nom: "Smoothie mangue",
            categorie: "Boisson",
            description: "Boisson fraîche et fruitée.",
            ingredients: ["Mangue", "Lait d'amande", "Miel"],
            difficulte: 2,
            date: "11/18/2025, 12:47:37 PM",
            image: ""
        }
    ]);
    const [Recherch, setRecherch] = useState("");
    const [Selec, setSelec] = useState("");
    const [Form, setForm] = useState(false);

    const filterRecipes = Recipes.filter((i) => 
        i.nom.toLowerCase().includes(Recherch.toLowerCase()) && 
        (Selec === "" || i.categorie === Selec)
    );

    return (
        <div>
            <h1>Creative Recipe Builder</h1>
            <RecipeFilter 
                Recherch={Recherch} 
                setRecherch={setRecherch} 
                Selec={Selec} 
                setSelec={setSelec} 
            />
            <RecipeList recipes={filterRecipes} />
        </div>
    );
}