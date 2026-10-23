import { useEffect, useState } from "react";

const emptyRecipe = {
  name: "",
  category: "Entrée",
  ingredients: [""],
  difficulty: 1,
  description: "",
  image: "",
};

export default function RecipeForm({ recipe, onSave, onClose }) {
  const [formData, setFormData] = useState(emptyRecipe);

  useEffect(() => {
    setFormData(recipe ? { ...recipe, ingredients: [...recipe.ingredients] } : { ...emptyRecipe, ingredients: [""] });
  }, [recipe]);

  function updateField(event) {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  }

  function updateIngredient(index, value) {
    setFormData((current) => ({
      ...current,
      ingredients: current.ingredients.map((ingredient, i) => i === index ? value : ingredient),
    }));
  }

  function addIngredient() {
    setFormData((current) => ({ ...current, ingredients: [...current.ingredients, ""] }));
  }

  function removeIngredient(index) {
    setFormData((current) => ({
      ...current,
      ingredients: current.ingredients.filter((_, i) => i !== index),
    }));
  }

  function handleImage(event) {
    const file = event.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      alert("Veuillez sélectionner un fichier image.");
      event.target.value = "";
      return;
    }
    const reader = new FileReader();
    reader.onload = () => setFormData((current) => ({ ...current, image: String(reader.result) }));
    reader.readAsDataURL(file);
  }

  function submitForm(event) {
    event.preventDefault();
    const ingredients = formData.ingredients.map((item) => item.trim()).filter(Boolean);
    onSave({
      ...formData,
      name: formData.name.trim(),
      difficulty: Number(formData.difficulty),
      ingredients,
    });
  }

  return (
    <div className="modal-backdrop" onMouseDown={(event) => {
      if (event.target === event.currentTarget) onClose();
    }}>
      <section className="modal" role="dialog" aria-modal="true" aria-labelledby="form-title">
        <div className="modal-header">
          <div>
            <p className="eyebrow">VOTRE CARNET DE CUISINE</p>
            <h2 id="form-title">{recipe ? "Modifier la recette" : "Créer une recette"}</h2>
          </div>
          <button className="close-button" type="button" onClick={onClose} aria-label="Fermer">×</button>
        </div>

        <form onSubmit={submitForm} className="recipe-form">
          <label>
            Nom de la recette <span className="required">*</span>
            <input name="name" value={formData.name} onChange={updateField} placeholder="Ex. Tarte aux pommes" required maxLength={80} />
          </label>

          <div className="form-row">
            <label>
              Catégorie
              <select name="category" value={formData.category} onChange={updateField}>
                <option>Entrée</option>
                <option>Plat</option>
                <option>Dessert</option>
                <option>Boisson</option>
              </select>
            </label>
            <label>
              Difficulté : <strong>{formData.difficulty}/5</strong>
              <input name="difficulty" type="range" min="1" max="5" value={formData.difficulty} onChange={updateField} />
              <span className="range-labels"><span>Facile</span><span>Expert</span></span>
            </label>
          </div>

          <fieldset className="ingredients-fieldset">
            <legend>Ingrédients</legend>
            {formData.ingredients.map((ingredient, index) => (
              <div className="ingredient-row" key={index}>
                <input
                  value={ingredient}
                  onChange={(event) => updateIngredient(index, event.target.value)}
                  placeholder={`Ingrédient ${index + 1}`}
                  aria-label={`Ingrédient ${index + 1}`}
                />
                <button className="icon-button" type="button" onClick={() => removeIngredient(index)} disabled={formData.ingredients.length === 1} aria-label="Supprimer cet ingrédient">−</button>
              </div>
            ))}
            <button className="add-ingredient" type="button" onClick={addIngredient}>＋ Ajouter un ingrédient</button>
          </fieldset>

          <label>
            Description
            <textarea name="description" value={formData.description} onChange={updateField} rows="3" placeholder="Décrivez votre recette en quelques mots..." maxLength={240} />
          </label>

          <label>
            Image de la recette
            <input type="file" accept="image/*" onChange={handleImage} />
          </label>
          {formData.image && (
            <div className="image-preview">
              <img src={formData.image} alt="Aperçu de la recette" />
              <button type="button" className="text-button" onClick={() => setFormData((current) => ({ ...current, image: "" }))}>Retirer l’image</button>
            </div>
          )}

          <div className="modal-actions">
            <button className="button button-outline" type="button" onClick={onClose}>Annuler</button>
            <button className="button button-primary" type="submit">{recipe ? "Enregistrer les changements" : "Créer la recette"} <span>→</span></button>
          </div>
        </form>
      </section>
    </div>
  );
}