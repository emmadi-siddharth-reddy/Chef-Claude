import { React, useState } from "react"
import { ClaudeRecipe } from "./ClaudeRecipe"
import { IngredientsList } from "./IngredientsList"

export function Main () {

    const [ingredients, setIngredients] = useState(["Spices", "Pasta", "Chicken","Eggs"])

    const [recipieShown, setRecipieShown ] = useState(false)

    

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    function toggleRecipeShown() {
        setRecipieShown(prevShown => !prevShown)
    }
    return (
        <main>
            <form action={addIngredient} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>
            <h2>Ingredients on hand:</h2>
            
            {ingredients.length > 0 && <IngredientsList 
                ingredients={ingredients} 
                toggleRecipeShown={toggleRecipeShown}
            />}

            {recipieShown && <ClaudeRecipe />}

        </main>
    )
}