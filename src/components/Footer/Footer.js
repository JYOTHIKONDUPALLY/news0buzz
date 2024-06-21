import React from "react";
import {
  Container,
  Grid,
  Box,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import {
  Twitter,
  Facebook,
  LinkedIn,
  Instagram,
  YouTube,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import img1 from "../../images/markus-spiske-2G8mnFvH8xk-unsplash.jpg";
import img2 from "../../images/markus-winkler-cxoR55-bels-unsplash.jpg";
import img3 from "../../images/roman-kraft-_Zua2hyvTBk-unsplash.jpg";
import img4 from "../../images/obi-pixel8propix-UEQvUtRs224-unsplash.jpg";
import img5 from "../../images/1715738771-5395.avif";
import img6 from "../../images/Buy_or_sell_stocks_to_buy_today_stock_market_today_1698023021624_1718849992842.avif";
import img7 from "../../images/FILES-SPAIN-TELECOM-ECONOMY-EMPLOYMENT-0_1718362233212_1718817961843.avif";
import img8 from "../../images/swdewd.avif";

const Footer = () => {
  const placeholderImages = [img1, img2, img3, img4, img5, img6, img7, img8];
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate(`/category/${category}`);
  };

  return (
    <Box
      sx={{
        backgroundColor: "#111111",
        color: "#fff",
        pt: 5,
        px: { xs: 3, md: 5 },
      }}
    >
      <Container>
        <Grid container spacing={4} sx={{ py: 4 }}>
          <Grid item lg={3} md={6} mb={5}>
            <Typography
              variant="h5"
              sx={{ mb: 4, textTransform: "uppercase", fontWeight: "bold" }}
            >
              Get In Touch
            </Typography>
            <Typography
              variant="body2"
              sx={{ display: "flex", alignItems: "center", mb: 2 }}
            >
              <i
                className="fa fa-map-marker-alt"
                style={{ marginRight: "8px" }}
              ></i>
              123 Street, Delhi, India
            </Typography>
            <Typography
              variant="body2"
              sx={{ display: "flex", alignItems: "center", mb: 2 }}
            >
              <i className="fa fa-phone-alt" style={{ marginRight: "8px" }}></i>
              +91 7866543290
            </Typography>
            <Typography
              variant="body2"
              sx={{ display: "flex", alignItems: "center", mb: 4 }}
            >
              <i className="fa fa-envelope" style={{ marginRight: "8px" }}></i>
              newsbuzz@google.com
            </Typography>
            <Typography
              variant="h6"
              sx={{ mb: 3, textTransform: "uppercase", fontWeight: "bold" }}
            >
              Follow Us
            </Typography>
            <Box sx={{ display: "flex" }}>
              <IconButton sx={{ color: "secondary.main", mr: 2 }} href="#">
                <Twitter />
              </IconButton>
              <IconButton sx={{ color: "secondary.main", mr: 2 }} href="#">
                <Facebook />
              </IconButton>
              <IconButton sx={{ color: "secondary.main", mr: 2 }} href="#">
                <LinkedIn />
              </IconButton>
              <IconButton sx={{ color: "secondary.main", mr: 2 }} href="#">
                <Instagram />
              </IconButton>
              <IconButton sx={{ color: "secondary.main" }} href="#">
                <YouTube />
              </IconButton>
            </Box>
          </Grid>
          <Grid item lg={3} md={6} mb={5}>
            <Typography
              variant="h5"
              sx={{ mb: 4, textTransform: "uppercase", fontWeight: "bold" }}
            >
              Popular News
            </Typography>
            {[...Array(3)].map((_, index) => (
              <Box key={index} sx={{ mb: 3 }}>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    sx={{ mr: 2 }}
                  >
                    Business
                  </Button>
                  <Typography variant="body2">June 01, 2024</Typography>
                </Box>
                <Typography variant="body2">
                  Lorem ipsum dolor sit amet elit. Proin vitae porta diam...
                </Typography>
              </Box>
            ))}
          </Grid>
          <Grid item lg={3} md={6} mb={5}>
            <Typography
              variant="h5"
              sx={{ mb: 4, textTransform: "uppercase", fontWeight: "bold" }}
            >
              Categories
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap" }}>
              {[
                "Politics",
                "Business",
                "Corporate",
                "Health",
                "Education",
                "Science",
                "Foods",
                "Entertainment",
                "Travel",
                "Lifestyle",
              ].map((category, index) => (
                <Button
                  key={index}
                  variant="contained"
                  color="secondary"
                  size="small"
                  sx={{ m: 1 }}
                  onClick={() => handleCategoryClick(category)}
                >
                  {category}
                </Button>
              ))}
            </Box>
          </Grid>
          <Grid item lg={3} md={6} mb={5}>
            <Typography
              variant="h5"
              sx={{ mb: 4, textTransform: "uppercase", fontWeight: "bold" }}
            >
              Flickr Photos
            </Typography>
            <Grid container spacing={1}>
              {placeholderImages.map((img, index) => (
                <Grid item xs={4} key={index}>
                  <a href="home">
                    <Box
                      component="img"
                      src={img}
                      alt="image"
                      sx={{ width: "50px", height: "50px" }}
                    />
                  </a>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Box
        sx={{
          backgroundColor: "#111111",
          color: "#fff",
          py: 4,
          px: { xs: 3, md: 5 },
          textAlign: "center",
        }}
      >
        <Typography variant="body2">
          &copy;{" "}
          <a href="home" style={{ color: "#fff", textDecoration: "none" }}>
            NewsBuzz
          </a>
          . All Rights Reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
