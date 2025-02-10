import React from "react";
import Todo from "./components/Todo/index.tsx";

const myTodoItems1 = [
    { id: 101, title: "Eat" },
    { id: 102, title: "Code" },
    { id: 103, title: "Play" },
    { id: 104, title: "Sleep" }
];

const App: React.FC = () => {
    return (
        <div>
            <Todo items={myTodoItems1} />
            {/* <Todo items={[{id:201, title: "MongoDB"},{id:202, title: "Express Js"},{id:203, title: "React Js"}, {id:204, title: "NodeJs"}]}/> */}
        </div>
    )
}

export default App;