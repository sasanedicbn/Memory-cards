import cards from './Data'
import './App.css'
import { useState } from 'react'
import Cards from './Cards'

function App() {
const [data, setData] = useState(cards)

  return (
    <>
    <Cards data={data}/>
    </>
  )
}

export default App
