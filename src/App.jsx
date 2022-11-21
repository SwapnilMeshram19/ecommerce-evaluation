import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Pages } from './pages/pages'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
            <Navbar/>

      <Pages/>
    </div>
  )
}

export default App
