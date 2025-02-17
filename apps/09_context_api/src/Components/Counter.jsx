import './Counter.css'
import { useContext } from 'react';
import { CounterContext, CounterProvider } from '../Context/Counter.jsx';

const Counter = () => {

    const counterState = useContext(CounterContext);

    return (
        <div>
            <button
                onClick={() => counterState.setCount(counterState.count + 1)}
                style={{ backgroundColor: 'green' }}>
                Increment
            </button>
            <button
                onClick={() => counterState.setCount(counterState.count - 1)}
                style={{ backgroundColor: 'red' }}>
                Decrement
            </button>
        </div>
    )
};

export default Counter;