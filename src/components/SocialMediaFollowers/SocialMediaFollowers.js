import React from "react";
import { Box, Typography } from "@mui/material";
import {
  Facebook,
  Twitter,
  LinkedIn,
  Instagram,
  YouTube,
} from "@mui/icons-material";
import { styled } from "@mui/material/styles";

const Container = styled(Box)({
  marginBottom: 24,
});

const SocialBox = styled(Box)({
  backgroundColor: "white",
  border: "1px solid #ccc",
  padding: 16,
});

const SocialLink = styled("a")(({ background }) => ({
  display: "flex",
  alignItems: "center",
  textDecoration: "none",
  color: "#fff",
  background: background,
  marginBottom: 16,
  padding: 8,
  borderRadius: 4,
}));

const IconBox = styled(Box)({
  width: 65,
  height: 65,
  backgroundColor: "rgba(0, 0, 0, .2)",
  marginRight: 16,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const SocialFollow = () => {
  return (
    <Container>
      {/* heading */}
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
          SocialFollowers
        </Typography>
      </Box>
      {/* icons */}
      <SocialBox>
        <SocialLink href="#" background="#39569E">
          <IconBox>
            <Facebook />
          </IconBox>
          <Typography variant="body1">12,345 Fans</Typography>
        </SocialLink>
        <SocialLink href="#" background="#52AAF4">
          <IconBox>
            <Twitter />
          </IconBox>
          <Typography variant="body1">12,345 Followers</Typography>
        </SocialLink>
        <SocialLink href="#" background="#0185AE">
          <IconBox>
            <LinkedIn />
          </IconBox>
          <Typography variant="body1">12,345 Connects</Typography>
        </SocialLink>
        <SocialLink href="#" background="#C8359D">
          <IconBox>
            <Instagram />
          </IconBox>
          <Typography variant="body1">12,345 Followers</Typography>
        </SocialLink>
        <SocialLink href="#" background="#DC472E">
          <IconBox>
            <YouTube />
          </IconBox>
          <Typography variant="body1">12,345 Subscribers</Typography>
        </SocialLink>
      </SocialBox>
    </Container>
  );
};

export default SocialFollow;
