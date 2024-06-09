import React from "react";
import { CssBaseline, Container } from "@mui/material";
import Header from "./components/Header";
import CategoryFilter from "./components/CategoryFilter";
import RecommendedList from "./components/RecommendedList";
import FavoritesList from "./components/FavoritesList";
import ReviewerList from "./components/ReviewerList";

const App = () => (
  <div className="App">
    <CssBaseline />
    <Header />
    <Container>
      <CategoryFilter />
      <RecommendedList />
      <FavoritesList />
      <ReviewerList />
    </Container>
  </div>
);

export default App;
