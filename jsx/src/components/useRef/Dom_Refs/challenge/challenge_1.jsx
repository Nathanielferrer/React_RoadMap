import { useState, useRef } from 'react';

export default function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);  //Adding ref to the video elements

  function handleClick() {
    const nextIsPlaying = !isPlaying;
    setIsPlaying(nextIsPlaying);

    if (nextIsPlaying) {  //Add a condittion to check if the video is playing or not
      videoRef.current.play()    //If the video is not playing, play it using ref attribute
    } else {
      videoRef.current.pause()    //If the video is playing, pause it using ref attribute
    }
  }

  return (
    <>
      <button onClick={handleClick} >   {/*Calling handleClick function on click*/}
        {isPlaying ? 'Pause' : 'Play'}    {/*Changing the text of the button based on the isPlaying state*/}
      </button>
      <video width="250" ref={videoRef} >   {/*Ref attribute is used to access the DOM element such as input, h1, button, etc*/}
        <source
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          type="video/mp4"
        />
      </video>
    </>
  )
}
