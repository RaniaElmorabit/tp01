export default function RecipeItem({ recipe, onEdit, onDuplicate, onDelete }) {
  const category = recipe.category || recipe.categorie || "Plat";

  return (
    <article className="recipe-card">
      <div className="recipe-image">
        {recipe.image ? (
          <img src={recipe.image} alt={recipe.name || recipe.nom} />
        ) : (
          <div className={`food-placeholder ${category.toLowerCase()}`}>
            <span>{category === "Boisson" ? "🥤" : category === "Dessert" ? "🍰" : category === "Entrée" ? "🥗" : "🍲"}</span>
            <small>CREATIVE KITCHEN</small>
          </div>
        )}
        <span className="category-pill">{category}</span>
      </div>

      <div className="recipe-content">
        <div className="recipe-heading">
          <h3>{recipe.name || recipe.nom}</h3>
          <span className="difficulty" title={`Difficulté ${recipe.difficulty || recipe.difficulte || 1} sur 5`}>
            {"★".repeat(Number(recipe.difficulty || recipe.difficulte || 1))}
            <span className="muted-stars">{"★".repeat(5 - Number(recipe.difficulty || recipe.difficulte || 1))}</span>
          </span>
        </div>

        <p className="description">{recipe.description || "Aucune description pour le moment."}</p>

        <div className="ingredients-block">
          <h4>Ingrédients <span>({recipe.ingredients?.length || 0})</span></h4>
          <ul>
            {recipe.ingredients?.filter(Boolean).map((ingredient, index) => (
              <li key={`${ingredient}-${index}`}>{ingredient}</li>
            ))}
          </ul>
        </div>

        <div className="card-actions">
          <button className="button button-light" onClick={() => onEdit(recipe)}>Modifier</button>
          <button className="button button-outline" onClick={() => onDuplicate(recipe)}>Dupliquer</button>
          <button className="button button-danger" onClick={() => onDelete(recipe.id)}>Supprimer</button>
        </div>
      </div>
    </article>
  );
}