import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Other from './other.jsx'

// const react_element = React.createElement(
//     'a',
//     {href:'https://www.youtube.com/',target:'_blank'},
//     'go to youtube'
// )


ReactDOM.createRoot(document.getElementById('root')).render(
    <>
    <App />
    <Other/>
    </>



)
