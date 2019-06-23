import React from "react";
import Header from "./Header";
import MatchSummary from "./MatchSummary";
import FeaturedSection from "./FeaturedSection";
import Tabs from "./Tabs";

const Leaderboard = () => {
  return (
    <div className="container">
      <Header />
      <MatchSummary />
      <FeaturedSection />
      <Tabs/>
    </div>
  );
};
export default Leaderboard;
