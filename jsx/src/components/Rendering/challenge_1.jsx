//Problem: Change it to show two separate lists one after another: Chemists and Everyone Else. Like previously,
//  you can determine whether a person is a chemist by checking if person.profession === 'chemist'.
//Solution: Add Another condition to filter non-chemist. 

import { people } from './data.js';
import { getImageUrl } from './utils.js';

export default function List() {
    const chemist = people.filter(person =>
        person.profession === 'chemist'
    );

    const everyone = people.filter(person =>  //Add this condition to filter non-chemist.
        person.profession !== 'chemist'
    );

    const listItems = chemist.map(person =>
        <li key={person.id}>
            <img
                src={getImageUrl(person)}
                alt={person.name}
            />
            <p>
                <b>{person.name}:</b>
                {' ' + person.profession + ' '}
                known for {person.accomplishment}
            </p>
        </li>
    );

    const listItem = everyone.map(person =>   //Add this list item and use map to render new items for non-chemist.
        <li key={person.id}>
            <img
                src={getImageUrl(person)}
                alt={person.name}
            />
            <p>
                <b>{person.name}:</b>
                {' ' + person.profession + ' '}
                known for {person.accomplishment}
            </p>
        </li>
    );

    return (
        <article>
            <h1>Scientists</h1>
            <ul>{listItems}</ul>   {/* This list is for chemists */}
            <h1>Everyone</h1>
            <ul>{listItem}</ul>   {/* This list is for non-chemists */}

        </article>
    );
}
