export default function RecipeFilter({ search, onSearchChange, category, onCategoryChange, total }) {
  return (
    <section className="filter-panel">
      <label className="search-box">
        <span aria-hidden="true">⌕</span>
        <input
          type="search"
          value={search}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Rechercher une recette..."
          aria-label="Rechercher par nom"
        />
      </label>
      <label className="category-select">
        <span>Catégorie</span>
        <select value={category} onChange={(event) => onCategoryChange(event.target.value)} aria-label="Filtrer par catégorie">
          <option value="Toutes">Toutes les catégories</option>
          <option value="Entrée">Entrée</option>
          <option value="Plat">Plat</option>
          <option value="Dessert">Dessert</option>
          <option value="Boisson">Boisson</option>
        </select>
      </label>
      <p className="results-count"><strong>{total}</strong> recette{total !== 1 ? "s" : ""}</p>
    </section>
  );
}
