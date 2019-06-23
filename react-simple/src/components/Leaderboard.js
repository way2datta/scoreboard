import React from "react";
import Header from "./Header";
import MatchSummary from "./MatchSummary";
const Leaderboard = () => {
  return (
    <>
      <Header />
      <MatchSummary />
      <div>Match outcome</div>
      <div>Featured section</div>
      <div>Tabs: summary, scorecard (NZ/WI subtabs)</div>
    </>
  );
};
export default Leaderboard;
