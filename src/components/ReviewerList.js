import React from "react";
import {
  Box,
  Card,
  CardContent,
  Avatar,
  Typography,
  Container,
  Grid,
  IconButton,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

const reviewers = [
  {
    name: "Amanda Avila",
    username: "@amandaavila",
    reviews: 102,
    favorites: 12,
    followers: "10k",
    avatar: "path-to-avatar",
  },
  // Add more reviewers as needed
];

const ReviewerList = () => (
  <Container>
    <Typography variant="h6" gutterBottom>
      Recommended Reviewers
    </Typography>
    <Grid container spacing={2}>
      {reviewers.map((reviewer) => (
        <Grid item xs={12} sm={6} md={4} key={reviewer.username}>
          <Card>
            <CardContent>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Avatar src={reviewer.avatar} alt={reviewer.name} />
                <Box sx={{ ml: 2 }}>
                  <Typography variant="h6">{reviewer.name}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {reviewer.username}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {reviewer.reviews} Reviews
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {reviewer.favorites} Favorites
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {reviewer.followers} Followers
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default ReviewerList;
