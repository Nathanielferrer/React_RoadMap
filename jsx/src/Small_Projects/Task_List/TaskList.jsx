import { useState, useRef } from 'react'
import TaskForm from './TaskForm'

export default function TaskList() {
    // FIX: Changed from [{}], which had an empty object inside it, to [] (empty array).
    // An empty array correctly indicates there are no tasks initially (tasks.length === 0).
    const [tasks, setTasks] = useState([]);   // Make an Array of Objects that stores the tasks.
    const [input, setInput] = useState("");     // Make a state that stores the value of the input field.
    const inputRef = useRef(null);              // Make a ref to focus on the input field.

    function AddTask(e) {
        // e.preventDefault() prevents the page from reloading when the form submits.
        e.preventDefault(); 

        if (input.trim() === '') return;    // Prevents empty tasks from being added.

        const newTask = {
            id: Date.now(), // Creates a unique ID based on the current timestamp.
            text: input,    // Stores the task text.
            completed: false,   // Sets the initial state of the task to not completed.
        };

        setTasks([...tasks, newTask]); // Adds the new task to the existing tasks array.
        setInput("");      // Clears the input field.
        inputRef.current.focus();   // Sets the focus back on the input field.
    }

    // NEW FUNCTION: Toggle completion status of a task
    // We map through the tasks, find the one with matching id, and flip its 'completed' status.
    function ToggleComplete(id) {
        setTasks(
            tasks.map(task => 
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    }

    // NEW FUNCTION: Delete a task from the list
    // We filter the tasks list to only keep tasks that DO NOT match the deleted task's id.
    function DeleteTask(id) {
        setTasks(tasks.filter(task => task.id !== id));
    }

    return (
        <section className="task-list-section">
            <TaskForm
                input={input}
                setInput={setInput}
                inputRef={inputRef}
                AddTask={AddTask}
            />

            {tasks.length === 0 ? (
                <p className="no-tasks-prompt">No tasks yet.</p>
            ) : (
                <ul className="tasks-ul">
                    {/* Render tasks directly using simple <li> elements */}
                    {tasks.map((task) => (
                        // We conditionally add the 'completed' class if the task is checked/completed
                        <li key={task.id} className={`task-item ${task.completed ? 'completed' : ''}`}>
                            <div className="task-content">
                                {/* Checkbox input: 'checked' state bound to task.completed */}
                                {/* onChange triggers the ToggleComplete function with this task's id */}
                                <input 
                                    type="checkbox"
                                    checked={task.completed}
                                    onChange={() => ToggleComplete(task.id)}
                                    className="task-checkbox"
                                />
                                <span className="task-text">{task.text}</span>
                            </div>
                            
                            {/* Delete button: clicking it triggers the DeleteTask function with this task's id */}
                            <button 
                                onClick={() => DeleteTask(task.id)}
                                className="delete-btn"
                            >
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </section>
    )
}