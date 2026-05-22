// TaskForm.jsx
// This component renders the input field and button for adding a new task.
// It receives the input state, state setter, input ref (for focus control), and the AddTask handler from the parent.

export default function TaskForm({ inputRef, input, setInput, AddTask }) {  //Destructuring the props.
    return (
        <form onSubmit={AddTask} className="task-form"> {/* when the user submit the form it will run this function AddTask*/}
            <input
                ref={inputRef}
                value={input}   //we are binding the input field to the input state. This is called controlled component.
                onChange={e => setInput(e.target.value)} //This function will update the input state whenever the user types in the input field.
                placeholder="Write a task..."
                className="task-input"
            />
            <button type="submit" className="add-btn">
                Add Task
            </button> coding
        </form>
    )
}