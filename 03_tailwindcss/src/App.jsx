import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
 import Card from './components/card'
function App() {
  let myObj={
  userName:"babli",
  age: 21
  }

  const [count, setCount] = useState(0)

  return (
    <>
      <h2 className='bg-green-400 p-5 my-5'>hello , tailwind</h2>
       <Card  name="babli 1" btnText=" click me"/>
       <Card name="babli 2" btnText="click"/>

    </>
  )
}

export default App
