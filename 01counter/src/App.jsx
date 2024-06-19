import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setcounter] = useState(15)

  const addsome = () => {
    counter = counter+1;
    setcounter(counter)
    console.log("clicked",{counter});
  }
  const removesome = () => {
    counter = counter-1;
    if (counter>=0) {
      setcounter(counter)
      console.log("clicked",{counter});
    }
    else{
      counter = 0;
    }
    
  }
  
  return (
    <>
      <h1>Another Fun</h1>
      <h2>counter is : {counter}</h2>
      <button onClick={addsome}>ADD</button>
      <br />
      <button onClick={removesome}>REMOVE</button>

    </>
  )
}

export default App
