import Counter from "./Components/Counter.jsx";
import { useContext } from "react";
import { CounterContext } from "./Context/Counter.jsx";

function App() {

    const counterState = useContext(CounterContext);

    return (
        <div>
            <h1>Count is {counterState.count}</h1>
            <Counter />
            <Counter />
            <Counter />
            <Counter />
        </div>
    );
}

export default App;
