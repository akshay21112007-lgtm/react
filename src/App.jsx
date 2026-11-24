import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import ProductStore from './component/productstore'
function App() {


  return (
    <>
    <div className="border border-grey p-10 ml-4 mr-90 mt-4 rounded-md shadow-lg bg-blue-200">
 <h1 className="text-center">loging form</h1>
 <br />
 <div className='flex items-center'>
 <label>Email</label>
 <input type="Emial" placeholder='enter your Email' className='ml-15 border border-grey-400 rounded-md p-2'/>
 </div>
<br />
 <div className='flex items-center'>
 <label>Password</label>
 <input type="password" placeholder='enter your password' className='ml-8 border border-grey-400 rounded-md p-2 ' />
 </div>
<br />
 <div className='flex items-center'>
 <button type="submit" className='ml-40 border border-grey-400 rounded-md p-2  '>submit </button>
 </div>
 </div>



<ProductStore/>

    </>
  )
}

export default App
