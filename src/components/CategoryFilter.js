import React from "react";
import { Box, Button, Container } from "@mui/material";

const categories = ["Burgers", "Italian", "French"];

const CategoryFilter = () => (
  <Container>
    <Box sx={{ display: "flex", justifyContent: "center", gap: 1, my: 2 }}>
      {categories.map((category) => (
        <Button variant="outlined" key={category}>
          {category}
        </Button>
      ))}
    </Box>
  </Container>
);

export default CategoryFilter;
