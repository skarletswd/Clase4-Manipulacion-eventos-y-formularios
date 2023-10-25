// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  
  const handleClick = () => console.log("click");

  return (
    <>
      <button onClick={handleClick}>Click me</button>
    </>
  )
}

export default App;
