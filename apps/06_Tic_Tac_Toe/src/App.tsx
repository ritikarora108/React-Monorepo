import { useState,useEffect } from "react";
import Block from "./Components/Block.tsx";
import "./App.style.css"

/**
 *   [0,1,2]
 *   [3,4,5]
 *   [6,7,8]
*/
const winningCombos = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

function App() {

    const [state, setState] = useState(Array(9).fill(null))
    const [currentTurn, setCurrentTurn] = useState<"X" | "O">("O");  

    const [winner, setWinner] = useState<string | null>(null);

    
    
    const isCurrentPlayerWon = (state: (string | null)[]) => {
        
        for (const [a, b, c] of winningCombos) {
            if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
                return true;
            }
        }
        return false;
    }

    const isGameDraw = (state: (string | null)[]) => {
        return !state.includes(null);
    }
    
   
    useEffect(() => {
        if (winner) {
            alert(winner === "Draw" ? "It's a Draw!" : `${winner} won the game`);
            console.log(winner === "Draw" ? "It's a Draw!" : `${winner} won the game`);
            setState(Array(9).fill(null)); // Reset board AFTER alert
            setWinner(null);
            setCurrentTurn("O");
        }
    }, [winner])

    useEffect(() => {
        if (isCurrentPlayerWon(state)) {
            setWinner(currentTurn);
        }
        else if (isGameDraw(state)) {
            setWinner('Draw');
        }
        else setCurrentTurn(currentTurn == 'X' ? 'O' : 'X');
    },[state])

    const handleBlockClick = (id:number)=>{
        const stateCopy = Array.from(state);
        if (stateCopy[id] !== null) return;

        stateCopy[id] = currentTurn;
        console.log(currentTurn)
        setState(stateCopy);

    }

    return (
        <div className="board">
            <div className="row">
                <Block onClick = {() => handleBlockClick(0)} value={state[0]}/>
                <Block onClick = {() => handleBlockClick(1)} value={state[1]}/>
                <Block onClick = {() => handleBlockClick(2)} value={state[2]}/>
            </div>
            <div className="row">
                <Block onClick = {() => handleBlockClick(3)} value={state[3]}/>
                <Block onClick = {() => handleBlockClick(4)} value={state[4]}/>
                <Block onClick = {() => handleBlockClick(5)} value={state[5]}/>
            </div>
            <div className="row">
                <Block onClick = {() => handleBlockClick(6)} value={state[6]}/>
                <Block onClick = {() => handleBlockClick(7)} value={state[7]}/>
                <Block onClick = {() => handleBlockClick(8)} value={state[8]}/>
            </div>
        </div>
    )
}
export default App;