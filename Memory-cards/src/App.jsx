import cards from './Data'
import './App.css'
import { useState,useEffect } from 'react'
import Cards from './Cards'

function App() {
const [data, setData] = useState(cards)

useEffect(() => {

  const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  setData(shuffleArray(data));
}, []);
{console.log(data)}
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
