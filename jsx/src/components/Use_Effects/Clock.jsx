import { useState, useEffect, useRef } from 'react'

export default function LiveClock() {
    const [time, setTime] = useState(new Date())
    const intervalRef = useRef(null)

    useEffect(() => {   //Use useEffects to run this side code if the component is mounted or unmounted.
        intervalRef.current = setInterval(() => {
            setTime(new Date())
        }, 1000)
        return () => {
            clearInterval(intervalRef.current)
        }
    }, [])  //this is dependency array. It means that the effect will only run once when the component is mounted.

    function StopTime() {
        clearInterval(intervalRef.current)
        intervalRef.current = null
    }

    function StartTime() {
        intervalRef.current = setInterval(() => {
            setTime(new Date())
        }, 1000)
    }


    return (
        <div>
            <h2>Live Clock</h2>
            <p>{time.toLocaleTimeString()}</p>
            <button onClick={StopTime}>Stop</button>
            <button onClick={StartTime}>Start</button>
        </div>
    )
}