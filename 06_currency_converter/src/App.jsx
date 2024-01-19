import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { InputBox } from './components'
import useCurrency from '../hooks/useCurrency'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('cny')
  const [converted, setConverted] = useState(0)

  const currencyInfo = useCurrency(from)
  const options = Object.keys(currencyInfo)

  const convert = () => {
    setConverted(amount * currencyInfo[to])
  }

  const swap = () => {
    setFrom(to)
    setTo(from)
    setAmount(converted)
    setConverted(amount)
  }

  return (
    <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
    style={{backgroundImage: `url(https://images.pexels.com/photos/4497591/pexels-photo-4497591.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`}}>
      <div className='w-full'>
        <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
            <form onSubmit={(e) => {
              e.preventDefault()
              convert()
            }}>
              <div className='w-full mb-1'>
                <InputBox
                label="from"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                onAmountChange={(a) => setAmount(a)}
                selectedCurrency={from}
                />
              </div>
              <div className='relative w-full h-0.5'>
                <button
                onClick={swap}
                className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md bg-blue-600 text-white px-2.5 py-1 border-none'>Swap</button>
              </div>
              <div className='w-full mb-1'>
                <InputBox
                label="to"
                amount={converted}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectedCurrency={to}
                />
              </div>
              <button type='submit' className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'>Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default App
