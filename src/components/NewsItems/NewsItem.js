import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Badge,
  Avatar,
  Box,
} from "@mui/material";
import { Visibility, Comment } from "@mui/icons-material";

const NewsItem = ({
  image,
  category,
  date,
  title,
  description,
  authorImage,
  authorName,
  views,
  comments,
}) => {
  return (
    <Card sx={{ mb: 3 }}>
      <CardMedia component="img" height="200" image={image} alt="news image" />
      <CardContent>
        <Box display="flex" justifyContent="space-between" mb={1}>
          <Badge color="primary" badgeContent={category.toUpperCase()} />
          <Typography variant="body2" color="textSecondary">
            {date}
          </Typography>
        </Box>
        <Typography variant="h5" component="a" href="#" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "space-between" }}>
        <Box display="flex" alignItems="center">
          <Avatar src={authorImage} alt={authorName} sx={{ mr: 1 }} />
          <Typography variant="body2">{authorName}</Typography>
        </Box>
        <Box display="flex" alignItems="center">
          <Typography variant="body2" display="flex" alignItems="center" mr={2}>
            <Visibility fontSize="small" sx={{ mr: 0.5 }} /> {views}
          </Typography>
          <Typography variant="body2" display="flex" alignItems="center">
            <Comment fontSize="small" sx={{ mr: 0.5 }} /> {comments}
          </Typography>
        </Box>
      </CardActions>
    </Card>
  );
};

export default NewsItem;
