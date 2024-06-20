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

const Footer = () => {
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
              123 Street, New York, USA
            </Typography>
            <Typography
              variant="body2"
              sx={{ display: "flex", alignItems: "center", mb: 2 }}
            >
              <i className="fa fa-phone-alt" style={{ marginRight: "8px" }}></i>
              +012 345 67890
            </Typography>
            <Typography
              variant="body2"
              sx={{ display: "flex", alignItems: "center", mb: 4 }}
            >
              <i className="fa fa-envelope" style={{ marginRight: "8px" }}></i>
              info@example.com
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
                  <Typography variant="body2">Jan 01, 2045</Typography>
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
              {[...Array(6)].map((_, index) => (
                <Grid item xs={4} key={index}>
                  <a href="#">
                    <Box
                      component="img"
                      src={`img/news-110x110-${(index % 5) + 1}.jpg`}
                      alt=""
                      sx={{ width: "100%" }}
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
          <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
            Your Site Name
          </a>
          . All Rights Reserved. Design by{" "}
          <a
            href="https://htmlcodex.com"
            style={{ color: "#fff", textDecoration: "none" }}
          >
            HTML Codex
          </a>
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
