import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router";

const Signin = () => {
    const [showPass, setShowPass] = useState(false);
    const navigate = useNavigate();
  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex">
        <div className="text-center lg:text-left">
          <h1 className="text-3xl font-bold mb-3 mt-4">Sign In now!</h1>
        </div>
        <div
          className="card  w-full h-full shrink-0 
    shadow-2xl border border-gray-200"
        >
          <div className="card-body">
            <form className="form ">
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input mb-1 mt-2"
                placeholder="Email"
              />
              <label className="label mt-3">Password</label>
              <div className="relative">
                <input
                  type={showPass?'text':'password'}
                  name="password"
                  className="input bg-[#F3F3F3] w-full mt-2"
                  placeholder="Password"
                  required
                />
                <button
                  onClick={()=>setShowPass(!showPass)}
                  type="button"
                  className="btn btn-sm text-gray-400 border-0 bg-[#F3F3F3] 
                  absolute top-3 right-1"
                >{
                    showPass ? <FaEyeSlash className="text-lg"></FaEyeSlash>
                 :
                <FaEye className="text-lg"></FaEye>
               
                }
                   </button>  
                   
              </div>
              <div>
                <Link to='/forget' className="link link-hover text-xs">Forgot password?</Link>
              </div>
              <button
                type="submit"
                className="btn btn-neutral w-full mt-4 mb-2 "
              >
               Signin
              </button>
              <p>
                Don't have an account?{" "}
                <span
                  onClick={() => navigate("/register")}
                  className="text-blue-700 
          font-bold hover:underline cursor-pointer text-xs"
                >
                  Register
                </span>
              </p>
            </form>
            <div className="flex flex-col text-center">
              <p className=" font-light text-xs m-4">Or</p>

              {/* Google */}
              <button className="btn bg-white text-black border-[#e5e5e5] mb-3">
                <svg
                  aria-label="Google logo"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <g>
                    <path d="m0 0H512V512H0" fill="#fff"></path>
                    <path
                      fill="#34a853"
                      d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                    ></path>
                    <path
                      fill="#4285f4"
                      d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                    ></path>
                    <path
                      fill="#fbbc02"
                      d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                    ></path>
                    <path
                      fill="#ea4335"
                      d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                    ></path>
                  </g>
                </svg>
                Signin with Google
              </button>

              {/* Facebook */}
              <button className="btn bg-[#1A77F2] text-white border-[#005fd8]">
                <svg
                  aria-label="Facebook logo"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                >
                  <path
                    fill="white"
                    d="M8 12h5V8c0-6 4-7 11-6v5c-4 0-5 0-5 3v2h5l-1 6h-4v12h-6V18H8z"
                  ></path>
                </svg>
                Signin with Facebook
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
