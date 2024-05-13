import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../Context/userContext'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'

function ProtectedRoutes({children}) {
    const {userInfo} = useContext(UserContext)
    const location =  useLocation()

    const [redirect , setRedirect ] = useState("")
    const [authenticated , setAuthenticated] = useState(false)

    useEffect(()=>{
        if(!userInfo.email){
            setAuthenticated(false)
        }else{
            setAuthenticated(true)
            setRedirect(location.pathname)
        }
    },[location,userInfo])
   

    console.log(redirect)

    if(!authenticated){
        return <Navigate to="/login"/>      
    }
    return children
}

export default ProtectedRoutes