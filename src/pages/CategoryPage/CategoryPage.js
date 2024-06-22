import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import NewsWithSidebar from "../../components/NewsItems/NewsWithSideBar";
import { Box, Typography, CircularProgress } from "@mui/material";

const api_key = "0998ee5fea3545e8bfe655fddce913d5";

const CategoryPage = () => {
  const { category } = useParams();
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${api_key}`
        );
        setNewsData(response.data.articles);
      } catch (error) {
        setError("Error fetching news data.");
        console.error("Error fetching news data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [category]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [category]);

  return (
    <div>
      {/* heading */}
      <Box mt={3} mb={3}>
        <Typography
          variant="h4"
          component="div"
          sx={{
            border: "1px solid #ccc",
            textTransform: "uppercase",
            fontWeight: "bold",
            padding: "5px",
            borderLeft: "10px solid blue",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
            margin: "50px 50px 10px 50px",
          }}
        >
          {category}
        </Typography>
      </Box>
      {/* loading */}
      {loading ? (
        <Box display="flex" justifyContent="center" m={3}>
          <CircularProgress />
        </Box>
      ) : error ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            m: 4,
            p: 2,
            textAlign: "center",
          }}
        >
          <Typography variant="h6" color="error">
            {error}
          </Typography>
        </Box>
      ) : newsData.length === 0 ? (
        // exception handling
        <Box display="flex" justifyContent="center" m={3} p={3}>
          <Typography
            variant="body1"
            color="warning"
            sx={{
              fontWeight: "bold",
              padding: "30px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
            }}
          >
            We are working on that, right now no such category is available. Try
            something Else!!
          </Typography>
        </Box>
      ) : (
        // news
        <NewsWithSidebar newsData={newsData} />
      )}
    </div>
  );
};

export default CategoryPage;
