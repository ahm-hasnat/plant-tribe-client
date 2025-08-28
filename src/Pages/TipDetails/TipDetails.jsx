import React from "react";
import { FaHeart, FaThumbsUp } from "react-icons/fa";
import { useLoaderData, useParams } from "react-router";
import { GiVineLeaf } from "react-icons/gi";

const TipDetails = () => {
  const { id } = useParams();
  const tipsData = useLoaderData();

  const singleTip = tipsData.find((tip) => tip._id === id);
  const {
    title,
    plantType,
    difficulty,
    availability,
    photo,
    category,
    description,
    name,
  } = singleTip;
  return (
    <div className="max-w-5xl mx-auto my-24 p-6">
        <h1 className="text-4xl font-bold text-center mb-2 big flex justify-center
         items-center gap-2">
  <GiVineLeaf className="text-green-600 text-6xl" />
Explore  Garden Tip 
</h1>
<p className="text-center small text-sm mb-12">
  Discover helpful insights and detailed guidance shared by fellow garden enthusiasts.
</p>

    <div className=" bg-base-200 p-10
    rounded-lg shadow-md relative">
        
      <div className="flex flex-col  gap-10 ">
        {/* Image */}
        <div className="rounded-xl overflow-hidden ">
          <img src={photo} alt={title} className="w-full h-112  rounded-xl" />
        </div>

        {/* Tip Info */}
        <div className="flex flex-row justify-between">
        <div className="flex flex-col items-start pl-4 justify-center gap-2 w-full ">
          <h1 className="text-3xl font-bold mb-2 big">{title}</h1>
          <p className="badge badge-secondary text-sm mb-4">{category}</p>

          <p className="mb-3 big  dark:text-gray-300 text-sm
           leading-relaxed font-semibold mr-2"> Description :<span className="small font-medium ml-2">  
             {description}</span>
          </p>

          <div className="grid grid-cols-2 gap-6 text-sm text-gray-700
           dark:text-gray-300">
            <p className="big font-semibold">Plant Type : <span className="badge badge-dash  small font-medium ml-2">  
             {plantType}</span></p>
            <p className="big font-semibold">Difficulty : <span className=" badge badge-dash badge-sm small font-medium ml-2">  
             {difficulty}</span></p>
            <p className="big font-semibold">Author : <span className="badge badge-dash small font-medium ml-2">  
             {name}</span></p>
            <div className="flex items-center gap-4 big font-semibold">
              <p className="big font-semibold">Total Likes :</p>{" "}
              <span className="flex items-center gap-1 badge badge-dash">
                <FaHeart className="text-red-600"/> 7
              </span>
            </div>
          </div>
           
        
       
       </div>
       <div className="p-0"><span className="badge badge-soft badge-success">{availability}</span></div>
        </div>
       
      </div>

      <div className="mt-4 flex items-center justify-center pt-4">
        <button className={`btn btn-lg `}>
          <FaThumbsUp className="text-3xl text-blue-600" />
        </button>
      </div>
    </div>
    </div>
  );
};

export default TipDetails;
