const sampleListing = [
  {
    title: "Modern Laptop",
    description: "High-performance laptop with the latest features.",
    image: "https://images.pexels.com/photos/3573351/pexels-photo-3573351.png?auto=compress&cs=tinysrgb&w=600",
    price: 999.99,
    location: "Tech City",
    country: "Silicon Land",
  },
  {
    title: "Vintage Camera",
    description: "Classic film camera in excellent condition.",
    image: "https://images.pexels.com/photos/3617500/pexels-photo-3617500.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 249.95,
    location: "Shutter Street",
    country: "Photolandia"
  },
  {
    title: "Smart Fitness Watch",
    description: "Track your fitness goals with this sleek smartwatch.",
    image: "https://images.pexels.com/photos/2754200/pexels-photo-2754200.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 79.99,
    location: "Health Haven",
    country: "Fitopia"
  },
  {
    title: "Handcrafted Wooden Desk",
    description: "Beautifully crafted desk made from reclaimed wood.",
    image: "https://images.pexels.com/photos/2335126/pexels-photo-2335126.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 399.00,
    location: "Timber Town",
    country: "Woodlandia"
  },
  {
    title: "Chef's Knife Set",
    description: "Professional-grade knife set for culinary enthusiasts.",
    image: "https://images.pexels.com/photos/3375116/pexels-photo-3375116.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 149.95,
    location: "Culinary Center",
    country: "Gourmetland"
  },
  {
    title: "Cozy Reading Chair",
    description: "Sink into comfort with this plush reading chair.",
    image: "https://images.pexels.com/photos/1586298/pexels-photo-1586298.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 199.99,
    location: "Bookworm Corner",
    country: "Relaxistan"
  },
  {
    title: "Virtual Reality Headset",
    description: "Immerse yourself in a virtual world with this headset.",
    image: "https://images.pexels.com/photos/1670187/pexels-photo-1670187.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 299.99,
    location: "Tech Oasis",
    country: "Innovatia"
  },
  {
    title: "Outdoor Adventure Backpack",
    description: "Durable backpack for your next outdoor expedition.",
    image: "https://images.pexels.com/photos/1438761/pexels-photo-1438761.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 89.95,
    location: "Adventure Base",
    country: "Exploria"
  },
  {
    title: "Abstract Canvas Art",
    description: "Unique abstract artwork to enhance your space.",
    image: "https://images.pexels.com/photos/3049327/pexels-photo-3049327.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 149.00,
    location: "Art Avenue",
    country: "Creativia"
  },
  {
    title: "Wireless Bluetooth Earbuds",
    description: "Enjoy music on the go with these wireless earbuds.",
    image: "https://images.pexels.com/photos/2583852/pexels-photo-2583852.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 69.99,
    location: "Sound Street",
    country: "Audiophilia"
  },
  {
    title: "Retro Gaming Console",
    description: "Relive classic games with this vintage gaming console.",
    image: "https://images.pexels.com/photos/2437297/pexels-photo-2437297.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 129.99,
    location: "Nostalgia Arcade",
    country: "Gameland"
  },
  {
    title: "Organic Tea Sampler",
    description: "Delight your senses with this organic tea collection.",
    image: "https://images.pexels.com/photos/2929211/pexels-photo-2929211.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 24.95,
    location: "Tea Haven",
    country: "Infusionia"
  },
  {
    title: "Solar-Powered Garden Lights",
    description: "Illuminate your garden with eco-friendly solar lights.",
    image: "https://images.pexels.com/photos/1687678/pexels-photo-1687678.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 39.99,
    location: "Green Oasis",
    country: "EcoTopia"
  },
  {
    title: "Home Gym Equipment Set",
    description: "Stay fit at home with this comprehensive gym set.",
    image: "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 499.00,
    location: "Fitness Junction",
    country: "Healthland"
  },
  {
    title: "Leather Travel Backpack",
    description: "Stylish and functional backpack for your travels.",
    image: "https://images.pexels.com/photos/33688/delicate-arch-night-stars-landscape.jpg?auto=compress&cs=tinysrgb&w=600",
    price: 129.99,
    location: "Wanderlust Plaza",
    country: "Explorica"
  },
  {
    title: "Hydroponic Indoor Plant Kit",
    description: "Grow fresh herbs indoors with this hydroponic kit.",
    image: "https://images.pexels.com/photos/36762/scarlet-honeyeater-bird-red-feathers.jpg?auto=compress&cs=tinysrgb&w=600",
    price: 79.95,
    location: "Urban Garden",
    country: "Greenopia"
  },
  {
    title: "Smart Home Security System",
    description: "Keep your home secure with this smart security setup.",
    image: "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=600",
    price: 299.99,
    location: "Safe Haven",
    country: "Secureland"
  },
  {
    title: "Meditation Pillow Set",
    description: "Enhance your meditation practice with this comfortable set.",
    image: "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 49.99,
    location: "Zen Zone",
    country: "Tranquiland"
  },
  {
    title: "Outdoor Telescope",
    description: "Explore the stars with this powerful outdoor telescope.",
    image: "https://images.pexels.com/photos/1598073/pexels-photo-1598073.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 199.00,
    location: "Starry Skies Observatory",
    country: "Celestia"
  },
  {
    title: "Portable Espresso Maker",
    description: "Enjoy espresso on the go with this compact coffee maker.",
    image: "https://images.pexels.com/photos/459203/pexels-photo-459203.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 79.99,
    location: "Bean Boulevard",
    country: "Caffeinia"
  }
];


  module.exports={data:sampleListing}; 