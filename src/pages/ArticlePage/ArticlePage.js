import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import NewsWithSidebar from "../../components/NewsItems/NewsWithSideBar";
import { Box, Typography, CircularProgress } from "@mui/material";

const ArticlePage = () => {
  const { article } = useParams();
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const apiKey = "0998ee5fea3545e8bfe655fddce913d5";

  useEffect(() => {
    const fetchArticle = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/everything?q=${article}&apiKey=${apiKey}`
        );
        setNewsData(response.data.articles);
      } catch (err) {
        setError("Error fetching news data.");
        console.error("Error fetching news data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [article]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [article]);

  return (
    <div>
      <Box mt={3} mb={3}>
        <Typography
          variant="h4"
          component="div"
          sx={{
            border: "1px solid #ccc",
            textTransform: "uppercase",
            fontWeight: "bold",
            padding: "20px",
            borderLeft: "100px solid blue",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
          }}
        >
          {article}
        </Typography>
      </Box>
      {loading ? (
        <Box display="flex" justifyContent="center" m={3}>
          <CircularProgress />
        </Box>
      ) : error ? (
        <p>{error}</p>
      ) : newsData.length === 0 ? (
        <p>No articles found for "{decodeURIComponent(article)}"</p>
      ) : (
        <NewsWithSidebar newsData={newsData} />
      )}
    </div>
  );
};

export default ArticlePage;
