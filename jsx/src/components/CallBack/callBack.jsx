import { useState, useCallback } from "react";

function TodoItem({ todo, onDelete }) { //This is receives id and text of the task and the ondelete is a function
    console.log("Rendering:", todo.text);

    return (
        <div>
            {todo.text}
            <button onClick={() => onDelete(todo.id)}>X</button>
        </div>
    );
}

export default function TodoApp() {
    const [todos, setTodos] = useState([]);
    const [darkMode, setDarkMode] = useState(false);

    console.log("🔁 Parent render");

    // ✅ stable function (does not change every render)
    const addTodo = useCallback((text) => { //THe use of useCallback is to reause the same function instead of creating a new one every render
        setTodos(t => [...t, { id: Date.now(), text }]);
    }, []);

    // ✅ stable function
    const deleteTodo = useCallback((id) => {  //So with the use of callback the function will not re-created everytime the components re-renders
        setTodos(t => t.filter(todo => todo.id !== id));
    }, []);

    return (
        <div style={{ background: darkMode ? "#111" : "#fff" }}>
            <button onClick={() => setDarkMode(!darkMode)}>
                Toggle Dark Mode
            </button>

            <button onClick={() => addTodo("New Todo")}>
                Add Todo
            </button>

            {todos.map(todo => ( //Map creates new array like key{1} and the todo{Study React}
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onDelete={deleteTodo}
                />
            ))}
        </div>
    );
}