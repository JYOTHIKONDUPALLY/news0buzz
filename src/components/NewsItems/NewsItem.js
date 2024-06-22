import React from "react";
import img1 from "../../images/markus-spiske-2G8mnFvH8xk-unsplash.jpg";
import img2 from "../../images/markus-winkler-cxoR55-bels-unsplash.jpg";
import img3 from "../../images/roman-kraft-_Zua2hyvTBk-unsplash.jpg";
import img4 from "../../images/obi-pixel8propix-UEQvUtRs224-unsplash.jpg";
import {
  Card as MuiCard,
  CardMedia as MuiCardMedia,
  CardContent as MuiCardContent,
  CardActions as MuiCardActions,
  Typography,
  Badge as MuiBadge,
  Avatar,
  Box,
} from "@mui/material";
import { Visibility, Comment } from "@mui/icons-material";
import { styled } from "@mui/material/styles";

const Card = styled(MuiCard)({
  marginBottom: 24,
  width: 300,
  height: 500,
  display: "flex",
  flexDirection: "column",
});

const CardMedia = styled(MuiCardMedia)({
  height: 200,
});

const CardContent = styled(MuiCardContent)({
  flex: "1 1 auto",
  height: 150,
  overflow: "hidden",
});

const Title = styled(Typography)({
  overflow: "hidden",
  fontSize: "1.2rem",
  textDecoration: "none",
});

const Description = styled(Typography)({
  overflow: "hidden",
  fontSize: "0.9rem",
});

const CardActions = styled(MuiCardActions)({
  justifyContent: "space-between",
});

const BadgeBox = styled(Box)({
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  marginBottom: 8,
});

const Badge = styled(MuiBadge)(({ theme }) => ({
  padding: "0 8px",
  fontSize: "0.75rem",
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  borderRadius: "4px",
  display: "inline-block",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
}));

const AuthorBox = styled(Box)({
  display: "flex",
  alignItems: "center",
});

const StatsBox = styled(Box)({
  display: "flex",
  alignItems: "center",
});

const StatItem = styled(Typography)({
  display: "flex",
  alignItems: "center",
  marginRight: 16,
});

const Icon = styled("div")({
  marginRight: 4,
});

const NewsItem = ({
  image,
  category,
  date,
  title,
  description,
  authorImage,
  authorName,
  url,
}) => {
  // open the detail page in tab
  const handleNewsClick = (url) => {
    window.open(url, "_blank");
  };

  //array of images
  const placeholderImages = [img1, img2, img3, img4];

  //pick random images if image is null
  const getImage = (url) => {
    if (url) return url;
    const randomIndex = Math.floor(Math.random() * placeholderImages.length);
    return placeholderImages[randomIndex];
  };

  return (
    <Card onClick={() => handleNewsClick(url)}>
      <CardMedia component="img" image={getImage(image)} alt="news image" />
      <CardContent>
        <BadgeBox>
          <Badge>{category.toUpperCase()}</Badge>
          <Typography variant="body2" color="textSecondary">
            {date}
          </Typography>
        </BadgeBox>
        <Title variant="h5" component="a" href="#" gutterBottom>
          {title}
        </Title>
        <Description variant="body2" color="textSecondary">
          {description}
        </Description>
      </CardContent>
      <CardActions>
        <AuthorBox>
          <Avatar src={authorImage} alt={authorName} />
          <Typography variant="body2" sx={{ ml: 1 }}>
            {authorName}
          </Typography>
        </AuthorBox>
        <StatsBox>
          <StatItem variant="body2">
            <Visibility
              fontSize="small"
              className={Icon}
              onClick={() => handleNewsClick(url)}
            />
          </StatItem>
          <StatItem variant="body2">
            <Comment fontSize="small" className={Icon} />
          </StatItem>
        </StatsBox>
      </CardActions>
    </Card>
  );
};

export default NewsItem;
