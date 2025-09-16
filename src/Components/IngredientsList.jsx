export function IngredientsList(props) {
    const ingredientsListItems = props.ingredients.map((ingredient, index) => (
        <li key={ingredient}>
            {ingredient}
            <button 
                onClick={() => props.removeIngredient(index)} 
                style={{ marginLeft: "10px", color: "red", cursor: "pointer", border: "none", background: "none" }}
                aria-label={`Remove ${ingredient}`}
            >
                ❌
            </button>
        </li>
    ));

    return (
        <section>
            <ul className="ingredients-list" aria-live="polite">{ingredientsListItems}</ul>
            {props.ingredients.length > 1 && (
                <div ref={props.innerRef} className="get-recipe-container">
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button onClick={props.getRecipe}>Get a recipe</button>
                </div>
            )}
        </section>
    )
}