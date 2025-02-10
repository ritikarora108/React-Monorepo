import React from "react";
import "./style.css"

export interface TodoItemProps{
    id:Number,
    title: string
}
export const TodoItem: React.FC<TodoItemProps> = (props) => {
    return <li>{props.title}</li>
}


