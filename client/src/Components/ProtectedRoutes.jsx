import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../Context/userContext'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'

function ProtectedRoutes({children}) {
    const {userInfo} = useContext(UserContext)
    const location =  useLocation()

    if(!userInfo){
        return <Navigate to="/login"/>      
    }
    return children
}

export default ProtectedRoutes