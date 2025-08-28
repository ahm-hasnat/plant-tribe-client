import { use } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';


const UpdateTip = ({myTips}) => {
    const notify = () => toast("Tip submitted Successfully!");
const {user} = use(AuthContext);
 console.log(myTips);
const handleUpdate = (e) =>{
    e.preventDefault();
    const form = e.target;
    const name = user?.displayName;
    const email = user?.email;
    const formData = new FormData(form);
    const newData = Object.fromEntries(formData.entries());
     
    const updatedTips = {...newData,name,email};
    

    console.log(updatedTips);
}

    return (
        
<div>

<dialog id="my_modal_4" className="modal ">
    
  <div className="modal-box w-11/12 max-w-3xl max-h-[95vh] ">
  
    <ToastContainer/>
     <div className=" max-w-full px-4 pb-4  mx-auto  rounded-lg shadow-md bgt ">
       
     <div className='flex gap-1 items-center justify-center '>
     <img className='w-16 ' src="https://i.ibb.co.com/2YqJc0VT/cherry-blossom.png" alt="" />
      <h2 className="text-3xl font-bold  text-center big">Update your Garden Tip</h2>
       </div>
      
    <form onSubmit={handleUpdate}  className="space-y-4 ">

      
        <div>
      <label className="label">
           <span className="label-text big">Title</span>
          </label>
        <input
           defaultValue={myTips?.name}
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
           defaultValue={myTips.plantType}
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
          <select name="difficulty" className="select select-bordered w-full mt-1" required>
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
          <select name="category" className="select select-bordered w-full mt-1" required>
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
          <select name="availability" className="select select-bordered w-full mt-1" required>
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
              className="input input-bordered w-full bg-gray-100"
             
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
              className="input input-bordered w-full bg-gray-100"
              
              readOnly
            />
          </div>
        </div>

        
        <div className="text-center">
          <button type="submit" className="btn bg-[#204e51] hover:bg-[#f26b5e]
           text-white rounded mt-4">
            Submit
          </button>
        </div>
      </form>
    </div>
  <div className="modal-action">
      <form method="dialog">
      
        <button className="btn">Close</button>
      </form>
    </div>
  </div>

</dialog>
</div>

    );
};

export default UpdateTip;

<button className="btn" >
    open modal</button>