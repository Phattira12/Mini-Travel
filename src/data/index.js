const USERS = {
  1: {
    id: 1,
    username: "Alexia Jane",
    avatar: require("../../assets/images/users/32.jpeg"),
  },
  2: {
    id: 2,
    username: "Jacky Depp",
    avatar: require("../../assets/images/users/35.jpeg"),
  },
};

const REVIEWS = {
  1: {
    id: 1,
    date: "21 May, 2022",
    author: USERS[1],
    rating: 7,
    text: "Lorem ipsum dolor sit amet. Iusto nihil et porro soluta ut labore nesciunt sed dolor nihil qui laudantium consequatur",
  },
  2: {
    id: 2,
    date: "14 July, 2021",
    author: USERS[2],
    rating: 9.1,
    text: "Lorem ipsum dolor sit amet.",
  },
};

export const HOTELS = {
  1: {
    id: 1,
    title: "Argos in Cappadocia",
    image: require("../../assets/images/hotels/cp-1.jpeg"),
    location: "Turkey, Cappadocia",
    rating: 9,
    pricePeerDay: "130$",
    type: "HOTEL",
  },
  2: {
    id: 2,
    title: "Sultan Cave Suites",
    image: require("../../assets/images/hotels/cp-2.jpeg"),
    location: "Turkey, Cappadocia",
    rating: 9.3,
    pricePeerDay: "230$",
    type: "HOTEL",
  },
  3: {
    id: 3,
    title: "Villa Brunella",
    image: require("../../assets/images/hotels/capri-1.jpeg"),
    location: "Italy, Capri",
    rating: 9.4,
    pricePeerDay: "280$",
    type: "HOTEL",
  },
  4: {
    id: 4,
    title: "Hotel La Floridiana",
    image: require("../../assets/images/hotels/capri-2.jpeg"),
    location: "Italy, Capri",
    rating: 9.3,
    pricePeerDay: "190$",
    type: "HOTEL",
  },
  5: {
    id: 5,
    title: "Le Taha'a by Pearl Resorts",
    image: require("../../assets/images/hotels/polynesia-1.jpeg"),
    location: "Polynesia, Bora Bora",
    rating: 9.2,
    pricePeerDay: "250$",
    type: "HOTEL",
  },
  6: {
    id: 6,
    title: "Le Meridien Bora Bora",
    image: require("../../assets/images/hotels/polynesia-2.jpeg"),
    location: "Polynesia, Bora Bora",
    rating: 9.4,
    pricePeerDay: "270$",
    type: "HOTEL",
  },
  7: {
    id: 7,
    title: "InterContinental Phuket Resort",
    image: require("../../assets/images/hotels/phuket-1.jpg"),
    location: "Thailand, Phuket",
    rating: 9.2,
    pricePeerDay: "210$",
    type: "HOTEL",
  },
  8: {
    id: 8,
    title: "The Nai Harn",
    image: require("../../assets/images/hotels/phuket-2.jpeg"),
    location: "Thailand, Phuket",
    rating: 9.4,
    pricePeerDay: "430$",
    type: "HOTEL",
  },
  9: {
    id: 9,
    title: "Hotel Poseidon",
    image: require("../../assets/images/hotels/ac-1.jpeg"),
    location: "Italy, Amalfi Coast",
    rating: 9.5,
    pricePeerDay: "330$",
    type: "HOTEL",
  },
  10: {
    id: 10,
    title: "Le Agavi Hotel",
    image: require("../../assets/images/hotels/ac-2.jpeg"),
    location: "Italy, Amalfi Coast",
    rating: 9.4,
    pricePeerDay: "350$",
    type: "HOTEL",
  },
  11: {
    id: 11,
    title: "Hotel Casa 1800 Granada",
    image: require("../../assets/images/hotels/granada-1.jpeg"),
    location: "Spain, Granada",
    rating: 9.2,
    pricePeerDay: "230$",
    type: "HOTEL",
  },
  12: {
    id: 12,
    title: "Parador de Granada",
    image: require("../../assets/images/hotels/granada-2.jpeg"),
    location: "Spain, Granada",
    rating: 9.4,
    pricePeerDay: "120$",
    type: "HOTEL",
  },

  13: {
    id: 13,
    title: "Konansou",
    image: require("../../assets/images/hotels/cb-1.jpeg"),
    location: "Japan, Cherry blossoms",
    rating: 9.2,
    pricePeerDay: "740$",
    type: "HOTEL",
  },
  14: {
    id: 14,
    title: "Shuhokaku Kogetsu",
    image: require("../../assets/images/hotels/cb-2.jpeg"),
    location: "Japan, Cherry blossoms",
    rating: 9.4,
    pricePeerDay: "240$",
    type: "HOTEL",
  },
};

