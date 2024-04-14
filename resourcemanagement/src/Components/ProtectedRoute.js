import React from 'react'

import { Navigate } from "react-router-dom";


const ProtectedRoute = (props) => {
    const isUserLoggedIn=sessionStorage.getItem('isUserLoggedIn');
    console.log(isUserLoggedIn)
    if(isUserLoggedIn==undefined|| isUserLoggedIn == '')
    {
         return <Navigate to="/login"></Navigate>
    }
    else{
       return <div>{props.children}</div>//children is a buildin property that every react get 
    }
}

export default ProtectedRoute