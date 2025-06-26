import { Product } from "./types";

export const products: Product[] = [
  {
    id: "1",
    title: "Running Shoes",
    price: 99,
    image:
      "https://cdn.pixabay.com/photo/2015/02/09/13/40/shoe-629643_1280.jpg",
    category: "Clothing",
    description:
      "Comfortable running shoes with excellent cushioning and support for your daily runs.",
    reviews: [
      {
        id: "1",
        author: "John Doe",
        comment: "Excellent shoes, very comfortable!",
        date: "2024-01-15",
      },
    ],
    inStock: true,
  },
  {
    id: "2",
    title: "Wireless Headphones",
    price: 149,
    image:
      "https://cdn.pixabay.com/photo/2018/09/17/22/26/headphone-3684963_1280.jpg",
    category: "Electronics",
    description:
      "High-quality wireless headphones with noise cancellation and long battery life.",
    reviews: [
      {
        id: "2",
        author: "Jane Smith",
        comment: "Amazing sound quality and comfort.",
        date: "2024-01-20",
      },
    ],
    inStock: true,
  },
  {
    id: "3",
    title: "Backpack",
    price: 129,
    image:
      "https://cdn.pixabay.com/photo/2017/08/02/00/54/travel-2569284_1280.jpg",
    category: "Accessories",
    description:
      "Durable and spacious backpack perfect for travel and outdoor activities.",
    reviews: [],
    inStock: true,
  },
  {
    id: "4",
    title: "Smartwatch",
    price: 249,
    image:
      "https://cdn.pixabay.com/photo/2015/06/25/17/22/smart-watch-821559_1280.jpg",
    category: "Electronics",
    description:
      "Advanced smartwatch with health tracking, GPS, and app ecosystem.",
    reviews: [
      {
        id: "3",
        author: "Mike Johnson",
        comment: "Great features and build quality.",
        date: "2024-01-25",
      },
    ],
    inStock: true,
  },
  {
    id: "5",
    title: "Sunglasses",
    price: 89,
    image:
      "https://cdn.pixabay.com/photo/2017/07/13/14/05/wood-sunglasses-2500493_1280.jpg",
    category: "Accessories",
    description: "Classic sunglasses with UV protection and stylish design.",
    reviews: [],
    inStock: true,
  },
  {
    id: "6",
    title: "Digital Camera",
    price: 499,
    image:
      "https://cdn.pixabay.com/photo/2014/11/22/00/51/camera-541213_1280.jpg",
    category: "Electronics",
    description:
      "Professional digital camera with high resolution and advanced features.",
    reviews: [
      {
        id: "4",
        author: "Sarah Wilson",
        comment: "Excellent camera for photography enthusiasts.",
        date: "2024-01-30",
      },
    ],
    inStock: true,
  },
  {
    id: "7",
    title: "T-shirt",
    price: 29,
    image:
      "https://cdn.pixabay.com/photo/2025/05/20/10/57/t-shirt-9611374_1280.jpg",
    category: "Clothing",
    description: "Comfortable cotton t-shirt available in multiple colors.",
    reviews: [],
    inStock: true,
  },
  {
    id: "8",
    title: "Smartphone",
    price: 699,
    image:
      "https://cdn.pixabay.com/photo/2014/08/05/10/27/iphone-410311_1280.jpg",
    category: "Electronics",
    description:
      "Latest smartphone with advanced camera system and powerful processor.",
    reviews: [
      {
        id: "5",
        author: "David Brown",
        comment: "Great phone with excellent camera quality.",
        date: "2024-02-01",
      },
    ],
    inStock: true,
  },
];

export const categories = ["Electronics", "Clothing", "Accessories", "Home"];
