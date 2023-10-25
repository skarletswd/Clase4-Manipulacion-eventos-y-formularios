// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  
  const handleClick = () => console.log("click");

  const handleLink = (event) => {
    event.preventDefault();
    console.log("Click en Link");
  };

  return (
    <>
      <button onClick={handleClick}>Click me</button>
      <a onClick={handleLink} href="https://google.com">Google</a>
    </>
  )
}

export default App;
