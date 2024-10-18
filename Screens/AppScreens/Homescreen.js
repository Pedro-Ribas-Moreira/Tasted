// HomeScreen.js
import React, { useState } from "react";
import { View, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import {
  Appbar,
  Avatar,
  Button,
  Card,
  Searchbar,
  Text,
  FAB,
  Surface,
  Chip,
  useTheme,
  IconButton,
} from "react-native-paper";
import { auth } from "../../config/firebase";
import { signOut } from "firebase/auth";

import { CardMockData, ChipMockData, CollectionMockData } from "../../mockData";

const LeftContent = (props) => (
  <Avatar.Image {...props} size={48} source={{ uri: props.authorProfilePic }} />
);
const RightContent = (props) => (
  <View style={styles.likesContainer}>
    <IconButton icon="heart" size={24} />
    <Text style={styles.likesCount}>145</Text>
  </View>
);
export const HomeScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [data, setData] = useState(CardMockData);
  const [chipData, setChipData] = useState(ChipMockData);
  const [collectionData, setCollectionData] = useState(CollectionMockData);

  const theme = useTheme();
  const onChangeSearch = (query) => setSearchQuery(query);

  const renderCard = ({ item }) => (
    <Card style={styles.card}>
      <Card.Title title={item.title} />
      <Card.Content>
        <Text>{item.description}</Text>
      </Card.Content>
    </Card>
  );

  const renderCollections = ({ item }) => (
    <Card>
      <Card.Cover
        style={styles.cardCover}
        source={{ uri: item.cardCoverImage }}
      />
      <Card.Title
        title={item.authorName}
        subtitle={item.authorInstagram}
        titleStyle={styles.titleStyle}
        subtitleStyle={styles.subtitleStyle}
        left={(props) => (
          <LeftContent {...props} authorProfilePic={item.authorProfilePic} />
        )}
        right={(props) => (
          <RightContent {...props}>{item.likesCount}</RightContent>
        )}
      />
      <Card.Content>
        <Text variant="titleLarge">{item.title}</Text>
        <Text variant="bodyMedium">{item.description}</Text>

        {/* Render a structured list of restaurant names */}
        <View style={{ marginTop: 8 }}>
          <Text variant="bodyLarge">Restaurants:</Text>
          {item.restaurants.slice(0, 3).map((restaurant, index) => (
            <Text key={index} variant="bodyMedium" style={{ marginLeft: 8 }}>
              • {restaurant}
            </Text>
          ))}
        </View>
      </Card.Content>
    </Card>
  );
  const renderChip = ({ item }) => (
    <Chip style={styles.chip}>{item.description}</Chip>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <Appbar.Header style={styles.header}>
        <Text variant="headlineSmall">Hello, Pedro Moreira!</Text>
        <TouchableOpacity
          onPress={() =>
            signOut(auth).catch((error) =>
              console.log("Error logging out: ", error)
            )
          }
        >
          <Appbar.Action icon="bell-badge" color={theme.colors.primary} />
        </TouchableOpacity>
      </Appbar.Header>
      {/* Search and Filter */}
      <View
        elevation={1}
        backgroundColor={theme.colors.primary}
        style={styles.heroView}
        marginBottom={16}
      >
        <Text variant="headlineLarge" style={styles.heroText}>
          Let's Taste something new today?
        </Text>
        <View>
          <Searchbar />
        </View>
      </View>
      <Text variant="titleLarge" paddingHorizontal={16}>
        Recommended
      </Text>
      {/* Categories */}
      <View style={styles.collectionsView}>
        <FlatList
          data={chipData}
          horizontal={true}
          renderItem={renderChip}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.list}
        />
      </View>

      <View style={styles.collectionsView}>
        <FlatList
          data={collectionData}
          horizontal={true}
          renderItem={renderCollections}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.list}
        />
      </View>
      <View style={styles.collectionsView}>
        {/* Vertical List of Cards */}
        <FlatList
          data={data}
          horizontal={true}
          renderItem={renderCard}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.list}
        />
      </View>
      <FAB
        icon="plus"
        style={styles.fab}
        onPress={() => console.log("Pressed")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    backgroundColor: "transparent",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
  heroView: {
    // backgroundColor: "",
    paddingHorizontal: 16,
    borderRadius: 15,
    padding: 16,
    gap: 8,
    marginHorizontal: 8,
  },
  heroText: {
    color: "#fff",
  },
  searchbar: {
    flex: 1,
    marginRight: 10,
  },
  filterButton: {
    alignSelf: "center",
  },
  list: {
    padding: 10,
    gap: 8,
  },
  card: {
    marginBottom: 15,
    minWidth: 300,
  },
  cardCover: {
    height: 80,
  },
  titleStyle: {
    // marginBottom: 0, // Reduce the bottom margin for the title
    // backgroundColor: "red",
    textAlignVertical: "end",
  },
  subtitleStyle: {
    marginTop: 0, // Remove top margin for the subtitle
    fontSize: 12, // Optional: adjust the font size if needed
    color: "gray", // Optional: adjust the color if needed
    // backgroundColor: "green",
    textAlignVertical: "top",
  },
  cardContainer: {
    marginBottom: 16,
  },
  likesContainer: {
    alignItems: "center",
    marginRight: 8,
  },
  likesCount: {
    fontSize: 12,
    color: "gray",
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
  },
  collectionsView: {},
});
