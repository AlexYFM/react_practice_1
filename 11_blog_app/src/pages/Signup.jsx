import React from 'react'
import SignupComp from '../components/Signup' // or add an index.js and export this component as a part of an object
const Signup = () => {
    return (
		<div className='py-8'>
			<SignupComp />
		</div>
    )
}

export default Signup