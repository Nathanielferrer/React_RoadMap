// MainApp.jsx
// This is the main container for the Task List practice project.
// It imports and renders the TaskList component which manages the application state and layout.
import TaskList from './TaskList'
import './tasklist.css' // Import custom styling for our Task List project

export default function MainApp() {
    return (
        <div className="task-app-card">
            <header className="task-app-header">
                <h2>Practice Project: Task List</h2>
                <p className="task-app-subtitle">Build, toggle, and manage your daily tasks.</p>
            </header>
            <TaskList />
        </div>
    )
}