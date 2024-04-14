import React from 'react'
import {Navigate} from 'react-router-dom'

const LogOut = () => {
  
    sessionStorage.removeItem("isUserLoggedIn");
    sessionStorage.removeItem("username");

    <Navigate to="/login"></Navigate>
}

export default LogOut