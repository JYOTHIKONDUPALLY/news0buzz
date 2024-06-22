import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import { useTheme, useMediaQuery } from "@mui/material";
import { Container, Box } from "@mui/material";
import {
  Facebook,
  Twitter,
  LinkedIn,
  Instagram,
  YouTube,
  Google,
} from "@mui/icons-material";

const TopBar = () => {
  const theme = useTheme();
  // setting the screen size for responsiveness
  const isMdOrSmaller = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ background: "black" }}>
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Typography variant="body2" color="inherit" sx={{ flexGrow: 1 }}>
              Monday, January 1, 2045
            </Typography>
            <MenuItem>
              {!isMdOrSmaller && (
                <Typography variant="body2" color="inherit">
                  Advertise
                </Typography>
              )}
            </MenuItem>
            <MenuItem>
              {!isMdOrSmaller && (
                <Typography variant="body2" color="inherit">
                  Contact
                </Typography>
              )}
            </MenuItem>
            <MenuItem>
              {!isMdOrSmaller && (
                <Typography variant="body2" color="inherit">
                  Login
                </Typography>
              )}
            </MenuItem>
            {!isMdOrSmaller && (
              <div>
                <IconButton color="inherit" href="#">
                  <Twitter />
                </IconButton>
                <IconButton color="inherit" href="#">
                  <Facebook />
                </IconButton>
                <IconButton color="inherit" href="#">
                  <LinkedIn />
                </IconButton>
                <IconButton color="inherit" href="#">
                  <Instagram />
                </IconButton>
                <IconButton color="inherit" href="#">
                  <Google />
                </IconButton>
                <IconButton color="inherit" href="#">
                  <YouTube />
                </IconButton>
              </div>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default TopBar;
