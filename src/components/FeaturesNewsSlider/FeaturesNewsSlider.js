import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Container, Typography, CircularProgress } from "@mui/material";
import { styled } from "@mui/material/styles";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import leftarrow from "../../images/icons8-arrow-48.png";
import rightarrow from "../../images/icons8-arrow-48 (1).png";
import img1 from "../../images/markus-spiske-2G8mnFvH8xk-unsplash.jpg";
import img2 from "../../images/markus-winkler-cxoR55-bels-unsplash.jpg";
import img3 from "../../images/roman-kraft-_Zua2hyvTBk-unsplash.jpg";
import img4 from "../../images/obi-pixel8propix-UEQvUtRs224-unsplash.jpg";

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

const api_key = "0998ee5fea3545e8bfe655fddce913d5";

// setting up the items to show in carousel based on screen size
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

// customizating the arrow:left
const CustomLeftArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    style={{
      background: "transparent",
      border: "none",
      cursor: "pointer",
      position: "absolute",
      top: "50%",
      left: 20,
      transform: "translateY(-50%)",
      zIndex: 999,
    }}
  >
    <img src={leftarrow} alt="left arrow" />
  </button>
);

// customizating the arrow:right
const CustomRightArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    style={{
      background: "transparent",
      border: "none",
      cursor: "pointer",
      position: "absolute",
      top: "50%",
      right: 20,
      transform: "translateY(-50%)",
      zIndex: 999,
    }}
  >
    <img src={rightarrow} alt="right arrow" />
  </button>
);

const FeaturedNewsSlider = () => {
  const [featuredNews, setFeaturedNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const placeholderImages = [img1, img2, img3, img4];

  useEffect(() => {
    const fetchFeaturedNews = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=in&apiKey=${api_key}`
        );
        setFeaturedNews(response.data.articles.slice(0, 10)); // Limit to 10 articles
        setLoading(false);
      } catch (error) {
        setError("Error fetching news data.");
        setLoading(false);
        console.error("Error fetching news data:", error);
      }
    };

    fetchFeaturedNews();
  }, []);

  //setting randome images if the image from the data is null
  const getBackgroundImage = (url) => {
    if (url) return `url(${url})`;
    const randomIndex = Math.floor(Math.random() * placeholderImages.length);
    return `url(${placeholderImages[randomIndex]})`;
  };

  return (
    <Container sx={{ pt: 5, mb: 3 }}>
      <Box
        mb={3}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            textTransform: "uppercase",
            fontWeight: "bold",
            borderBottom: "5px solid blue",
          }}
        >
          Featured News
        </Typography>
      </Box>
      {loading ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="300px"
        >
          <CircularProgress />
        </Box>
      ) : error ? (
        <Typography variant="body1" color="error" align="center" sx={{ mt: 2 }}>
          {error}
        </Typography>
      ) : (
        <Carousel
          responsive={responsive}
          customLeftArrow={<CustomLeftArrow />}
          customRightArrow={<CustomRightArrow />}
        >
          {featuredNews.map((news, index) => (
            <Box
              key={index}
              sx={{
                position: "relative",
                height: "300px",
                backgroundImage: getBackgroundImage(news.urlToImage),
                backgroundSize: "cover",
                backgroundPosition: "center",
                cursor: "pointer",
                margin: "0 10px",
              }}
              onClick={() => window.open(news.url, "_blank")}
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
                    {news.source.name}
                  </Typography>
                  <Typography variant="caption" component="span">
                    {new Date(news.publishedAt).toLocaleDateString()}
                  </Typography>
                </Box>
                <Typography variant="h6">{news.title}</Typography>
              </Overlay>
            </Box>
          ))}
        </Carousel>
      )}
    </Container>
  );
};

export default FeaturedNewsSlider;
