import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {


  return (
    <>
    <div className="border border-grey p-3 ml-4 mr-90 mt-4 rounded-md shadow-lg">
 <h1 className="text-blue-600">loging form</h1>
 <div>
 <label>Email</label>
 <input type="Emial" placeholder='enter your Email' className='border border-grey-400 rounded-md p-2' />
 </div>

 <div>
 <label>Password</label>
 <input type="password" placeholder='enter your password' className='border border-grey-400 rounded-md p-2' />
 </div>

 
 <button type="submit" className='border border-grey-400 rounded-md p-2'>submit </button>
 </div>
    </>
  )
}

export default App
