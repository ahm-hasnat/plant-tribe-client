import React from 'react';

const ForgetPass = () => {
    return (
         <div className="hero bg-base-100 mt-24">
            
          <div className="hero-content flex-col lg:flex">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl mt-5 font-bold mb-5">Reset Password</h1>
              
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 
            shadow-2xl border border-gray-200">
              <div className="card-body">
                <form  className="form space-y-1">
                  <label className="label">Email</label>
                  <input
                type="email"
                name="email"
                
                className="input input-bordered mb-2"
               
                placeholder="Email"
                required
              />
                  
                  <button type='submit' className="btn btn-neutral w-full mt-4 mb-2 ">Reset</button>
                  
                  
                </form>
             
              </div>
            </div>
          </div>
          
        </div>
    );
};

export default ForgetPass;