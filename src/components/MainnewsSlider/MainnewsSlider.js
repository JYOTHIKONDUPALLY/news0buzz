import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  Typography,
  Container,
  Grid,
  CircularProgress,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
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
  backgroundColor: "rgba(0, 0, 0, 0.3)",
  color: "white",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  padding: "20px",
});

const api_key = "0998ee5fea3545e8bfe655fddce913d5";

const MainNewsSlider = () => {
  const [mainNews, setMainNews] = useState([]);
  const [sideNews, setSideNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const placeholderImages = [img1, img2, img3, img4];

  const fetchMainNews = async () => {
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=${api_key}`
      );
      setMainNews(response.data.articles.slice(0, 3)); // Assuming you want to show 3 main news articles
      setSideNews(response.data.articles.slice(3, 7)); // Assuming you want to show 4 side news articles
      setLoading(false); // Set loading to false once data is fetched
    } catch (error) {
      setError("Error fetching news data.");
      setLoading(false); // Set loading to false in case of error
      console.error("Error fetching news data:", error);
    }
  };

  useEffect(() => {
    fetchMainNews();
  }, []);

  const getBackgroundImage = (url) => {
    if (url) return url;
    const randomIndex = Math.floor(Math.random() * placeholderImages.length);
    return placeholderImages[randomIndex];
  };

  const handleNewsClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      {loading ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="500px"
        >
          <CircularProgress />
        </Box>
      ) : error ? (
        <Typography variant="body1" color="error" align="center" sx={{ mt: 2 }}>
          {error}
        </Typography>
      ) : (
        <Grid container spacing={2}>
          <Grid item xs={12} md={7}>
            <Carousel showThumbs={false} autoPlay interval={5000} infiniteLoop>
              {mainNews.map((news, index) => (
                <Box
                  key={index}
                  sx={{
                    position: "relative",
                    height: "500px",
                    mb: 2,
                    cursor: "pointer",
                    background: `url(${getBackgroundImage(
                      news.urlToImage
                    )}) center/cover no-repeat`,
                  }}
                  onClick={() => handleNewsClick(news.url)}
                >
                  <Overlay>
                    <Typography variant="body2" component="div" gutterBottom>
                      <span
                        style={{
                          backgroundColor: "#3f51b5",
                          padding: "5px 10px",
                          borderRadius: "5px",
                        }}
                      >
                        {news.source.name}
                      </span>
                      <span style={{ marginLeft: "10px" }}>
                        {new Date(news.publishedAt).toLocaleDateString()}
                      </span>
                    </Typography>
                    <Typography variant="h5">{news.title}</Typography>
                  </Overlay>
                </Box>
              ))}
            </Carousel>
          </Grid>
          <Grid item xs={12} md={5}>
            <Grid container spacing={2}>
              {sideNews.map((news, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <Box
                    sx={{
                      position: "relative",
                      height: "250px",
                      background: `url(${getBackgroundImage(
                        news.urlToImage
                      )}) center/cover no-repeat`,
                      cursor: "pointer",
                    }}
                    onClick={() => handleNewsClick(news.url)}
                  >
                    <Overlay>
                      <Typography variant="body2" component="div" gutterBottom>
                        <span
                          style={{
                            backgroundColor: "#3f51b5",
                            padding: "5px 10px",
                            borderRadius: "5px",
                          }}
                        >
                          {news.source.name}
                        </span>
                        <span style={{ marginLeft: "10px" }}>
                          {new Date(news.publishedAt).toLocaleDateString()}
                        </span>
                      </Typography>
                      <Typography variant="subtitle1">{news.title}</Typography>
                    </Overlay>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      )}
    </Container>
  );
};

export default MainNewsSlider;
