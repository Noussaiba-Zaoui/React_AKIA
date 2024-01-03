import React, { useState } from "react";
import { Link } from "react-router-dom";
import api from "../../api";

const SignUp = () => {
  const [clientName, setClientName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(false);

  const [errClientName, setErrClientName] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errPassword, setErrPassword] = useState("");

  const [successMsg, setSuccessMsg] = useState("");

  const handleName = (e) => {
    setClientName(e.target.value);
    setErrClientName("");
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail("");
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setErrPassword("");
  };

  const EmailValidation = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
  };

  const handleSignUp = async(e) => {
    e.preventDefault();
    if (checked) {
      if (!clientName) {
        setErrClientName("Enter your name");
      }
      if (!email) {
        setErrEmail("Enter your email");
      } else {
        if (!EmailValidation(email)) {
          setErrEmail("Enter a Valid email");
        }
      }

      if (!password) {
        setErrPassword("Create a password");
      } else {
        if (password.length < 6) {
          setErrPassword("Passwords must be at least 6 characters");
        }
      }

      if (
        clientName &&
        email &&
        EmailValidation(email) &&
        password &&
        password.length >= 6
      ) {

        try {
          // Send registration request to the Laravel API
          const response = await api.post('/register', {
            name: clientName,
            email: email,
            password: password,
          });
          console.log(response.data);
        setSuccessMsg(
          `Hello dear ${clientName}, Welcome you to AKIA Admin panel.Proceed to sign in`
        );
        setClientName("");
        setEmail("");
        setPassword("");
      }catch (error) {
        // Handle API request error
        console.error(error.response.data); 
      }
    }
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-r from-gray-200 to-gray-300" >
      <div className="w-full lgl:w-[500px] h-full flex flex-col justify-center">
        {successMsg ? (
          <div className="w-[500px] bg-white bg-opacity-80 p-8 rounded-md shadow-lg">
            <p className="text-green-500 font-medium font-titleFont mb-8">
              {successMsg}
            </p>
            <Link to="/signin">
              <button className="w-full h-10 bg-primeColor rounded-md text-gray-200 text-base font-titleFont font-semibold hover:bg-gray-800 hover:text-white duration-300 transition">
                Sign in
              </button>
            </Link>
          </div>
        ) : (
          <form className="w-full min-h-screen flex items-center justify-center bg-white bg-opacity-80 p-8 rounded-md shadow-lg">
            <div className="max-w-md w-full">
              <h1 className="font-serif text-3xl font-semibold mb-4 text-gray-800 text-center">
                Join AKIA and Unlock Exclusive Deals!
              </h1>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <label htmlFor="fullName" className="font-titleFont text-base font-semibold text-gray-800">
                    Full Name
                  </label>
                  <input
                    id="fullName"
                    onChange={handleName}
                    value={clientName}
                    className="w-full h-10 px-4 text-base font-medium rounded-md border-[1px] border-gray-400 outline-none focus:border-blue-500"
                    type="text"
                    placeholder="your full name here"
                  />
                  {errClientName && (
                    <p className="text-sm text-red-500 font-titleFont font-semibold">
                      <span className="font-bold italic mr-1">!</span>
                      {errClientName}
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="workEmail" className="font-titleFont text-base font-semibold text-gray-800">
                    Work Email
                  </label>
                  <input
                    id="workEmail"
                    onChange={handleEmail}
                    value={email}
                    className="w-full h-10 px-4 text-base font-medium rounded-md border-[1px] border-gray-400 outline-none focus:border-blue-500"
                    type="email"
                    placeholder="email@gmail.com"
                  />
                  {errEmail && (
                    <p className="text-sm text-red-500 font-titleFont font-semibold">
                      <span className="font-bold italic mr-1">!</span>
                      {errEmail}
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="password" className="font-titleFont text-base font-semibold text-gray-800">
                    Password
                  </label>
                  <input
                    id="password"
                    onChange={handlePassword}
                    value={password}
                    className="w-full h-10 px-4 text-base font-medium rounded-md border-[1px] border-gray-400 outline-none focus:border-blue-500"
                    type="password"
                    placeholder="Create password"
                  />
                  {errPassword && (
                    <p className="text-sm text-red-500 font-titleFont font-semibold">
                      <span className="font-bold italic mr-1">!</span>
                      {errPassword}
                    </p>
                  )}
                </div>
                <div className="flex items-start gap-2">
                  <input
                    onChange={() => setChecked(!checked)}
                    className="w-4 h-4 mt-1 cursor-pointer"
                    type="checkbox"
                  />
                  <label htmlFor="agree" className="text-sm text-gray-800 cursor-pointer">
                    I agree to the AKIA{" "}
                    <span className="underline">Terms of Service</span> and{" "}
                    <span className="underline">Privacy Policy</span>.
                  </label>
                </div>
                <button
                  onClick={handleSignUp}
                  className={`${
                    checked
                      ? "bg-blue-500 hover:bg-blue-700 cursor-pointer"
                      : "bg-gray-500 hover:bg-gray-500 cursor-none"
                  } w-full text-white text-base font-medium h-10 rounded-md hover:text-white duration-300 transition`}
                >
                  Create Account
                </button>
                <p className="text-sm text-center font-titleFont font-medium text-gray-800">
                  Already have an account?{" "}
                  <Link to="/signin" className="text-blue-500 underline transition">
                    Sign in
                  </Link>
                </p>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default SignUp;
