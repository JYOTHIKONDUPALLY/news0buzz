import React from "react";
import { Container, Grid, Typography, Box, Link } from "@mui/material";
import NewsItem from "./NewsItem";

const newsData = [
  {
    image: "img/news-700x435-1.jpg",
    category: "Business",
    date: "Jan 01, 2045",
    title: "Lorem ipsum dolor sit amet elit...",
    description:
      "Dolor lorem eos dolor duo et eirmod sea. Dolor sit magna rebum clita rebum dolor stet amet justo",
    authorImage: "img/user.jpg",
    authorName: "John Doe",
    views: 12345,
    comments: 123,
  },
  {
    image: "img/news-700x435-2.jpg",
    category: "Business",
    date: "Jan 01, 2045",
    title: "Lorem ipsum dolor sit amet elit...",
    description:
      "Dolor lorem eos dolor duo et eirmod sea. Dolor sit magna rebum clita rebum dolor stet amet justo",
    authorImage: "img/user.jpg",
    authorName: "John Doe",
    views: 12345,
    comments: 123,
  },
  // Add more news items as needed
];

const NewsWithSidebar = () => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Box mb={3}>
            <Typography variant="h4" component="div" gutterBottom>
              Latest News
            </Typography>
            <Link href="#" color="secondary">
              View All
            </Link>
          </Box>
          <Grid container spacing={3}>
            {newsData.map((news, index) => (
              <Grid item xs={12} md={6} key={index}>
                <NewsItem {...news} />
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12} md={4}>
          {/* Sidebar content here */}
        </Grid>
      </Grid>
    </Container>
  );
};

export default NewsWithSidebar;
