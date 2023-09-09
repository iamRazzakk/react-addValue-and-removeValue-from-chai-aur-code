import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(1)
  // let count = 15
  function addCount() {
    if (counter === 20) {
      setCounter(20)
    } else {
      let Counter = counter + 1
      setCounter(Counter)
    }
  }
  function removeValue() {
    if (counter <= 0) {
      setCounter(0)
    } else {
      let Counter = counter - 1
      setCounter(Counter)
    }
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
