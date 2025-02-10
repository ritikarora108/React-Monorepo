import React from "react";
import {TodoItemProps, TodoItem} from "./TodoItem/index.tsx";
import "./style.css"

interface TodoProps {
    items: TodoItemProps[]
}

const Todo:React.FC<TodoProps> = (props)=>{
    return (
        <div className="todo-container" >
            <ol>
                {props.items.map((item) => (
                    <TodoItem key={item.id.toString()} id={item.id} title={item.title} />
                ))}
            </ol>
        </div>
    );
}

export default Todo;