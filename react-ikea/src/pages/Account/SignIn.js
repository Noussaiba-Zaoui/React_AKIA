import React, { useState } from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { Link ,  useNavigate } from "react-router-dom";

import api from "../../api";
const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errPassword, setErrPassword] = useState("");
  const [authError, setAuthError] = useState("");




  const navigate = useNavigate();


  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail("");
    setAuthError("");
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setErrPassword("");
    setAuthError("");
  };

  const handleSignUp = async(e) => {
    e.preventDefault();


    setAuthError("");


    if (!email) {
      setErrEmail("Enter your email");
      setAuthError("");
    }

    if (!password) {
      setErrPassword("enter a password");
      setAuthError("");
    }

  
      if (email && password) {
        try {
          const response = await api.post('/login', {
            email:email,
            password:password,
          });
          console.log(response.data);
        
          if (response.data.status) {
            // If sign-in is successful, navigate to the homepage
            navigate('/');
          }
      setEmail("");
      setPassword("");
      }catch (error) {
      console.error(error.response.data); 
      setAuthError("Authentication failed. Please check your credentials.");
    }
   }
  
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-r from-gray-200 to-gray-300">
     
      <div className="w-full lg:w-[500px] h-full flex flex-col justify-center">
        
          <form className="w-full min-h-screen flex items-center justify-center bg-white bg-opacity-80 p-8 rounded-md shadow-lg">
            <div className="max-w-md w-full">
              <h1 className="font-serif text-3xl font-semibold mb-4 text-gray-800 text-center">
                Sign in to AKIA
              </h1>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <p className="font-titleFont text-base font-semibold text-gray-600">
                    Work Email
                  </p>
                  <input
                    onChange={handleEmail}
                    value={email}
                    className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                    type="email"
                    placeholder="email@gmail.com"
                  />
                  {errEmail && (
                    <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                      <span className="font-bold italic mr-1">!</span>
                      {errEmail}
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-.5">
                  <p className="font-titleFont text-base font-semibold text-gray-600">
                    Password
                  </p>
                  <input
                    onChange={handlePassword}
                    value={password}
                    className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                    type="password"
                    placeholder="Enter your password"
                  />
                  {errPassword && (
                    <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                      <span className="font-bold italic mr-1">!</span>
                      {errPassword}
                    </p>
                  )}
                </div>

                {authError && (
                <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                  <span className="font-bold italic mr-1">!</span>
                  {authError}
                </p>
              )}

                <button
                  onClick={handleSignUp}
                  className="bg-gray-700 hover:bg-black text-gray-200 hover:text-white cursor-pointer w-full text-base font-medium h-10 rounded-md duration-300"
                >
                  Sign In
                </button>
                <p className="text-sm text-center font-titleFont font-medium">
                  Don't have an Account?{" "}
                  <Link to="/signup">
                    <span className="hover:text-blue-600 duration-300">
                      Sign up
                    </span>
                  </Link>
                </p>
              </div>
            </div>
          </form>
        
      </div>
    </div>
  );
};

export default SignIn;
