import axios from "axios";
import React, { useState } from "react";
import {useNavigate} from "react-router-dom"

function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function LoginUser(e) {
    e.preventDefault();

    const response = await axios.post(
      "http://localhost:3000/login",
      {
        email,
        password,
      },
      {
        withCredentials: true,
      }
    );

    if(response.data){
      navigate("/")
    }else{
      alert(response.data.msg)
    }
  }
  return (
    <div className=" flex justify-center items-center w-full h-[50vh]">
      <form onSubmit={LoginUser}>
        <div className="input flex flex-col gap-2 mb-3">
          <label htmlFor="">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            size="50"
            className=" border-b border-b-black"
            placeholder="Email"
            required
          />
        </div>{" "}
        <div className="input flex flex-col gap-2 mb-3">
          <label htmlFor="">Password</label>
          <input
            type="password"
            size="50"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className=" border-b border-b-black"
            placeholder="password"
            required
          />
        </div>
        <button
          className="bg-black rounded-sm text-white px-4 py-1 my-3"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
