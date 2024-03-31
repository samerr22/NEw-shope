import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet, Navigate } from 'react-router-dom'

export default function OnlysellarPrivateRoute() {

    const { currentUser } = useSelector((state) => state.user);
    return currentUser.isInventManger ? <Outlet/> : <Navigate to='/sign-in'/>
  
}
 