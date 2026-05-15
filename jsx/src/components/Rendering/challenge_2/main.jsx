//problem 2: Make a list of recipes from this array! For each recipe in the array, display its name as an <h2> and list its ingredients in a <ul>.
//Solution: Use the map method to iterate over the array of recipes and return a new array of JSX elements.

import { recipes } from './data.js';

export default function RecipeList() {
    return (
        <div>
            <h1>Recipe</h1>
            {recipes.map(recipe =>
                <div key={recipe.id}>
                    <h2>{recipe.name}</h2>
                    <ul>
                        {recipe.ingredients.map(ingredient =>
                            <li key={ingredient}>
                                {ingredient}
                            </li>
                        )}
                    </ul>
                </div>
            )}
        </div>
    );
}
