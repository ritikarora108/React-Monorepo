import React, { useEffect, useState } from "react"
import axios from "axios"

interface todoItem{
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

const App: React.FC = () => {
    
    const [todos, setTodos] = useState<todoItem[]>([]);

    useEffect(() => {
        // fetch('https://jsonplaceholder.typicode.com/todos')
        //     .then(response => response.json())
        //     .then(todos => setTodos(todos as todoItem[]))

        axios.get<todoItem[]>('https://jsonplaceholder.typicode.com/todos')
            .then(response => setTodos(response.data));
    }, [])

    
    return (
        <div className="App">
            <ol>
                {todos.map((todo) =>
                    <li key={todo.id}>{todo.title}</li>
                )}
            </ol>
        </div>
    )
}

export default App;
