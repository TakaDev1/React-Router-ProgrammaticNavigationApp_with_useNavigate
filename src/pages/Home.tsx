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
      <button
        className="bg-gray-500 text-white cursor-pointer hover:opacity-80 transition rounded-full w-1/4 py-2 my-10"
        onClick={handleNavigate}
      >
        Aboutへ移動
      </button>
    </div>
  );
};

export default Home;
