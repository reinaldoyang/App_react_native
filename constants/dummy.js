import assets from "./assets";

const NFTData = [
  {
    id: "NFT-01",
    name: "Budi Wijaya",
    creator: "Tangerang, Banten",
    people:assets.petani,
    role:'Farmer',
    price: '4.25',
    description:
      "Born and raised in a small vilage located in Tangerang,Banten. Mr.Budi have been a farmer all his life, driven by the desire to get a higher income in order to support his family. Mr Budi decided it's time to change. Click the visit button to know more about Mr.Budi and his business ",
    image: assets.petani_tua,
    bids: [
      {
        id: "BID-11",
        name: "Jessica Tan",
        price: 4.25,
        image: assets.person02,
        date: "December 12, 2019 at 12:10 PM",
      },
      {
        id: "BID-12",
        name: "Jennifer Sia",
        price: 4.5,
        image: assets.person03,
        date: "December 27, 2019 at 1:50 PM",
      },
      {
        id: "BID-13",
        name: "Rosie Wong",
        price: 4.75,
        image: assets.person04,
        date: "December 31, 2019 at 3:50 PM",
      },
    ],
  },
  {
    id: "NFT-02",
    name: "Siti Nurbaya",
    creator: "Wonokromo, Surabaya",
    people:assets.dancer_close,
    role:'Dancer',
    price: 7.25,
    description:
      "Balinese dance culture incorporates ancient Hindu traditions with drama that tell stories through dance and music. Dances can represent how the character from Hindu scripture fights demons and evil spirits.",
    image: assets.bali_dancer,
    bids: [
      {
        id: "BID-21",
        name: "Jessica Tan",
        price: 7.05,
        image: assets.person04,
        date: "December 12, 2019 at 12:10 PM",
      },
    ],
  },
  {
    id: "NFT-03",
    name: "Bambang Saputra",
    creator: "Samatiga, Aceh",
    role:'Fisherman',
    people:assets.nelayan_face,
    price: 95.25,
    description:
      "I am a handline fishing captain on the KM Idola vessel. I am also a hard worker and I have been working for 15 years as a fisherman. My principle of my life is : Whatever we get is the result that God gives today, because God has never changed people’s livelihood.",
    image: assets.nelayan,
    bids: [
      {
        id: "BID-31",
        name: "Jessica Tan",
        price: 95.25,
        image: assets.person02,
        date: "December 12, 2019 at 12:10 PM",
      },
      {
        id: "BID-32",
        name: "Jennifer Sia",
        price: 95.5,
        image: assets.person03,
        date: "December 27, 2019 at 1:50 PM",
      },
    ],
  },
  {
    id: "NFT-04",
    name: "Andi Nugroho",
    creator: "Danau Teluk, Jambi",
    people:assets.andi,
    role:'Designer',
    price: 54.25,
    description:
      "Indonesian batik, which is thought to be over 1,000 years old, was added to UNESCO’s Intangible Cultural Heritage of Humanity list in 2009. UNESCO states, “The craft of batik is intertwined with the cultural identity of the Indonesian people and, through the symbolic meanings of its colors and designs, expresses their creativity and spirituality",
    image: assets.batik,
    bids: [
      {
        id: "BID-41",
        name: "Jessica Tan",
        price: 56.25,
        image: assets.person02,
        date: "December 12, 2019 at 12:10 PM",
      },
      {
        id: "BID-42",
        name: "Jennifer Sia",
        price: 54.25,
        image: assets.person03,
        date: "December 27, 2019 at 1:50 PM",
      },
      {
        id: "BID-43",
        name: "Rosie Wong",
        price: 55.15,
        image: assets.person04,
        date: "December 31, 2019 at 3:50 PM",
      },
      {
        id: "BID-44",
        name: "Vincent Swift",
        price: 54.15,
        image: assets.person02,
        date: "December 31, 2019 at 3:50 PM",
      },
    ],
  },
  
  
];

export { NFTData };
