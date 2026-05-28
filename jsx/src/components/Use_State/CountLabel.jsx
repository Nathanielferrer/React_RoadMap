import { useState } from 'react';

export default function CountLabel({ count }) { //This is the prop from the parent  components
    const [prevCount, setPrevCount] = useState(count)  //this is used to store previous value of the count.
    const [currentStatus, setCurrentStatus] = useState(null) //this is used to store the current status of the count.

    if (prevCount !== count) {  //This condition is used to check if the current value of the count is different from the previous value of the count.
        setPrevCount(count) //this is updating the previous value of the count.
        setCurrentStatus(count > prevCount ? 'Increasing' : 'Decreasing') //this is updating the current status of the count.
    }



    return (
        <h1>Count: {count} {currentStatus}</h1>
    )
}
