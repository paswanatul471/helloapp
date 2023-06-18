import React from 'react'
import './App.css';
import { Link } from 'react-router-dom';
export function Home(){
  return(
    <div>
      <nav>
        <Link to="/Home">Home</Link>
        <Link to="/About">About</Link>
        
      </nav>
    <h1>Home</h1>
  </div>
  )
  

}

export function About(){

return(
  <div>
    <nav>
        <Link to="/Home">Home</Link>
        <Link to="/About">About</Link>
        
      </nav>
    <h1>About</h1>
  </div>
)

}



export function App() {
  return (
    <>
    <Home/>
    </>
  )
}

