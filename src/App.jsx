import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(1)
  // let count = 15
  function addCount() {
    let Counter = counter + 1
    setCounter(Counter)
  }
  function removeValue() {
    let Counter = counter - 1
    setCounter(Counter)
  }

  return (
    <>
      <h1>Hello world</h1>
      <button onClick={addCount}>Count:{counter}</button>
      <br /> <br />
      <button onClick={removeValue}>RemoveCount:{counter}</button>
    </>
  )
}

export default App
