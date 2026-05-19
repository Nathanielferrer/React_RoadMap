import { useRef } from 'react'


function DebouncedButton({ onClick, children }) {
  const timeoutID = useRef(null)    //I add useRef to store the timeout ID

  return (
    <button onClick={() => {
      clearTimeout(timeoutID.current);    //Clearing the timeout ID
      timeoutID.current = setTimeout(() => {   //Storing the timeout ID
        onClick();
      }, 1000);
    }}>
      {children}
    </button>
  );
}

export default function Dashboard() {
  return (
    <>
      <DebouncedButton
        onClick={() => alert('Spaceship launched!')}
      >
        Launch the spaceship
      </DebouncedButton>
      <DebouncedButton
        onClick={() => alert('Soup boiled!')}
      >
        Boil the soup
      </DebouncedButton>
      <DebouncedButton
        onClick={() => alert('Lullaby sung!')}
      >
        Sing a lullaby
      </DebouncedButton>
    </>
  )
}
