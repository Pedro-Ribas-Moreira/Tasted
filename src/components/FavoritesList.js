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

const favorites = [
  {
    name: "The Temple Bar",
    image: "path-to-image",
    type: "Burger - Traditional - Pub",
    price: "€€",
    closingTime: "22:30",
    location: "47-48 Temple Bar, Dublin 2, D02 N725",
  },
  // Add more favorite places as needed
];

const FavoritesList = () => (
  <Container>
    <Typography variant="h6" gutterBottom>
      Amanda's Favourites
    </Typography>
    <Grid container spacing={2}>
      {favorites.map((favorite) => (
        <Grid item xs={12} sm={6} md={4} key={favorite.name}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image={favorite.image}
              alt={favorite.name}
            />
            <CardContent>
              <Typography variant="h6">{favorite.name}</Typography>
              <Typography variant="body2" color="text.secondary">
                {favorite.type}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {favorite.price}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Closes at {favorite.closingTime}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {favorite.location}
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

export default FavoritesList;
