import MyButton from "./components/Button.jsx";

const App = ()=>{
    return (
        <>
            <div className="App">
                <h1>Hello World</h1>
                <h3>I will render my button component below:</h3>
                <MyButton />
            </div>
        </>
    )
}
export default App;




// function App1() {

//     // Embedding expressions in JSX
//     const name = 'Ritik Arora';
//     return (
//         <div className="App">
//             <h1>Hello , I am {name}</h1>
//         </div>
//     )
// }

// // Can leverage javascript in JSX

// function formatUserName(user) {
//     return `${user.firstname} ${user.lastname}`;
// }

// const user = {
//     firstname: 'Jhon',
//     lastname: 'Doe'
// }
// function App2(){
//     return (
//         <div className="App">
//             <h1>Hey, this side, { formatUserName(user) }</h1>
//         </div>
//     )
// }

// // Dynamic Attributes

// const url = 'https://codeforces.com'

// function App3() {
//     return (
//         <div className="App">
//             <a href={url}>Click to visit</a>
//         </div>
//     )
// }

// export default App3;