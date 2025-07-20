import { useState } from 'react'

import './App.css'

function App() {
  const [counter, setCount] = useState(0);

  function addValue(){
    if(counter<20){
      setCount(counter+1);
    }
  }

  function removeValue(){
    if(counter>0){
      setCount(counter-1);
    }
  }

  return (
    <div className="container">
      <h1>Counter = {counter}</h1>
      <button onClick={addValue}>Increment</button>
      <br/>
      <button onClick={removeValue}>Decrement</button>
    </div>
  )
}

export default App
