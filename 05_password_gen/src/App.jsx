import { useState, useCallback, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [len, setLen] = useState(8)
  const [nall, setNall] = useState(false)
  const [call, setCall] = useState(false)
  const [password, setPassword] = useState("")
  
  const passwordRef = useRef(null)

  const genPass = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + "ABCDEFGHIJKLMNOPQRSTUVWXYZ".toLowerCase()
    if(nall) str += "0123456789"
    if(call) str += "!@#$%^&*()_+"

    for(let i=0; i<len; i++){
      const rand = Math.floor(Math.random()*str.length)
      pass += str.charAt(rand)
    }

    setPassword(pass)
  }, [len, nall, call])

  useEffect(() => {
    genPass()
  }, [len, nall, call])

  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-blue-400'>
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text"
        value={password}
        className='outline-none w-full py-1 px-3'
        placeholder='Password'
        readOnly
        ref={passwordRef}
        />
        <button className='outline-none bg-blue-800 text-white py-0.5 shrink-0 mx-auto px-3' onClick={() => {
          navigator.clipboard.writeText(password)
          passwordRef.current?.select()
          }}>
          copy
        </button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input
          type='range'
          min={6}
          max={25}
          value={len}
          className='cursor-pointer'
          onChange={(e) => setLen(e.target.value)} 
          id='Length'/>
          <label htmlFor='Length'>Length: {len}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox"
          defaultChecked={nall}
          id='Numbers'
          onChange={() => setNall((prev) => !prev)} />
          <label htmlFor='Numbers'>Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox"
          defaultChecked={call}
          onChange={() => setCall((prev) => !prev)} 
          id='Characters'/>
          <label htmlFor='Characters'>Characters</label>
        </div>
      </div>
      
    </div>
  )
}

export default App
