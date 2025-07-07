import { useState } from 'react'

import './App.css'
function App() {
  const [count, setCount] = useState(0)
  //let counter = 15;

  const addValue = () => {
    setCount(count + 1)
  }
  //setCount hmesha ye bolta h ki nayi value batao kya rkhu count ki

  const subtractValue = () => {
    setCount(count -1)
  }

  return (
    <>
    <h1>Counter App</h1>
    <h2>Counter {count}</h2>

    <button
    onClick={addValue}
    >Add Value</button>

    <br></br>

    <button
    onClick={subtractValue}
    >subtract Value</button>
    </>
  )
}

export default App
