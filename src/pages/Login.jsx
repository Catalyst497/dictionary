import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState("");
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/login", { username, password });
      if (res.data?.message == "Successful Login") {
        console.log(res.data, res.data?.token);
        localStorage.setItem('token', res.data?.token);
        // Cookies.set("token", res.data.token, {
        //   secure: true,
        //   sameSite: "Strict",
        // });
        // On Successful login, clear email and password fields.
        setEmail("");
        setPassword("");
        navigate("/");
      } else {
        console.log(res.data);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="Login Page">
      <form method="POST" className="grid text-center gap-4 justify-center">
        <div className="text-[1.5rem] md:text-[3rem]">Login</div>
        {/* <input
          type="email"
          // name="email"
          id="email"
          placeholder="Enter your email address"
          onChange={(e) => setEmail(e.target.value)}
          defaultValue={email}
        /> */}
        <input
          type="username"
          // name="email"
          id="username"
          placeholder="Enter your username"
          onChange={(e) => setUsername(e.target.value)}
          defaultValue={username}
        />
        <input
          type="password"
          id="passsword"
          className=""
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          defaultValue={password}
        />
        <input
          type="submit"
          value="Yeeeeeee!!"
          className="bg-[gray] rounded-md"
          onClick={handleLoginSubmit}
        />
      </form>
    </div>
  );
}

export default Login;