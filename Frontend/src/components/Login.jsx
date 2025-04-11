import React from "react";
import { useState , useRef } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
    const navigate = useNavigate();
    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const EmailRef = useRef();
    const PasswordRef = useRef();
    const [Login, setLogin] = useState(false);
    const [FirstName, setFirstName] = useState("Kavi")
    const [LastName, setLastName] = useState("Sharma")
    const [Email, setEmail] = useState("Kavi@gmail.com")
    const [Password, setPassword] = useState("kavi@123")
    const handleForm = (e)=>{
        e.preventDefault();
        console.log({
            FirstName,
            LastName,
            Email,
            Password,
            
        })
      {navigate("/dashboard")}
    }
    const handleLogin = ()=>{
      setLogin((prev)=>!prev);
    }
    
  return (
    <div className="heading w-[100%] h-[100%] bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500 grid grid-cols-2 relative">
      <div className="col-span-1">
        <div className="w-[100%] h-[100%] ">
          <div className="w-full h-full logo-font flex flex-col justify-center items-center m-auto">
            <span className="sm:text-7xl text-3xl">LearnScope</span>
            <span className="text-2xl">
              "Empower your teaching with live student insights."
            </span>
          </div>
        </div>
      </div>

      <div className="col-span-1 w-full h-full flex justify-center items-center flex-col relative">
        <div className="login-font sm:text-4xl text-2xl absolute top-4">{!Login ? "SIGN-UP" : "LOGIN"}</div>
        <div className="w-[80%] sm:h-[60%] h-[62%] bg-gradient-to-br from-[#3a7bd5] to-[#3a6073] absolute top-16">
          <form onSubmit={handleForm} className="w-full h-full flex flex-col justify-start items-center">
            {!Login &&<div className="w-full max-w-xl flex items-center justify-between m-4">
              <label htmlFor="firstName" className="w-32 text-white sm:text-[20px] text-[12px]">
                First-Name
              </label>
              <input
                ref={firstNameRef}
                type="text"
                id="firstName"
                onChange={(e)=>setFirstName(e.target.value)}
                value={FirstName}
                className="border border-b-slate-400 outline-0 w-2/3 sm:px-2 sm:py-1 rounded mr-2"
              />
            </div>}
            {!Login && <div className="w-full max-w-xl flex items-center justify-between m-4">
              <label htmlFor="lastName" className="w-32 text-white sm:text-[20px] text-[12px]">
                Last Name
              </label>
              <input
                ref={lastNameRef}
                type="text"
                id="lastName"
                onChange={(e)=>setLastName(e.target.value)}
                value={LastName}
                className="border border-b-slate-400 outline-0 w-2/3 sm:px-2 sm:py-1 rounded mr-2"
              />
            </div>}

            <div className="w-full max-w-xl flex items-center justify-between m-4">
              <label htmlFor="email" className="w-32 text-white sm:text-[20px] text-[12px]">
                Email
              </label>
              <input
                ref={EmailRef}
                type="text"
                id="email"
                onChange={(e)=>setEmail(e.target.value)}
                value={Email}
                className="border border-b-slate-400 outline-0 w-2/3 sm:px-2 sm:py-1 rounded mr-2"
              />
            </div>

            <div className="w-full max-w-xl flex items-center justify-between m-4">
              <label htmlFor="password" className="w-32 text-white sm:text-[20px] text-[12px]">
                Password
              </label>
              <input
                ref={PasswordRef}
                type="password"
                id="password"
                onChange={(e)=>setPassword(e.target.value)}
                value={Password}
                className="border border-b-slate-400 outline-0 w-2/3 sm:px-2 sm:py-1 rounded mr-2"
              />
            </div>
            <div><button className="border border-white bg-slate-500 rounded-2xl sm:p-4 p-2 cursor-pointer hover:bg-white transition-all " type="submit">Submit</button></div>
            
          </form>
          <div className=" mt-3 flex justify-center flex-col items-center">
              <div className="mt-1">{!Login ? "Already have an account?" : "Don't have an account?"}</div>
              <button onClick={handleLogin} className="border border-white  rounded-2xl sm:p-4 p-2 mt-2 cursor-pointer hover:bg-white transition-all ">Continue to {!Login ? "Login" : "Signup"}</button>
          </div>
          

        </div>
      </div>
    </div>
  );
};

export default Login;
