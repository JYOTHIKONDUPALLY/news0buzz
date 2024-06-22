import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  MenuItem,
  Menu,
  InputBase,
} from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
import { useTheme, useMediaQuery } from "@mui/material";
import ArticleIcon from "@mui/icons-material/Article";
import {
  Home,
  Category,
  AccountCircle,
  Menu as MenuIcon,
} from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [categoryAnchorEl, setCategoryAnchorEl] = useState(null);
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  const theme = useTheme();
  const isMdOrSmaller = useMediaQuery(theme.breakpoints.down("md"));

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCategoryMenu = (event) => {
    setCategoryAnchorEl(event.currentTarget);
  };

  const handleCategoryClose = () => {
    setCategoryAnchorEl(null);
  };

  const handleSearch = () => {
    if (searchText.trim() === "") {
      navigate(`/article/${encodeURIComponent("bitcoin")}`);
    }

    navigate(`/article/${encodeURIComponent(searchText)}`);
  };

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h6"
          noWrap
          component={Link}
          to="/"
          sx={{
            display: { xs: "none", sm: "block" },
            textDecoration: "none",
            color: "inherit",
          }}
        >
          NewsBuzz
        </Typography>
        <div
          style={{
            flexGrow: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <MenuItem component={Link} to="/">
            <Home /> {!isMdOrSmaller && <span>Home</span>}
          </MenuItem>
          <MenuItem onClick={handleCategoryMenu}>
            <Category /> {!isMdOrSmaller && <span>Category</span>}
          </MenuItem>
          <Menu
            anchorEl={categoryAnchorEl}
            open={Boolean(categoryAnchorEl)}
            onClose={handleCategoryClose}
          >
            <MenuItem
              component={Link}
              to="/category/business"
              onClick={handleCategoryClose}
            >
              Business
            </MenuItem>
            <MenuItem
              component={Link}
              to="/category/sports"
              onClick={handleCategoryClose}
            >
              Sports
            </MenuItem>
            <MenuItem
              component={Link}
              to="/category/politics"
              onClick={handleCategoryClose}
            >
              Politics
            </MenuItem>
            <MenuItem
              component={Link}
              to="/category/science"
              onClick={handleCategoryClose}
            >
              Science
            </MenuItem>
            <MenuItem
              component={Link}
              to="/category/entertainment"
              onClick={handleCategoryClose}
            >
              Entertainment
            </MenuItem>
            <MenuItem
              component={Link}
              to="/category/health"
              onClick={handleCategoryClose}
            >
              Health
            </MenuItem>
          </Menu>
          <MenuItem
            onClick={handleSearch}
            sx={{
              display: "flex",
              gap: "5px",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ArticleIcon /> {!isMdOrSmaller && <span>Articles</span>}
          </MenuItem>
        </div>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Keyword…"
            inputProps={{ "aria-label": "search" }}
            value={searchText}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
          />
        </Search>
        <div>
          <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
          </Menu>
        </div>
        {isMdOrSmaller && (
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={handleCategoryMenu}
          >
            <MenuIcon />
          </IconButton>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
