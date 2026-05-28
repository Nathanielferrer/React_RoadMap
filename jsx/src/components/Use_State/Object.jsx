import { useState } from 'react'

export default function ObjectArrays() {
    const [form, setForm] = useState({
        firstname: 'Nathaniel', //This the initial value of the state as an object
        lastname: 'Ferrer',
    })

    return (
        <>
            <label>First Name:</label>
            <input
                value={form.firstname}  //This is the value of the input field.
                onChange={e => {
                    setForm({
                        ...form,            //this is spread syntax that means copying the existing state.
                        firstname: e.target.value //then update the value.
                    })
                }}
            />

            <label>Last Name:</label>
            <input
                value={form.lastname}
                onChange={e => {
                    setForm({
                        ...form,
                        lastname: e.target.value
                    })
                }}
            />
            <p>{form.firstname}{' '}{form.lastname}</p>
        </>
    )
}