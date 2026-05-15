import { useState } from "react";

function Inputfield() {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")

    function handleFirstName(e) {
        setFirstName(e.target.value)
    }

    function handleLastName(e) {
        setLastName(e.target.value)
    }

    function handleReset() {
        setFirstName("")
        setLastName("")
    }

    return (
        <>
            <form>
                <p>First Name:</p>
                <input type="text" value={firstName} onChange={handleFirstName} />
                <p>Last Name:</p>
                <input type="text" value={lastName} onChange={handleLastName} />
                <button onClick={handleReset}>Reset</button>
                <h1>{firstName} {lastName}</h1>
            </form>
        </>
    )
}

export default Inputfield;