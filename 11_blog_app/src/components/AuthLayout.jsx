import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Protected = ({children, authentication = true}) => {
  
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()
  const [loader, setLoader] = useState(true)

  useEffect(() => {
    if(authentication && authStatus !== authentication){ // need auth but not authed
      navigate("/login")
    } else if (!authentication && authStatus !== authentication){ //don't need auth but already authed
      navigate("/")
    } 
    setLoader(false)
  }, [authStatus, authentication, navigate])

  return loader ? null : <>{children}</> // should have a loading component 
}

export default Protected