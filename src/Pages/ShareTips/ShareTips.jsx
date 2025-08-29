import React, { use } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import { Helmet } from 'react-helmet-async';

const ShareTips = () => {

    const notify = () => toast("Tip submitted Successfully!");
  
    const {user} = use(AuthContext);
    const handleSubmitTips = e =>{
         e.preventDefault();
    const form = e.target;
    const name = user?.displayName;
    const email = user?.email;
    const formData = new FormData(form);
    const newData = Object.fromEntries(formData.entries());
     
    const newTips = {...newData,name,email};
    

    console.log(newTips);
    // const {title,photo,plantType,difficulty,description,
    // category,availability} = tipsData;

      fetch('http://localhost:3000/tipsdata',{
        method : 'POST',
        headers : {
            'content-type' : 'application/json'
        },
        body : JSON.stringify(newTips)
      })
      .then(res=>res.json())
      .then(data=> {
         if(data.insertedId){

            notify();
            form.reset();
         }
      })

    }
    return (
         <div className="h-full kala flex">
          <div className=' max-w-3xl mx-auto p-8 bgt 
         rounded-lg shadow-md mb-16 mt-24'>
           <Helmet>
                <title>Plant Tribe-Share Tip</title>
            </Helmet>
            <ToastContainer></ToastContainer>
            <div className='flex gap-1 items-center justify-center '>
                <img className='w-16 mb-6' src="https://i.ibb.co.com/JjxGLYWY/nature.png" alt="" />
                <h2 className="text-3xl font-bold mb-6 text-center big">Share a Garden Tip</h2>
            </div>
      
      <form onSubmit={handleSubmitTips} className="space-y-4 ">

       
        <div>
          <label className="label">
            <span className="label-text big">Title</span>
          </label>
          <input
            type="text"
            name="title"
            placeholder="e.g. How you Grow Tomatoes Indoors"
            className="input input-bordered w-full mt-1"
            required
          />
        </div>

        <div>
          <label className="label">
            <span className="label-text big">Plant Type </span>
          </label>
          <input
            type="text"
            name="plantType"
            placeholder="e.g. Tomatoes"
            className="input input-bordered w-full mt-1"
            required
          />
        </div>

        <div>
          <label className="label">
            <span className="label-text big">Difficulty</span>
          </label>
          <select name="difficulty" className="select select-bordered 
          w-full mt-1" required>
            <option value="" disabled selected>Choose difficulty</option>
            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>
          </select>
        </div>

      
        <div>
          <label className="label">
            <span className="label-text big">Description</span>
          </label>
          <textarea
            name="description"
            className="textarea textarea-bordered w-full mt-1"
            placeholder="Write your gardening tip here..."
            rows={4}
            required
          ></textarea>
        </div>

      
        <div>
          <label className="label">
            <span className="label-text big">Image URL</span>
          </label>
          <input
            type="url"
            name="photo"
            placeholder="photo URL"
            className="input input-bordered w-full mt-1"
          />
        </div>

        
        <div>
          <label className="label">
            <span className="label-text big">Category</span>
          </label>
          <select name="category" className="select select-bordered 
          w-full mt-1" required>
            <option value=""  disabled selected>Choose category</option>
            <option>Composting</option>
            <option>Plant Care</option>
            <option>Vertical Gardening</option>
            <option>Indoor Gardening</option>
            <option>Organic</option>
          </select>
        </div>

        
        <div>
          <label className="label">
            <span className="label-text big">Availability</span>
          </label>
          <select name="availability" className="select select-bordered w-full 
          mt-1" required>
            <option value="" disabled selected>Choose availability</option>
            <option>Public</option>
            <option>Hidden</option>
          </select>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="label">
              <span className="label-text big">User Name</span>
            </label>
            <input
            value={user?.displayName}
              type="text"
              className="input input-bordered w-full bg-gray-100 kala"
             
              readOnly
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text big">User Email</span>
            </label>
            <input
            value={user?.email}
              type="email"
              className="input input-bordered w-full kala bg-gray-100"
              
              readOnly
            />
          </div>
        </div>

       
        <div className="text-center">
          <button type="submit" className="btn bg-[#204e51] hover:bg-[#f26b5e]
           text-white rounded mt-4">
            Share Tip
          </button>
        </div>
      </form>
      </div>
    </div>
    );
};

export default ShareTips;



