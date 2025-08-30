import React, { use, useState } from 'react';

import { useLocation, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../../AuthProvider/AuthProvider';


const ResetPass = () => {
  const navigate = useNavigate();
     const location = useLocation();
  const passedEmail = location?.state?.email || '';
  const [email, setEmail] = useState(passedEmail);
  
    const {resetPassword} = use(AuthContext);


    const handleResetPass=e=>{
         e.preventDefault();
        const email = e.target.email.value;


        resetPassword(email)
        .then(()=>{
          Swal.fire("Check Your Email Inbox or Spam folder!", "A reset link has been sent to your email.", "success");
             window.open('https://mail.google.com', '_blank');

        }).then(()=>{

            navigate('/auth/signin');
        })
       .catch((error) => {
    // //.error(error.code, error.message);
    Swal.fire("Error", error.message, "error");
  });

    }
    return (
          <div className="hero bg-base-100 mt-24 ">
            <Helmet>
                <title>Reset password</title>
              </Helmet>
          <div className="hero-content flex-col lg:flex">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl mt-5 font-bold mb-5">Reset Password</h1>
              
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 
            shadow-2xl border border-gray-200 nob">
              <div className="card-body">
                <form onSubmit={handleResetPass} className="form space-y-1">
                  <label className="label">Email</label>
                  <input
                type="email"
                name="email"
                value={email}
                className="input input-bordered mb-2"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
              />
                  
                  <button type='submit' className="btn btn-neutral w-full
                   mt-4 mb-2 ">Send</button>
                  
                  
                </form>
             
              </div>
            </div>
          </div>
          
        </div>
    );
};

export default ResetPass;