import React, {useId} from 'react'

const InputBox = ({label, amount, onAmountChange, onCurrencyChange, currencyOptions = [], 
    selectedCurrency = "usd", amountDisabled = false, currecyDisabled = false, className = "",}) => {

    const id = useId() // not necessary but standard practice 
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
        <div className='w-1/2'>
            <label className='text-black/40 mb-2 inline-block' htmlFor={id}>{label}</label>
            <input type="number" 
            id = {id}
            className='outline-none w-full bg-transparent py-1.5'
            placeholder='Amount'
            disabled={amountDisabled}
            value={amount}
            onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}/>
        </div>
        <div className='w-1/2 flex flex-wrap justify-end text-right'>
            <p className='text-black/40 mb-2 w-full'>Currency Type</p>
            <select className='rounded-lg p-1 bg-blue-100 cursor-pointer outline-none'
            value={selectedCurrency}
            onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
            disabled={currecyDisabled}>
                {currencyOptions.map((currency) =>  // don't use {}, returning a jsx thing
                    (<option value={currency} key={currency} className='text-end'>{currency}</option>)
                )}
            </select>
        </div>
    </div>
  )
}

export default InputBox