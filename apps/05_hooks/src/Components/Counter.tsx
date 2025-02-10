/*

Component life cycle status

Initialization -> Mounting -> Updation -> Unmounting

*/


import './style.css'
import React, { useEffect, useState } from 'react';



const Counter: React.FC= ()=>{
    const [count, setCount] = useState<number>(0);
    
    useEffect(() => {
        console.log("Component Mounted"); 

        return function () {
            console.log("Unmount counter");
        }
    }, [])

    // Empty dependency array means -> whole component
    
    useEffect(() => {
        console.log("User updated count")


        return function () {
            console.log("Counter useEffect Return ", count);
        }
    }, [count]);

    function handleIncrement() {
        setCount(count + 1);
    }
    function handleDecrement() {
        if (count === 0) return;
        setCount(count - 1);
    }

    return (
        <div className="counter-container">
            <h1>{count}</h1>
            <button onClick={handleIncrement} style={{ backgroundColor: 'green' }} >INC</button>
            
            <button onClick={handleDecrement} style={{backgroundColor: 'red'}} >DEC</button>
        </div>
    )
}

export default Counter;