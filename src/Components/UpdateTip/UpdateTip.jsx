import { use } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

import Swal from "sweetalert2";

const UpdateTip = ({ singleTip,setMyTips }) => {
    
  const {
    _id,
    title,
    photo,
    plantType,
    description,
   
  } = singleTip;

  //.log(_id);
  const { user } = use(AuthContext);
  //  //.log(singleTip);
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = user?.displayName;
    const email = user?.email;
    const formData = new FormData(form);
    const newData = Object.fromEntries(formData.entries());

    const updatedTips = { ...newData, name, email };

    fetch(`https://plant-tribe-server.onrender.com/alltips/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedTips),
    })
      .then((res) => res.json())
      .then((data) => {
        //.log(data);
        if (data.modifiedCount) {
         
             fetch("https://plant-tribe-server.onrender.com/alltips")
      .then((res) => res.json())
      .then((data) => {
        const userTips = data.filter(tip => tip.email === user?.email);
        setMyTips(userTips);
        });
           
          Swal.fire({
            icon: "success",
            title: "Tip Updated!",
            text: "Your gardening tip was successfully updated.",
            timer: 2000,
            showConfirmButton: false,
             target: document.getElementById("my_modal_4"),
          });
         


        }
      });
  };

  return (
    <div>
      <dialog id="my_modal_4" className="modal ">
       <div className="modal-box w-full max-w-3xl max-h-[95vh] overflow-y-auto">
          <div className="w-full px-4 pb-6 sm:px-6 mx-auto rounded-lg shadow-md bgt">
            <div className="flex gap-1 items-center justify-center ">
              <img
                className="w-16 "
                src="https://i.ibb.co.com/2YqJc0VT/cherry-blossom.png"
                alt=""
              />
              <h2 className="text-xl md:text-3xl font-bold  text-center big">
                Update your Garden Tip
              </h2>
            </div>

            <form onSubmit={handleUpdate} className="space-y-4 ">
              <div>
                <label className="label">
                  <span className="label-text big">Title</span>
                </label>
                <input
                  defaultValue={title}
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
                  defaultValue={plantType}
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
                <select
                  name="difficulty"
                  className="select select-bordered w-full mt-1"
                  required
                >
                  <option value="" selected disabled>
                    Choose difficulty
                  </option>
                  <option value="Easy">Easy</option>
                  <option value="Medium">Medium</option>
                  <option value="Hard">Hard</option>
                </select>
              </div>

              <div>
                <label className="label">
                  <span className="label-text big">Description</span>
                </label>
                <textarea
                  name="description"
                  defaultValue={description}
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
                  defaultValue={photo}
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
                <select
                  name="category"
                  className="select select-bordered w-full mt-1"
                  required
                >
                  <option value="" selected disabled>
                    Choose category
                  </option>
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
                <select
                  name="availability"
                  className="select select-bordered w-full mt-1"
                  required
                >
                  <option value="" disabled selected>
                    Choose availability
                  </option>
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
                <button
                  type="submit"
                  className="btn bg-[#204e51] hover:bg-[#f26b5e]
           text-white rounded mt-4"
                >
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

<button className="btn">open modal</button>;