export const TOP_PLACES = [
  {
    id: 1,
    image: require("../../assets/images/trips/HandLuggageOnly-itary.jpg"),
    title: "Amalfi Coast",
    location: "Italy",
    description:
      "The ultimate Amalfi Coast travel guide, where to stay, where to eat, and what areas to visit in the Amalfi Coast of Italy. Positano, Ravello, Amalfi and more",
    rating: 9.4,
    gallery: [
      require("../../assets/images/trips/Amalfi-Coast.jpg"),
      require("../../assets/images/trips/Itary.jpg"),
    ],
    reviews: [REVIEWS[2], REVIEWS[1]],
    hotels: [HOTELS[9], HOTELS[10]],
    type: "PLACE",
  },
  {
    id: 4,
    image: require("../../assets/images/trips/granada-spain.jpg"),
    title: "Granada",
    location: "Spain",
    description:
      "Granada is the capital city of the province of Granada, in the autonomous community of Andalusia, Spain",
    rating: 8.9,
    gallery: [require("../../assets/images/trips/caminito-granada.jpg")],
    reviews: [REVIEWS[1], REVIEWS[2]],
    hotels: [HOTELS[11], HOTELS[12]],
    type: "PLACE",
  },
  {
    id: 6,
    image: require("../../assets/images/trips/japan.jpg"),
    title: "Cherry blossoms",
    location: "Japan",
    description:
      "Cherry blossoms usually bloom between mid-March and early May. In 2022, Tokyo's cherry blossom season officially began on March 20",
    rating: 7.4,
    gallery: [require("../../assets/images/trips/japan-1.jpg")],
    reviews: [REVIEWS[1], REVIEWS[2]],
    hotels: [HOTELS[13], HOTELS[14]],
    type: "PLACE",
  },
];

export const PLACES = [
  {
    id: 5,
    image: require("../../assets/images/trips/england-london.jpg"),
    title: "London",
    location: "England",
    description:
      "It's pretty much impossible (and certainly not recommended) to visit England without spending time in its capital, London. One of the world's largest and most cosmopolitan cities, this sprawling metropolis is, despite its vast size, surprisingly easy to get around thanks to its first-rate (though sometimes crowded) public transit systems.",
    rating: 9.2,
    gallery: [
      require("../../assets/images/trips/topic-london.jpg"),
      require("../../assets/images/trips/england-london-1.jpg"),
      require("../../assets/images/trips/england-london-2.jpg"),
    ],
    reviews: [REVIEWS[1], REVIEWS[2]],
    hotels: [HOTELS[1], HOTELS[2]],
    type: "PLACE",
  },
  {
    id: 2,
    image: require("../../assets/images/trips/China-1.jpg"),
    title: "The Great Wall of China",
    location: "China",
    description:
      "The magnificent Great Wall of China - known in Chinese as 'Changcheng', or the 'Long Wall' - stretches more than 6,000 kilometers from the fortresses of Shanhaiguan in the east all the way to Jiayuguan in the west, passing through Hebei, Tientsin, Beijing - where the best preserved sections of the wall can be visited - Inner Mongolia, Ningxia, and Gansu.",
    rating: 9.1,
    gallery: [
      require("../../assets/images/trips/china.jpg"),
      require("../../assets/images/trips/the-great-wall-of-china_optimized.jpg"),
    ],
    reviews: [REVIEWS[2], REVIEWS[1]],
    hotels: [HOTELS[3], HOTELS[4]],
    type: "PLACE",
  },
  {
    id: 3,
    image: require("../../assets/images/trips/grand-canyon-usa.jpg"),
    title: "Grand Canyon",
    location: "USA",
    description:
      "The greatest natural attraction in the United States, the Grand Canyon is a key sight for all travelers planning their lifetime of adventures. Standing on the rim of the Grand Canyon, looking out over the carved landscape, will awaken your senses.",
    rating: 8.9,
    gallery: [require("../../assets/images/trips/grand-canyon.jpg"),],
    reviews: [REVIEWS[1], REVIEWS[2]],
    hotels: [HOTELS[5], HOTELS[6]],
    type: "PLACE",
  },
  {
    id: 7,
    image: require("../../assets/images/trips/Phuket.jpg"),
    title: "Phuket",
    location: "Thailand",
    description:
      "Old buildings in Phuket Town which are houses, shops, government offices, banks and many others, most of which are buildings built almost a hundred years ago The appearance of the building is a combination of Chinese and European architecture, known as the Sino-Portuguese architecture (Chinois Postugess).)",
    rating: 9.2,
    gallery: [require("../../assets/images/trips/phuket1.jpg"),],
    reviews: [REVIEWS[2], REVIEWS[1]],
    hotels: [HOTELS[7], HOTELS[8]],
    type: "PLACE",
  },
  {
    id: 8,
    image: require("../../assets/images/trips/eiffel.jpg"),
    title: "Eiffel Tower",
    location: "Paris",
    description:
      "The symbol of Paris and one of the most photographed structures in the world, a visit to the Eiffel Tower is a must for all travelers. Few landmarks inspire such a passion for travel as this single iron structure.",
    rating: 9.8,
    gallery: [],
    reviews: [REVIEWS[2], REVIEWS[1]],
    hotels: [HOTELS[9], HOTELS[10]],
    type: "PLACE",
  },
];

export const SEARCH_PLACES = [...PLACES, ...TOP_PLACES].map((item) => ({
  ...item,
  id: Math.random().toString(),
}));

export const SEARCH_HOTELS = [...Object.values(HOTELS)].map((item) => ({
  ...item,
  id: Math.random().toString(),
}));

export const SEARCH_ALL = [...SEARCH_PLACES, ...SEARCH_HOTELS];
