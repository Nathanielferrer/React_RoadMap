import { useState, useRef } from 'react';

export default function Counter() {
  const [show, setShow] = useState(false);  //Initial value is false to not show the hello world yet
  const ref = useRef(null);               // Using ref to store the reference to the DOM element

  return (
    <div>
      <button
        onClick={() => {
          setShow(!show);   //If the initial value is true it will become false
        }}>
        Toggle with setState
      </button>
      <button
        onClick={() => {
          ref.current.remove();
        }}>
        Remove from the DOM
      </button>
      {show && <p ref={ref}>Hello world</p>} //the && is used to show the hello wolrd cause if the show is true then the right side is always true and if false it will ignore the right side.
    </div>  
  );
}
