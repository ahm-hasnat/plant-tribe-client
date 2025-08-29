import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import Lottie from 'lottie-react';
import { Helmet } from 'react-helmet-async';

const ErrorPage = () => {
  const navigate = useNavigate();
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch("https://404-error-doodle-animation.tiiny.site/404-Error-Doodle-animation.json")
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch((err) => console.error("Failed to load animation:", err));
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-base-200 p-4">
      <Helmet>
        <title>Error - Page Not Found</title>
      </Helmet>
 <h1 className="text-3xl font-bold my-6">Oops! Something went wrong.</h1>
      <div className="w-full max-w-xs sm:max-w-md">
        {animationData && (
          <Lottie animationData={animationData} loop={true} />
        )}
      </div>

     
      <p className="text-gray-600 mt-2 mb-6 text-center">
        Looks like this page flew away with the wind.
      </p>

      <button
        onClick={() => navigate('/')}
        className="btn btn-primary px-6 py-2 rounded-lg"
      >
        Go Back Home
      </button>
    </div>
  );
};

export default ErrorPage;
