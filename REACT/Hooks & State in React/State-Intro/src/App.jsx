import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0) //usestate() updates the value of setcount again and again

  return (
    <>
      <div>the count is: {count}</div> 
      <button onClick={()=>{setCount(count+1)}} >update button</button>
    </>
  )
}

export default App
