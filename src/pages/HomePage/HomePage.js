import React, { useState, useEffect } from "react";
import MainNewsSlider from "../../components/MainnewsSlider/MainnewsSlider";
import FeaturedNewsSlider from "../../components/FeaturesNewsSlider/FeaturesNewsSlider";
import NewsWithSidebar from "../../components/NewsItems/NewsWithSideBar";
import axios from "axios";
import { CircularProgress, Typography, Box } from "@mui/material";

const HomePage = () => {
  const api_key = "0998ee5fea3545e8bfe655fddce913d5";
  const [newsArticle, setNewsArticle] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNewsArticle = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${api_key}`
        );
        setNewsArticle(response.data.articles.slice(0, 4));
        setLoading(false);
      } catch (error) {
        setError("Error fetching news data. Please try again later.");
        setLoading(false);
      }
    };

    fetchNewsArticle();
  }, []);

  return (
    <div>
      {/* <BreakingNews /> */}

      {loading && (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <CircularProgress />
        </Box>
      )}
      {error && (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <Typography variant="h6" color="error">
            {error}
          </Typography>
        </Box>
      )}
      {!loading && !error && newsArticle.length > 0 && (
        <>
          {" "}
          <MainNewsSlider />
          {/* <FeaturedNewsSlider />
          <NewsWithSidebar newsData={newsArticle} /> */}
        </>
      )}
    </div>
  );
};

export default HomePage;
