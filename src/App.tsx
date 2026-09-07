import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <header className="app-header">
        <h1>Fantastic Chainsaw</h1>
        <p className="tagline">Details matter</p>
      </header>
      
      <main className="app-main">
        <div className="card">
          <h2>Welcome</h2>
          <p>This is a modern React + TypeScript frontend project.</p>
          <button onClick={() => setCount((count) => count + 1)}>
            Count is {count}
          </button>
        </div>
      </main>
    </div>
  )
}

export default App
