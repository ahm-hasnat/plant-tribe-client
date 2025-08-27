import React, { use } from "react";
import Banner from "../../Components/Header/Banner";

import FeaturedGardeners from "../../Components/Featured/FeaturedGardeners";
import PastProjects from "../../Components/Projects/PastProjects";
import TrendingTips from "../../Components/TrendingTips/TrendingTips";

const Home = () => {
 
  return (
    <div className="bg-white">
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
