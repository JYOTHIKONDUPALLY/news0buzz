import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const BreakingNewsContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  padding: theme.spacing(3, 0),
  marginBottom: theme.spacing(3),
  color: theme.palette.common.white,
}));

const BreakingNewsHeader = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  padding: theme.spacing(1),
  textAlign: "center",
  fontWeight: "bold",
}));

const BreakingNewsContent = styled(Box)(({ theme }) => ({
  paddingLeft: theme.spacing(3),
  display: "flex",
  alignItems: "center",
}));

const BreakingNewsItem = styled(Typography)(({ theme }) => ({
  textTransform: "uppercase",
  fontWeight: "600",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  marginRight: theme.spacing(3),
  cursor: "pointer",
}));

const BreakingNews = () => {
  const newsItems = [
    "Lorem ipsum dolor sit amet elit. Proin interdum lacus eget ante tincidunt, sed faucibus nisl sodales",
    "Lorem ipsum dolor sit amet elit. Proin interdum lacus eget ante tincidunt, sed faucibus nisl sodales",
  ];

  return (
    <BreakingNewsContainer>
      <Container>
        <Grid container alignItems="center">
          <Grid item>
            <BreakingNewsHeader style={{ width: "170px" }}>
              Breaking News
            </BreakingNewsHeader>
          </Grid>
          <Grid item style={{ flex: 1 }}>
            <BreakingNewsContent>
              {newsItems.map((item, index) => (
                <BreakingNewsItem key={index} component="a" href="#">
                  {item}
                </BreakingNewsItem>
              ))}
            </BreakingNewsContent>
          </Grid>
        </Grid>
      </Container>
    </BreakingNewsContainer>
  );
};

export default BreakingNews;
