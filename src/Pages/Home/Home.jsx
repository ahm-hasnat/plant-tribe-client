import React, { use, useContext } from "react";
import Banner from "../../Components/Header/Banner";

import FeaturedGardeners from "../../Components/Featured/FeaturedGardeners";
import PastProjects from "../../Components/Projects/PastProjects";
import TrendingTips from "../../Components/TrendingTips/TrendingTips";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Loader from "../../Components/Loader/Loader";

const Home = () => {
  const { loading } = useContext(AuthContext);

  if (loading) {
    return <Loader />;
  };
  return (
    <div className="bg-base-100">
       <Helmet>
                <title>Plant Tribe-Home</title>
            </Helmet>
      <section className="z-0 top-10">
        <Banner></Banner>
      </section>

          <FeaturedGardeners></FeaturedGardeners>
          <PastProjects></PastProjects>
          <TrendingTips></TrendingTips>
    </div>
  );
};

export default Home;
