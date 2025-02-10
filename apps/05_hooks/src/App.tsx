import { useState } from "react";

import Counter from "./Components/Counter.tsx"
function App() {
    const [state, setState] = useState<Boolean>(true);
    return (
        <>
            <button onClick={()=> setState(!state)}>Toggle</button>
            {state ? <Counter/> : ""};
        </>
    )
}

export default App
