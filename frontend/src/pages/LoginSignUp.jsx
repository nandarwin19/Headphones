import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginSignup = () => {
  const [toggleChange, setToggleChange] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });

  const toggleForm = () => {
    setToggleChange(!toggleChange);
  };

  const login = async () => {
    let responseData;
    await fetch("http://localhost:4000/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => (responseData = data));

    if (responseData.success) {
      localStorage.setItem("auth-token", responseData.token);
      window.location.replace("/");
    } else {
      toast.error(responseData.errors);
    }
  };

  const signup = async () => {
    console.log("Signup is here", formData);
    let responseData;
    await fetch("http://localhost:4000/signup", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => (responseData = data));

    if (responseData.success) {
      localStorage.setItem("auth-token", responseData.token);
      window.location.replace("/");
    } else {
      toast.error(responseData.errors);
    }
  };

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="h-screen w-full flex items-center justify-center bg-gray-100 font-poppins">
      <div className="w-11/12 mx-auto pt-10">
        <ToastContainer />
        <div className="w-full max-w-sm mx-auto bg-white/50 backdrop-blur-md rounded-lg p-8 border-2 border-gray-300/60 shadow-lg shadow-gray-300/50">
          <h1 className="text-2xl mb-5 text-center font-bold">
            {toggleChange ? "Sign In" : "Sign Up"}
          </h1>
          <div className="flex flex-col gap-5 mt-8">
            {!toggleChange && (
              <input
                type="text"
                placeholder="Enter your username"
                value={formData.username}
                onChange={changeHandler}
                className="input-field"
                name="username"
              />
            )}
            <input
              name="email"
              value={formData.email}
              onChange={changeHandler}
              type="email"
              placeholder="Enter your email"
              className="input-field"
            />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={changeHandler}
              placeholder="Enter your password"
              className="input-field"
            />
          </div>
          <button
            onClick={() => (toggleChange ? login() : signup())}
            className="w-full mt-5 py-2 text-white bg-black1 font-medium rounded-lg"
          >
            Continue
          </button>
          <p className="text-gray-600 text-sm mt-5">
            {toggleChange
              ? "Don't have an account? "
              : "Already have an account? "}
            <span
              className="cursor-pointer text-gray-500 font-semibold"
              onClick={toggleForm}
            >
              {toggleChange ? "Register" : "Sign In"}
            </span>
          </p>
          <div className="flex items-center mt-7 gap-2 text-gray-600 text-xs">
            <input
              type="checkbox"
              name=""
              id=""
              className="cursor-pointer w-4 h-4"
            />
            <p>By continuing, I agree to the terms of use & privacy policy.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
