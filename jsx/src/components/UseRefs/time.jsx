import { useState, useRef } from 'react';

export default function Stopwatch() {
  const [startTime, setStartTime] = useState(null);    // startTime stores the timestamp when the Start button is clicked.
  const [now, setNow] = useState(null);                // now stores the latest/current timestamp while the stopwatch is running.
  const intervalRef = useRef(null);                    // intervalRef stores the interval ID returned by setInterval.
  // We use this ID later to stop the timer with clearInterval.

  function handleStart() {
    // Save the current time as the starting point.
    setStartTime(Date.now());

    // Save the current time as the first "now" value.
    // At the start, now and startTime are almost the same,
    // so the displayed time begins near 0.
    setNow(Date.now());

    // Stop any existing interval first.
    // This prevents multiple timers from running if Start is clicked repeatedly.
    //Like before starting a new one stop any existing running time
    clearInterval(intervalRef.current);

    // Start a new interval that updates "now" every 10 milliseconds.
    // Updating "now" causes React to re-render and recalculate secondsPassed.
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }

  function handleStop() {
    // Stop the interval, so "now" stops updating.
    // Since startTime and now stay the same, the displayed time freezes.
    clearInterval(intervalRef.current);
  }

  // Default displayed time before the stopwatch starts.
  let secondsPassed = 0;

  // Only calculate passed time after startTime and now have real values.
  if (startTime != null && now != null) {
    // Date.now() gives milliseconds, so divide by 1000 to convert to seconds.
    secondsPassed = (now - startTime) / 1000;
  }

  return (
    <>
      {/* Display the passed time with 3 decimal places */}
      <h1>Time passed: {secondsPassed.toFixed(3)}</h1>

      {/* Starts or restarts the stopwatch */}
      <button onClick={handleStart}>
        Start
      </button>

      {/* Stops/freezes the stopwatch */}
      <button onClick={handleStop}>
        Stop
      </button>
    </>
  );
}