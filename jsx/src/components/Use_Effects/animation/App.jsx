import { useState, useEffect, useRef } from 'react';
import { FadeInAnimation } from './Animation.jsx';

function Welcome() {
  const ref = useRef(null);

  useEffect(() => { //This useEffect is used to start the animation when the component is mounted/renreder.
    const animation = new FadeInAnimation(ref.current); //Creating an instance of the FadeInAnimation class.
    animation.start(1000); //This is the duration of the animation.
    return () => {
      animation.stop(); //This is to stop the animation when the component is unmounted.
    };
  }, []);   //This is to avoid the animation to run everytime it renders. It control the useEffects's rendering.
  //Like after rendering run this animation once then stop.
  //If no dependency array is provided, the effect will run after every render.

  return (
    <h1
      ref={ref} //This is the ref that is being passed to the FadeInAnimation class.
      style={{
        opacity: 0,
        color: 'white',
        padding: 50,
        textAlign: 'center',
        fontSize: 50,
        backgroundImage: 'radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)'
      }}
    >
      Welcome
    </h1>
  );
}

export default function App() {
  const [show, setShow] = useState(false);
  return (
    <>
      <button onClick={() => setShow(!show)}>
        {show ? 'Remove' : 'Show'}
      </button>
      <hr />
      {show && <Welcome />}
    </>
  );
}
