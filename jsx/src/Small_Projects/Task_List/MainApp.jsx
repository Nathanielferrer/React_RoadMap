import { useState, useRef } from 'react'
import TaskForm from './TaskForm'

export default function TaskList() {
    const [tasks, setTasks] = useState([{}]);
    const [input, setInput] = useState("");
    const inputRef = useRef(null);


    return (
        <>
            <TaskForm
                input={input}
                setInput={setInput}
                inputRef={inputRef}
            />
        </>
    )
}