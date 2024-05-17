import { useState } from 'react'
import Search from './components/Search'
import './App.css'
import Navbar from './components/Navbar'

function App() {
 const [query, setQuery]= useState("")
  return (
    <div className="App">
      <Navbar/>
    <Search query = {query} setQuery = {setQuery}/>
    </div>
  )
}

export default App
