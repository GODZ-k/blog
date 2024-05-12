import React, { useContext, useEffect, useState } from "react";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../../Context/userContext.jsx";
function Header() {
  const {setUserInfo , userInfo} = useContext(UserContext)

  const navigate = useNavigate()

  async function getProfile() {
    const res = await axios.get("http://localhost:3000/profile", {
      withCredentials: true,
    });

    const data = res.data;

    setUserInfo(data);
  }
  useEffect(() => {
    getProfile();
  }, []);


  async function logoutUser(){

    const res = await axios.get("http://localhost:3000/logout",{
      withCredentials:true
    })
    if(!res){
      console.log("error")
    }
    setUserInfo({})
    console.log(res.data.msg)
    
    navigate("/login")
  }

  const user = userInfo.email

  return (
    <div className="header">
      <Link to="/" className="logo">
        Logo
      </Link>
      <div className="auth">
        { user && (
          <>
          <Link to="/create" className="px-3">Add post</Link>
          <Link className=" bg-black px-3 text-white py-2 rounded-sm" onClick={logoutUser}>Logout</Link>
          </>
        )}
        {!user && 
        ( <>
        <Link to={"/login"} className="px-3">
          Login
        </Link>
        <Link
          to={"/Signup"}
          className=" bg-black px-3 text-white py-2 rounded-sm"
        >
          Signup
        </Link>
        </>)}
      </div>
    </div>
  );
}

export default Header;
