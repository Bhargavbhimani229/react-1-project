import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);


  const handleIncrement = () => {
    setCount((count) => {
      let newCount = count + 1;
      localStorage.setItem("count", JSON.stringify(newCount))
      setCount(newCount);
    })
  }
  useEffect(() => {
    handleCount();
    handelReset();
  }, []);



  const handleCount = () => {
    const oldCount = JSON.parse(localStorage.getItem("count"))
    setCount(oldCount)
  }

  const handleDecrement = () => {
    setCount(prevCount => {
      const newCount = prevCount > 0 ? prevCount - 1 : 0;
      localStorage.setItem("count", JSON.stringify(newCount));
      return newCount;
    });
  };

  const handelReset = () => {
    setCount(0);
  }



  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <div className="button-group">
          <button onClick={handleIncrement}>
            +
          </button>
          <button>count : {count}</button>
          <button onClick={handleDecrement}>
            -
          </button>
        </div>
        <button onClick={handelReset}>Reset</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
