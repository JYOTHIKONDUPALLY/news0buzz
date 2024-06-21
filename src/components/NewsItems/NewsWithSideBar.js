import React, { useState } from "react";
import { Container, Grid, Typography, Box, Pagination } from "@mui/material";
import NewsItem from "./NewsItem";
import SocialFollow from "../SocialMediaFollowers/SocialMediaFollowers";
import Newsletter from "../NewsLetters/NewsLetters";

const NewsWithSidebar = ({ newsData }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Calculate pagination
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentNewsData = newsData.slice(firstIndex, lastIndex);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

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
              News Articles
            </Typography>
          </Box>
          <Grid container spacing={3}>
            {currentNewsData.map((news, index) => (
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
          {newsData.length > itemsPerPage && (
            <Box m={3} display="flex" justifyContent="center">
              <Pagination
                count={Math.ceil(newsData.length / itemsPerPage)}
                page={currentPage}
                onChange={handlePageChange}
                color="primary"
                variant="outlined"
                shape="rounded"
              />
            </Box>
          )}
        </Grid>
        <Grid item xs={12} md={4}>
          <SocialFollow />
          <Newsletter />
        </Grid>
      </Grid>
    </Container>
  );
};

export default NewsWithSidebar;
