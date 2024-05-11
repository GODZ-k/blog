import React, { useState } from "react";
import axios from "axios"

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function registerUser(e) {
    e.preventDefault();

    const respose = await axios.post("http://localhost:3000/register", {
      email,
      password,
    });

    console.log(respose.data.msg);
  }

  return (
    <div className=" flex justify-center items-center w-full h-[50vh]">
      <form onSubmit={registerUser}>
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            size="50"
            className=" border-b border-b-black"
            placeholder="password"
            required
          />
        </div>
        <button
          className="bg-black rounded-sm text-white px-4 py-1 my-3"
          type="submit"
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
