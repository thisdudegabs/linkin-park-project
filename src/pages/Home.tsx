import React, { FC } from "react";
import "../styles/home.css";
import LogoGif from "../assets/logos/logo.gif";

const Home: FC = () => {
  return (
    <div className="home">
      <img src={LogoGif} alt="Logo" className="logo" />
    </div>
  );
};

export default Home;
