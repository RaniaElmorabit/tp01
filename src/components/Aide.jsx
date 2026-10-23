export default function Aide(props) {
    return (
        <div className="modal-overlay">
            <div className="recipe-form-container">
                <h2>Aide</h2>
                <p>Utilisez la barre de recherche et les filtres pour trouver des recettes. Cliquez sur "Ajouter une recette" pour en créer une nouvelle, ou utilisez les boutons sur chaque carte pour modifier, dupliquer ou supprimer.</p>
                <button type="button" onClick={props.onClose}>Fermer</button>
            </div>
        </div>
    );
}