import { useState, useEffect } from "react";

export default function Clock({ color }) {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timerId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(timerId);
        };
    }, []);

    return (
        <h1 style={{ color }}>
            {time.toLocaleTimeString()}
        </h1>
    );
}