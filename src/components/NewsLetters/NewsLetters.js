import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  TextField,
  Button,
  Container,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const NewsletterContainer = styled(Container)({
  maxWidth: "md",
  marginTop: "32px",
  marginBottom: "32px",
});

const StyledBox = styled(Box)({
  backgroundColor: "white",
  border: "1px solid #e0e0e0",
  padding: "24px",
  textAlign: "center",
});

const InputField = styled(TextField)({
  width: "100%",
  marginBottom: "16px",
});

const SignUpButton = styled(Button)({
  height: "100%",
});

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true); // Initially assume email is valid
  const [isSignedUp, setIsSignedUp] = useState(false);

  const handleSignUp = () => {
    if (validateEmail(email)) {
      setIsValidEmail(true);
      setIsSignedUp(true);
      console.log("Signing up...");
      // Perform signup logic here
      // You can make an API call or perform any action as needed

      // Automatically reset isSignedUp after 3 seconds
      setTimeout(() => {
        setIsSignedUp(false);
      }, 3000);
    } else {
      setIsValidEmail(false);
    }
  };

  const validateEmail = (email) => {
    // Simple email validation regex
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleInputChange = (event) => {
    setEmail(event.target.value);
    setIsValidEmail(true); // Reset validation state on input change
    setIsSignedUp(false); // Reset signup success state on input change
  };

  return (
    <NewsletterContainer>
      <StyledBox>
        <Typography
          variant="h5"
          className="m-0 text-uppercase font-weight-bold"
        >
          Newsletter
        </Typography>
        <Box mt={2}>
          <Typography variant="body1">
            Sign Up to get Latest Newsletter on your favorite topics
          </Typography>
        </Box>
        <Box mt={2}>
          <InputField
            variant="outlined"
            size="large"
            placeholder="Your Email"
            value={email}
            onChange={handleInputChange}
            error={!isValidEmail}
            helperText={!isValidEmail && "Invalid email address"}
          />
          <Button
            component={SignUpButton}
            variant="contained"
            color="primary"
            onClick={handleSignUp}
          >
            Sign Up
          </Button>
          {isSignedUp && (
            <Typography
              variant="body2"
              color="green"
              mt={2}
              p={2}
              component={"div"}
              sx={{ fontWeight: "bold", fontSize: "20px" }}
            >
              Sent!
            </Typography>
          )}
        </Box>
      </StyledBox>
    </NewsletterContainer>
  );
};

export default Newsletter;
