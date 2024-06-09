import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Container,
  Grid,
  IconButton,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

const restaurants = [
  {
    name: "Wagamama",
    image: "path-to-image",
    type: "Oriental - Japanese",
    price: "€€",
    closingTime: "22:30",
    rating: 4.5,
    location: "Pembroke District, Dundrum, Dublin 16",
  },
  // Add more restaurants as needed
];

const RecommendedList = () => (
  <Container>
    <Typography variant="h6" gutterBottom>
      Recommended
    </Typography>
    <Grid container spacing={2}>
      {restaurants.map((restaurant) => (
        <Grid item xs={12} sm={6} md={4} key={restaurant.name}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image={restaurant.image}
              alt={restaurant.name}
            />
            <CardContent>
              <Typography variant="h6">{restaurant.name}</Typography>
              <Typography variant="body2" color="text.secondary">
                {restaurant.type}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {restaurant.price}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Closes at {restaurant.closingTime}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {restaurant.location}
              </Typography>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon color="error" />
              </IconButton>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default RecommendedList;
