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
        const newIngredient = formData.get("ingredient").trim();

        // Regex to allow only letters and spaces (no numbers/symbols)
        const isValid = /^[A-Za-z\s]+$/.test(newIngredient);

        if (!newIngredient || !isValid) {
            alert("Please enter a valid ingredient (letters only, no numbers or symbols).");
            return;
        }

        setIngredients(prevIngredients => [...prevIngredients, newIngredient]);
    }

    function removeIngredient(indexToRemove) {
        setIngredients(prev => prev.filter((_, index) => index !== indexToRemove));
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
            <h2>Add Atleast 4 Ingredients</h2>

            {ingredients.length > 0 &&
                <IngredientsList
                    innerRef={recipeSection}
                    ingredients={ingredients}
                    getRecipe={getRecipe}
                    removeIngredient={removeIngredient}
                />
            }

            {recipe && <AIRecipe recipe={recipe} />}
        </main>
    )
}