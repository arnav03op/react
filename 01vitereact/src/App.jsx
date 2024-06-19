import Fake from './fake.jsx'
import Hack from './hack.jsx'
import React from 'react'

// const react_element = React.createElement(
//   'a',
//   {href:'https://www.youtube.com/',target:'_blank'},
//   'go to youtube'
// )

function App() {
  let my_var = "chai"
  my_var = "duck"
  
  return (
    <>
    <Fake/>
    <Hack/>
    <h1>hello there {my_var}</h1>
    </>
    
  )
}


export default App
