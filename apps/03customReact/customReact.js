function customRender(element, container) {
    
    const domElement = document.createElement(element.type);
    domElement.innerText = element.children;


    // domElement.setAttribute('href', element.props.href);
    // domElement.setAttribute('target', element.props.target);


    for (const prop of Object.keys(element.props)) {
        domElement.setAttribute(prop,element.props[prop])
    }

    container.appendChild(domElement);

}

const rootContainer = document.getElementById('root');
const reactElement = {
    type: 'a',
    children: 'Click me to visit Google',
    props: {
        href: 'https://www.google.com/',
        target: '_blank'
    }
}



