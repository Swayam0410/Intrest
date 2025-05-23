import { useState } from 'react'
import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FormContent from './FormContent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
  <FormContent/>
  </div>
  );
}

export default App
