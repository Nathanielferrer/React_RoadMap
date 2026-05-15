import { sculptureList } from "./data.jsx";
import { useState } from "react";

function MyGallery() {
    const [index, setIndex] = useState(0);
    const [message, setMessage] = useState("")
    //index is the state variable that will hold the index of the current sculpture. 
    // setIndex is the function that will update the index variable.
    // useState is a hook that is used to manage the current value of the index variable.
    // So, whenever index chnages, the component will re-render.

    function handleClick() {    //This will handle the updating of the index variable. 
        if (index >= sculptureList.length - 1) {    //Every click the current index will be updated by setIndex (index+1)
            alert("This is the end of the list");   // and after updating the index, the component will re-render. 
            return;
        }
        setIndex(index + 1);
        setMessage("");
    }

    function handlePrev() { //handle previous button click
        if (index <= 0) { //if index is less than or equal to 0, alert "This is the start of the list" and return.
            alert("This is the start of the list");
            return;
        }
        setIndex(index - 1); //decrement the index by 1.
    }

    let sculpture = sculptureList[index];
    return (
        <>
            <div>
                <h1>{sculpture.name}</h1>
                <img src={sculpture.url} alt={sculpture.alt} />
                <p>{sculpture.description}</p>
                <button onClick={handleClick}>Next</button>
                <button onClick={handlePrev}>Prev</button>
                <p>{message}</p>
            </div>
        </>
    )
}

export default MyGallery;