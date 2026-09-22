import React from "react";
import { useNavigate } from "react-router";
const Home = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/about");
  };
  return (
    <div>
      <p>Home</p>
      <button onClick={handleNavigate}>Aboutへ移動</button>
    </div>
  );
};

export default Home;
