import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 const Username = "M Ashbar"
 const Avatar ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF9W7zKQKJ25KD6r9VYVhJq96fZhM22Y278g&s"
 const loggedIn = true

 

  return (
    <>
      <h1>hello {Username}    </h1>
      <img 
      src={Avatar} 
      height={50}
      width={300}
      alt="ashbar"
      className='photo'
      />

      

      <button>
        {loggedIn ? "logout" : "login" }
      </button>
    </>

  )
}

export default App
