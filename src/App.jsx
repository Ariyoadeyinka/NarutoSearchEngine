import { useState } from 'react'
import Search from './components/Search'
import './App.css'

function App() {
 const [query, setQuery]= useState("")
  return (
    <div className="App">
    <Search query = {query} setQuery = {setQuery}/>
    </div>
  )
}

export default App
