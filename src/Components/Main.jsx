//import { React, useState } from "react"

import { useState } from "react"

export function Main () {

    const [ingredients, setIngredients] = useState(["Chicken", "Oregano", "Chilli"])
    const ingredientsListItems=ingredients.map(item => (
        <li key = {item}> {item} </li>
    ))
    
    function handelSubmit(formData) {
       const newIngredient = formData.get("ingredient")
       setIngredients( prevIngredients => [...prevIngredients, newIngredient])
    }


    return (
        <main>
            <form action={handelSubmit} className="add-ingredient-form" >
                <input 
                    type="text"
                    placeholder="e.g oregano"
                    aria-label="Add Ingredient"
                    name="ingredient"
                />
                <button>Add Ingredient</button>
            </form>
            <ul>
                {ingredientsListItems}
            </ul>
        </main>
    )
}