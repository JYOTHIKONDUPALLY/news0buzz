import React from "react";
import { Box, Typography } from "@mui/material";
import {
  Facebook,
  Twitter,
  LinkedIn,
  Instagram,
  YouTube,
} from "@mui/icons-material";

const SocialFollow = () => {
  return (
    <Box mb={3}>
      <Typography
        variant="h4"
        sx={{
          margin: "0 0 16px 0",
          textTransform: "uppercase",
          fontWeight: "bold",
        }}
      >
        Follow Us
      </Typography>
      <Box sx={{ bgcolor: "white", border: "1px solid #ccc", p: 2 }}>
        <a
          href="#"
          style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            color: "#fff",
            background: "#39569E",
            marginBottom: "16px",
            padding: "8px",
            borderRadius: "4px",
          }}
        >
          <Box
            sx={{
              width: 65,
              height: 65,
              bgcolor: "rgba(0, 0, 0, .2)",
              marginRight: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Facebook />
          </Box>
          <Typography variant="body1">12,345 Fans</Typography>
        </a>
        <a
          href="#"
          style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            color: "#fff",
            background: "#52AAF4",
            marginBottom: "16px",
            padding: "8px",
            borderRadius: "4px",
          }}
        >
          <Box
            sx={{
              width: 65,
              height: 65,
              bgcolor: "rgba(0, 0, 0, .2)",
              marginRight: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Twitter />
          </Box>
          <Typography variant="body1">12,345 Followers</Typography>
        </a>
        <a
          href="#"
          style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            color: "#fff",
            background: "#0185AE",
            marginBottom: "16px",
            padding: "8px",
            borderRadius: "4px",
          }}
        >
          <Box
            sx={{
              width: 65,
              height: 65,
              bgcolor: "rgba(0, 0, 0, .2)",
              marginRight: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <LinkedIn />
          </Box>
          <Typography variant="body1">12,345 Connects</Typography>
        </a>
        <a
          href="#"
          style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            color: "#fff",
            background: "#C8359D",
            marginBottom: "16px",
            padding: "8px",
            borderRadius: "4px",
          }}
        >
          <Box
            sx={{
              width: 65,
              height: 65,
              bgcolor: "rgba(0, 0, 0, .2)",
              marginRight: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Instagram />
          </Box>
          <Typography variant="body1">12,345 Followers</Typography>
        </a>
        <a
          href="#"
          style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            color: "#fff",
            background: "#DC472E",
            marginBottom: "16px",
            padding: "8px",
            borderRadius: "4px",
          }}
        >
          <Box
            sx={{
              width: 65,
              height: 65,
              bgcolor: "rgba(0, 0, 0, .2)",
              marginRight: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <YouTube />
          </Box>
          <Typography variant="body1">12,345 Subscribers</Typography>
        </a>
      </Box>
    </Box>
  );
};

export default SocialFollow;
