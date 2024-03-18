import cards from './Data'
import './App.css'
import { useState } from 'react'
import Cards from './Cards'

function App() {
const [data, setData] = useState(cards)

  return (
    <>
    <h1>Rick and Morty memory game</h1>
    <h4>Current score: 0</h4>
    <h4>High score: 0</h4>
    <Cards data={data}/>
    </>
  )
}

export default App
