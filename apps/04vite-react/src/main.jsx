import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function alertDisplay() {
    alert('hello');
}

function myCustomButton() {
    return <button onClick={alertDisplay}>Greet Me</button>
}

const MyApp =
(<>
        <h1>Todo</h1>
        <ol>
            <li>Eat</li>
            <li>Code</li>
            <li>Play</li>
            <li>Sleep</li>
        </ol>
    </>)

const element = {
    type: 'a',
    props:{
        children: 'Click me to visit Google',
    }
};

const anotherUser = 'Hitesh Chaudhary'

const reactElement = React.createElement(
    'a',
    {
        href: 'https://www.facebook.com/',
        target: "_blank"
    },
    'Click me to visit Facebook  ',
    anotherUser
);

createRoot(document.getElementById('root')).render(
    // <App />
    // myCustomButton()
    // MyApp

    reactElement
)
