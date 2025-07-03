import { React, useEffect, useRef, useState } from "react"
import { AIRecipe } from "./AIRecipe"
import { IngredientsList } from "./IngredientsList"
import { getRecipeFromMistral } from "./Ai"

export function Main () {

    const [ingredients, setIngredients] = useState([])
    const [recipe, setRecipe] = useState("")

    const recipeSection = useRef(null)
    
    useEffect(() => {
        if(recipe !== "" && recipeSection.current !== null) {
            recipeSection.current.scrollIntoView({behavior: "smooth"})
        }
    },[recipe])

    async function getRecipe() {
        const recipeMarkdown = await getRecipeFromMistral(ingredients)
        setRecipe(recipeMarkdown)
    }

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
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

            {ingredients.length > 0 &&
                <IngredientsList
                    ref={recipeSection}
                    ingredients={ingredients}
                    getRecipe={getRecipe}
                />
            }

            {recipe && <AIRecipe recipe={recipe} />}
        </main>
    )
}