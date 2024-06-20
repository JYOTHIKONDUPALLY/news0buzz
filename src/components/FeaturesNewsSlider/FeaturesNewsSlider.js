import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

const Overlay = styled("div")({
  position: "absolute",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  color: "white",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  padding: "20px",
});

const FeaturedNewsSlider = () => {
  const featuredNews = [
    {
      img: "img/news-700x435-1.jpg",
      category: "Business",
      date: "Jan 01, 2045",
      title: "Lorem ipsum dolor sit amet elit...",
    },
    {
      img: "img/news-700x435-2.jpg",
      category: "Business",
      date: "Jan 01, 2045",
      title: "Lorem ipsum dolor sit amet elit...",
    },
    {
      img: "img/news-700x435-3.jpg",
      category: "Business",
      date: "Jan 01, 2045",
      title: "Lorem ipsum dolor sit amet elit...",
    },
    {
      img: "img/news-700x435-4.jpg",
      category: "Business",
      date: "Jan 01, 2045",
      title: "Lorem ipsum dolor sit amet elit...",
    },
    {
      img: "img/news-700x435-5.jpg",
      category: "Business",
      date: "Jan 01, 2045",
      title: "Lorem ipsum dolor sit amet elit...",
    },
  ];

  return (
    <Container sx={{ pt: 5, mb: 3 }}>
      <Box mb={3}>
        <Typography
          variant="h4"
          sx={{ textTransform: "uppercase", fontWeight: "bold" }}
        >
          Featured News
        </Typography>
      </Box>
      <Grid container spacing={3}>
        {featuredNews.map((news, index) => (
          <Grid item xs={12} md={6} lg={3} key={index}>
            <Box
              sx={{
                position: "relative",
                height: "300px",
                backgroundImage: `url(${news.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <Overlay>
                <Box mb={2}>
                  <Typography
                    variant="caption"
                    component="span"
                    sx={{
                      backgroundColor: "primary.main",
                      padding: "5px 10px",
                      borderRadius: "5px",
                      mr: 1,
                    }}
                  >
                    {news.category}
                  </Typography>
                  <Typography variant="caption" component="span">
                    {news.date}
                  </Typography>
                </Box>
                <Typography variant="h6">{news.title}</Typography>
              </Overlay>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default FeaturedNewsSlider;
