//Problem: This RecipeList component contains two nested map calls. To simplify it, extract a Recipe component from it which will accept
//  id, name, and ingredients props. Where do you place the outer key and why?
//Solution: Add the outer key to the Recipe component and pass the id, name, and ingredients props to it.

import { recipes } from './data.js';

function Recipe({ id, name, ingredients }) {
    return (
        <div>
            <h2>{name}</h2>
            <ul>
                {ingredients.map(ingredient =>
                    <li key={ingredient}>
                        {ingredient}
                    </li>
                )}
            </ul>
        </div>
    );
}

export default function RecipeList() {
    return (
        <div>
            <h1>Ricipes</h1>
            {recipes.map(recipe =>
                <Recipe {...recipe} key={recipe.id} />
            )}
        </div>
    );
}