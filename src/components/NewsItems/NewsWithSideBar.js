import React, { useState, useEffect } from "react";
import { Container, Grid, Typography, Box, Link } from "@mui/material";
import axios from "axios";
import NewsItem from "./NewsItem";
import SocialFollow from "../SocialMediaFollowers/SocialMediaFollowers";
const api_key = "0998ee5fea3545e8bfe655fddce913d5";
const apiUrl = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${api_key}`;

const NewsWithSidebar = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(apiUrl);
        setNewsData(response.data.articles.slice(0, 4));
      } catch (error) {
        console.error("Error fetching news data:", error);
      }
    };

    fetchNews();
  }, []);

  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Box mt={3} mb={3}>
            <Typography
              variant="h4"
              component="span"
              sx={{
                textTransform: "uppercase",
                fontWeight: "bold",
                borderBottom: "5px solid blue",
              }}
            >
              Latest Article
            </Typography>
          </Box>
          <Grid container spacing={3}>
            {newsData.map((news, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                key={index}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <NewsItem
                  image={news.urlToImage}
                  category={news.source.name}
                  date={news.publishedAt}
                  title={news.title}
                  description={news.description}
                  authorImage={"img/user.jpg"}
                  authorName={news.author || "Unknown"}
                  url={news.url}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12} md={4}>
          <SocialFollow />
        </Grid>
      </Grid>
    </Container>
  );
};

export default NewsWithSidebar;
