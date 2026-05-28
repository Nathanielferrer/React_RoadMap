import { useState } from 'react'
// import { initialItem } from './utils.jsx'

export default function CountMemo() {
    const [count, setCount] = useState(0)
    // const [items] = useState(initialItem)

    // const selectedItem = items.find(() => items.isSelected)

    return (
        <div>
            <p>{count}</p>
            {/* <p>Selected ID: {selectedItem?.id}  </p> */}
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}