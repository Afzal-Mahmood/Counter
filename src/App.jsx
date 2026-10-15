import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  function Add(){
    if(count <= 19){
      let counter = count + 1
      setCount(counter)

    }

  }
  function Remove(){
    if(count >= 1){
      let counter = count - 1
      setCount(counter)
      
    }
  }

  return (
    <>
        <h2>Counter</h2>
        <p>Count {count}</p>
        <p>Count {count}</p>
        <p>Count {count}</p>
        <button  onClick={Add}>Add</button>
        <br />
        <br />
        <button onClick={Remove}>Remove</button>
    </>
  )
}

export default App
