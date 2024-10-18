const CardMockData = [
  { id: "1", title: "Card 1", description: "This is card 1" },
  { id: "2", title: "Card 2", description: "This is card 2" },
  { id: "3", title: "Card 3", description: "This is card 3" },
  // Add more cards here
];

const ChipMockData = [
  { id: "1", title: "Chip 1", description: "Burguer" },
  { id: "2", title: "Chip 2", description: "Italian" },
  { id: "3", title: "Chip 3", description: "Thai" },
  { id: "4", title: "Chip 3", description: "French" },
  { id: "5", title: "Chip 3", description: "Japanese" },
  // Add more cards here
];

const CollectionMockData = [
  {
    id: "1",
    title: "Best Pubs",
    description: "A curated list of the best pubs in Dublin.",
    authorId: "101",
    authorName: "John Smith",
    authorInstagram: "@johnsmith",
    authorProfilePic:
      "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    likesCount: 150,
    cardCoverImage:
      "https://images.pexels.com/photos/63633/bar-local-cong-ireland-63633.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    restaurants: [
      "Noosh Pub",
      "The Brazen Head",
      "The Long Hall",
      "O'Donoghue's",
    ],
  },
  {
    id: "2",
    title: "Top Italian Restaurants",
    description: "Explore the finest Italian restaurants in the city.",
    authorId: "102",
    authorName: "Emily Johnson",
    authorInstagram: "@emilyjohnson",
    authorProfilePic:
      "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    likesCount: 245,
    cardCoverImage:
      "https://images.pexels.com/photos/2233348/pexels-photo-2233348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    restaurants: ["Il Vicoletto", "Terra Madre", "Manifesto", "Osteria Lucio"],
  },
  // Add more items as needed
];

export { ChipMockData, CardMockData, CollectionMockData };
