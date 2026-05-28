import { useState, useRef } from 'react'
import TaskForm from './TaskForm'
import ListItem from './ListItem'

export default function TaskList() {
    const [tasks, setTasks] = useState([]);   //Make an Array of Object that stores the task.
    const [input, setInput] = useState("");     //Make a state that store a valeu of the input field
    const inputRef = useRef(null);              //Make a ref to focus on the input field.


    function AddTask(e) {
        e.preventDefault(); //This is to prevent the reload of the page if the from is submitted.

        if (input.trim() === '') return;    //This is to prevent the empty task from being added. and removing white space by using trim.

        const newTask = {
            id: Date.now(), //Creates a unique ID for the task based on the current time.
            text: input,    //Stores the task text.
            completed: false,   //Sets the initial state of the task to not completed.
        };

        setTasks([...tasks, newTask]); //Add the new task to the existing tasks.

        setInput("");      //Clears the input field.
        inputRef.current.focus();   //Sets the focus on the input field.
    }

    function ToggleComplete(id) {
        setTasks(tasks.map((task) => task.id === id ? { ...task, completed: !task.completed } : task));
    }

    function DeleteTask(id) {
        setTasks(tasks.filter((task) => task.id !== id));
    }

    return (
        <section>
            <TaskForm
                input={input}   //Passes the current value of the input field to the TaskForm component.
                setInput={setInput} //Passes the function to update the input field.
                inputRef={inputRef} //Passes the ref to focus on the input field.
                AddTask={AddTask}   //Passes the function to add a new task.
            />

            {/* This is a self created component that will render the list of tasks. */}
            {tasks.length === 0 ? (
                <p>No tasks yet.</p>
            ) : (
                <ul>
                    {tasks.map((task) => (  //task is just a PARAMETER VARIABLE. We can name it anything.
                        <ListItem
                            key={task.id}
                            task={task}
                            onToggleComplete={ToggleComplete}
                            onDeleteTask={DeleteTask}
                        />
                    ))}
                </ul>
            )}
        </section>
    )
}