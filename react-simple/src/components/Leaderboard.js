import React from "react";
import Header from "./Header";
import MatchSummary from "./MatchSummary";
import FeaturedSection from "./FeaturedSection";

const Leaderboard = () => {
  return (
    <>
      <Header />
      <MatchSummary />
      <FeaturedSection />
      <div>Tabs: summary, scorecard (NZ/WI subtabs)</div>
    </>
  );
};
export default Leaderboard;
