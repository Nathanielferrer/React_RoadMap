import { people } from './Data.jsx';
import { getImageUrl } from './Utils.jsx';

export default function List() {
  const chemists = people.filter(person =>  //The filter method will create a new array with all the objects that follow the condition 
    person.profession === 'chemist' //The condition that only the chemists profession will be selected same value and data types . it will not select the other professions
  );
  const listItems = chemists.map(person =>  //The map will create a new array called listItems from the old array called chemists
    <li key=
      {person.id}>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}:</b> {/* The bold tags are used to make the text bold */}
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
  );
  return <ul>{listItems}</ul>;  //Initialize the listItems array to be rendered as a list
}


