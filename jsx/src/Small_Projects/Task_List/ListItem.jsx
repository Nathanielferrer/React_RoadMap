// ListItem.jsx
// This component is responsible for rendering an individual task item.
// It receives the task object and action handlers (toggle, delete) from the parent TaskList component.

export default function ListItem({ task, onToggleComplete, onDeleteTask }) {
    return (
        <li className={`task-item ${task.completed ? 'completed' : ''}`}>   {/* if the task is completed then it will add the completed class to the task item */}
            <div className="task-content">
                {/* Checkbox to toggle completion status */}
                <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => onToggleComplete(task.id)}
                    className="task-checkbox"
                />

                {/* Task text. It will have a strike-through styling if the task is completed */}
                <span className="task-text">
                    {task.text}
                </span>
            </div>

            {/* Delete button to remove this task from the list */}
            <button
                onClick={() => onDeleteTask(task.id)}
                className="delete-btn"
                aria-label="Delete task"
            >
                Delete
            </button>
        </li>
    )
}
