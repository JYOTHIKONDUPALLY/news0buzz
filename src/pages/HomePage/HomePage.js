import React from "react";
import styles from "./Homepage.module.css";
import Topbar from "../../components/Header/Header";
import Navbar from "../../components/navbar/navbar";
import MainNewsSlider from "../../components/MainnewsSlider/MainnewsSlider";
import FeaturedNewsSlider from "../../components/FeaturesNewsSlider/FeaturesNewsSlider";
import NewsWithSidebar from "../../components/NewsItems/NewsWithSideBar";
import Footer from "../../components/Footer/Footer";
import BreakingNews from "../../components/Breakingnews/BreakingNews";
const HomePage = () => {
  return (
    <div>
      <Topbar />
      <Navbar />
      <MainNewsSlider />
      {/* <BreakingNews /> */}
      <FeaturedNewsSlider />
      <NewsWithSidebar />

      <Footer />
    </div>
  );
};

export default HomePage;
