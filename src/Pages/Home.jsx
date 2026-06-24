import React from "react";
import HomeAbout from "../Components/Home/HomeAbout";
import HeroSlider from "../Components/Home/HeroSlider";
import HomeService from "../Components/Home/HomeService";
import HomeContacts from "../Components/Home/HomeContacts";
// import Team from "./Team/Team";

const Home = () => {
  return (
    <div>
      <HeroSlider />
      <HomeAbout />
      <HomeService />
      <HomeContacts />

      {/* <Team /> */}
    </div>
  );
};

export default Home;
