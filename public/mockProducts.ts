import productImage1 from "../public/product-image/1.jpg";
import productImage2 from "../public/product-image/2.jpg";
import productImage3 from "../public/product-image/3.jpg";

const Products = [
  {
    id: 1,
    name: "Men's Casual Shirt",
    description: "A comfortable and stylish casual shirt for men",
    category: "Seasonal Picks",
    type: ["Men", "Men Shirts", "Men Shirts Casual Shirts"],
    gender: "Men",
    brand: "Gentlemen's Club",
    price: 49.99,
    images: [productImage1, productImage2, productImage3],
  },
  {
    id: 2,
    name: "Women's Sandals",
    description: "Stylish and comfortable sandals for women",
    category: "Trending Products",
    type: ["Women", "Women Shoes", "Women Shoes Sandals"],
    gender: "Women",
    brand: "Elegance",
    price: 79.99,
    images: [productImage1, productImage2, productImage3],
  },
  {
    id: 3,
    name: "Kids' Jeans",
    description: "Stylish and comfortable jeans for kids",
    category: "New Arrivals",
    type: ["Kids", "Kids Boys", "Kids Boys Pants", "Kids Boys Pants Jeans"],
    gender: "Kids",
    brand: "Kidswear",
    price: 39.99,
    images: [productImage1, productImage2, productImage3],
  },
  {
    id: 4,
    name: "Men's Trousers",
    description: "Comfortable and stylish trousers for men",
    category: "Seasonal Picks",
    type: ["Men", "Men Pants", "Men Pants Trousers"],
    gender: "Men",
    brand: "Gentlemen's Club",
    price: 89.99,
    images: [productImage1, productImage2, productImage3],
  },
  {
    id: 5,
    name: "Women's Formal Dress",
    description: "Elegant formal dress for women",
    category: "Trending Products",
    type: ["Women", "Women Dresses", "Women Dresses Formal Dresses"],
    gender: "Women",
    brand: "Elegance",
    price: 199.99,
    images: [productImage1, productImage2, productImage3],
  },
  {
    id: 6,
    name: "Kids' Formal Dress",
    description: "Stylish formal dress for kids",
    category: "New Arrivals",
    type: [
      "Kids",
      "Kids Girls",
      "Kids Girls Dresses",
      "Kids Girls Dresses Formal Dresses",
    ],
    gender: "Kids",
    brand: "Kidswear",
    price: 79.99,
    images: [productImage1, productImage2, productImage3],
  },
  {
    id: 7,
    name: "Men's Sneakers",
    description: "Stylish and comfortable sneakers for men",
    category: "Seasonal Picks",
    type: ["Men", "Men Shoes", "Men Shoes Sneakers"],
    gender: "Men",
    brand: "Gentlemen's Club",
    price: 119.99,
    images: [productImage1, productImage2, productImage3],
  },
  {
    id: 8,
    name: "Men's Formal Shoes",
    description: "Stylish and elegant men's formal shoes",
    category: "Trending Products",
    type: ["Men", "Men Shoes", "Men Shoes Formal Shoes"],
    gender: "Men",
    brand: "Elegance",
    price: 149.99,
    images: [productImage1, productImage2, productImage3],
  },
  {
    id: 9,
    name: "Women's Heels",
    description: "Elegant and stylish heels for women",
    category: "New Arrivals",
    type: ["Women", "Women Shoes", "Men Shoes Heels"],
    gender: "Women",
    brand: "Elegance",
    price: 129.99,
    images: [productImage1, productImage2, productImage3],
  },
  {
    id: 10,
    name: "Kids' Casual Shirt",
    description: "Stylish and comfortable casual shirt for kids",
    category: "Seasonal Picks",
    type: [
      "Kids",
      "Kids Boys",
      "Kids Boys Shirts",
      "Kids Boys Shirts Casual Shirt",
    ],
    gender: "Kids",
    brand: "Kidswear",
    price: 29.99,
    images: [productImage1, productImage2, productImage3],
  },
  {
    id: 11,
    name: "Women's Long Skirt",
    description: "Elegant and comfortable long skirt for women",
    category: "Trending Products",
    type: ["Women", "Women Skirts", "Women Skirts Long Skirts"],
    gender: "Women",
    brand: "Elegance",
    price: 99.99,
    images: [productImage1, productImage2, productImage3],
  },
  {
    id: 12,
    name: "Kids' Shorts",
    description: "Comfortable and stylish shorts for kids",
    category: "New Arrivals",
    type: ["Kids", "Kids Boys", "Kids Boys Pants", "Kids Boys Pants Shorts"],
    gender: "Kids",
    brand: "Kidswear",
    price: 24.99,
    images: [productImage1, productImage2, productImage3],
  },
  {
    id: 13,
    name: "Men's Trousers",
    description: "Classic and comfortable trousers for men",
    category: "New Arrivals",
    type: ["Men", "Men Pants", "Men Pants Trousers"],
    gender: "Men",
    brand: "Classicwear",
    price: 79.99,
    images: [productImage1, productImage2, productImage3],
  },
  {
    id: 14,
    name: "Women's Casual Dress",
    description: "Comfortable and stylish casual dress for women",
    category: "Trending Products",
    type: ["Women", "Women Dresses", "Women Dresses Casual Dresses"],
    gender: "Women",
    brand: "Elegance",
    price: 89.99,
    images: [productImage1, productImage2, productImage3],
  },
  {
    id: 15,
    name: "Kids' Sneakers",
    description: "Stylish and comfortable sneakers for kids",
    category: "Seasonal Picks",
    type: ["Kids", "Kids Boys", "Kids Boys Shoes", "Kids Boys Shoes Sneakers"],
    gender: "Kids",
    brand: "Kidswear",
    price: 49.99,
    images: [productImage1, productImage2, productImage3],
  },
  {
    id: 16,
    name: "Men's Formal Shirt",
    description: "Elegant and classic formal shirt for men",
    category: "Trending Products",
    type: ["Men", "Men Shirts", "Men Shirts Formal Shirts"],
    gender: "Men",
    brand: "Classicwear",
    price: 59.99,
    images: [productImage1, productImage2, productImage3],
  },
  {
    id: 17,
    name: "Women's Short Skirt",
    description: "Elegant and comfortable short skirt for women",
    category: "New Arrivals",
    type: ["Women", "Women Skirts", "Women Skirts Short Skirts"],
    gender: "Women",
    brand: "Elegance",
    price: 69.99,
    images: [productImage1, productImage2, productImage3],
  },
  {
    id: 18,
    name: "Kids' Formal Dress",
    description: "Elegant and stylish formal dress for kids",
    category: "Trending Products",
    type: [
      "Kids",
      "Kids Girls",
      "Kids Girls Dresses",
      "Kids Girls Dresses Formal Dresses",
    ],
    gender: "Kids",
    brand: "Kidswear",
    price: 59.99,
    images: [productImage1, productImage2, productImage3],
  },
  {
    id: 19,
    name: "Men's Jeans",
    description: "Stylish and comfortable jeans for men",
    category: "Seasonal Picks",
    type: ["Men", "Men Pants", "Men Pants Jeans"],
    gender: "Men",
    brand: "Denim Co.",
    price: 99.99,
    images: [productImage1, productImage2, productImage3],
  },
  {
    id: 20,
    name: "Women's Sandals",
    description: "Comfortable and elegant sandals for women",
    category: "Trending Products",
    type: ["Women", "Women Shoes", "Women Shoes Sandals"],
    gender: "Women",
    brand: "Elegance",
    price: 79.99,
    images: [productImage1, productImage2, productImage3],
  },
  {
    id: 21,
    name: "Kids' Shorts",
    description: "Stylish and comfortable shorts for kids",
    category: "New Arrivals",
    type: ["Kids", "Kids Boys", "Kids Boys Pants", "Kids Boys Pants Shorts"],
    gender: "Kids",
    brand: "Kidswear",
    price: 39.99,
    images: [productImage1, productImage2, productImage3],
  },
  {
    id: 22,
    name: "Men's Formal Shoes",
    description: "Elegant and comfortable formal shoes for men",
    category: "Seasonal Picks",
    type: ["Men", "Men Shoes", "Men Shoes Formal Shoes"],
    gender: "Men",
    brand: "Classicwear",
    price: 119.99,
    images: [productImage1, productImage2, productImage3],
  },
  {
    id: 23,
    name: "Women's Heels",
    description: "Elegant and stylish heels for women",
    category: "Trending Products",
    type: ["Women", "Women Shoes", "Women Shoes Heels"],
    gender: "Women",
    brand: "Elegance",
    price: 89.99,
    images: [productImage1, productImage2, productImage3],
  },
  {
    id: 24,
    name: "Men's Trousers",
    description: "Comfortable and stylish trousers for men",
    category: "Trending Products",
    type: ["Men", "Men Pants", "Men Pants Trousers"],
    gender: "Men",
    brand: "Urbanwear",
    price: 79.99,
    images: [productImage1, productImage2, productImage3],
  },
  {
    id: 25,
    name: "Women's Sandals",
    description: "Comfortable and stylish sandals for women",
    category: "New Arrivals",
    type: ["Women", "Women Shoes", "Women Shoes Sandals"],
    gender: "Women",
    brand: "Summerfoot",
    price: 49.99,
    images: [productImage1, productImage2, productImage3],
  },
  {
    id: 26,
    name: "Kids' Sneakers",
    description: "Colorful and comfortable sneakers for kids",
    category: "Seasonal Picks",
    type: [
      "Kids",
      "Kids Girls",
      "Kids Girls Shoes",
      "Kids Girls Shoes Sneakers",
    ],
    gender: "Kids",
    brand: "Kidswear",
    price: 59.99,
    images: [productImage1, productImage2, productImage3],
  },
  {
    id: 27,
    name: "Men's Formal Shirts",
    description: "Elegant and stylish formal shirts for men",
    category: "New Arrivals",
    type: ["Men", "Men Shirts", "Men Shirts Formal Shirts"],
    gender: "Men",
    brand: "Classicwear",
    price: 89.99,
    images: [productImage1, productImage2, productImage3],
  },
  {
    id: 28,
    name: "Women's Short Skirt",
    description: "Cute and stylish short skirt for women",
    category: "Trending Products",
    type: ["Women", "Women Skirts", "Women Skirts Short Skirts"],
    gender: "Women",
    brand: "Elegance",
    price: 69.99,
    images: [productImage1, productImage2, productImage3],
  },
  {
    id: 29,
    name: "Kids' Casual Dresses",
    description: "Comfortable and cute casual dresses for kids",
    category: "Seasonal Picks",
    type: [
      "Kids",
      "Kids Girls",
      "Kids Girls Dresses",
      "Kids Girls Dresses Casual Dresses",
    ],
    gender: "Kids",
    brand: "Kidswear",
    price: 49.99,
    images: [productImage1, productImage2, productImage3],
  },
  {
    id: 30,
    name: "Men's Jeans",
    description: "Stylish and comfortable jeans for men",
    category: "New Arrivals",
    type: "Jeans",
    gender: "Men",
    brand: "Urbanwear",
    price: 99.99,
    images: [productImage1, productImage2, productImage3],
  },
  {
    id: 31,
    name: "Women's Formal Dresses",
    description: "Elegant and stylish formal dresses for women",
    category: "Seasonal Picks",
    type: ["Women", "Women Dresses", "Women Dresses Formal Dresses"],
    gender: "Women",
    price: 39.99,
    brand: "Elegance",
    images: [productImage1, productImage2, productImage3],
  },
  {
    id: 32,
    name: "Kids' Shorts",
    description: "Comfortable and stylish shorts for kids",
    category: "Trending Products",
    type: "Shorts",
    gender: "Kids",
    brand: "Kidswear",
    price: 39.99,
    images: [productImage1, productImage2, productImage3],
  },
  {
    id: 33,
    name: "Men's Formal Shoes",
    description: "Elegant and stylish formal shoes for men",
    category: "New Arrivals",
    type: "Formal Shoes",
    gender: "Men",
    brand: "Classicwear",
    price: 129.99,
    images: [productImage1, productImage2, productImage3],
  },
  {
    id: 34,
    name: "Women's Long Skirt",
    description: "Elegant and stylish long skirt for women",
    category: "Seasonal Picks",
    type: "Long Skirts",
    gender: "Women",
    brand: "Elegance",
    price: 89.99,
    images: [productImage1, productImage2, productImage3],
  },
  {
    id: 35,
    name: "Kids' Formal Dresses",
    description: "Elegant and stylish formal dresses for kids",
    category: "Trending Products",
    type: [
      "Kids",
      "Kids Girls",
      "Kids Girls Dresses",
      "Kids Girls Dresses Formal Dresses",
    ],
    gender: "Kids",
    brand: "Kidswear",
    price: 59.99,
    images: [productImage1, productImage2, productImage3],
  },
  {
    id: 36,
    name: "Men's Casual Shirts",
    description: "Comfortable and stylish casual shirts for men",
    category: "Seasonal Picks",
    type: ["Men", "Men Shirts", "Men Shirts Casual Shirts"],
    gender: "Men",
    brand: "Urbanwear",
    price: 69.99,
    images: [productImage1, productImage2, productImage3],
  },
  {
    id: 37,
    name: "Women's Heels",
    description: "Elegant and stylish heels for women",
    category: "New Arrivals",
    type: ["Women", "Women Shoes", "Women Shoes Heels"],
    gender: "Women",
    brand: "Elegance",
    price: 119.99,
    images: [productImage1, productImage2, productImage3],
  },
  {
    id: 38,
    name: "Kids' Sneakers",
    description: "Colorful and comfortable sneakers for kids",
    category: "Trending Products",
    type: [
      "Kids",
      "Kids Girls",
      "Kids Girls Shoes",
      "Kids Girls Shoes Sneakers",
    ],
    gender: "Kids",
    brand: "Kidswear",
    price: 59.99,
    images: [productImage1, productImage2, productImage3],
  },
  {
    id: 39,
    name: "Men's Sneakers",
    description: "Comfortable and stylish sneakers for men",
    category: "Seasonal Picks",
    type: ["Men", "Men Shoes", "Men Shoes Sneakers"],
    gender: "Men",
    brand: "Urbanwear",
    price: 89.99,
    images: [productImage1, productImage2, productImage3],
  },
  {
    id: 40,
    name: "Women's Sandals",
    description: "Comfortable and stylish sandals for women",
    category: "New Arrivals",
    type: ["Women", "Women Shoes", "Women Shoes Sandals"],
    gender: "Women",
    brand: "Beachwear",
    price: 49.99,
    images: [productImage1, productImage2, productImage3],
  },
  {
    id: 41,
    name: "Kids' Casual Shirts",
    description: "Comfortable and stylish casual shirts for kids",
    category: "Trending Products",
    type: [
      "Kids",
      "Kids Boys",
      "Kids Boys Shirts",
      "Kids Boys Shirts Casual Shirts",
    ],
    gender: "Kids",
    brand: "Kidswear",
    price: 34.99,
    images: [productImage1, productImage2, productImage3],
  },
  {
    id: 42,
    name: "Men's Formal Trousers",
    description: "Elegant and stylish formal trousers for men",
    category: "Seasonal Picks",
    type: ["Men", "Men Pants", "Men Pants Trousers"],
    gender: "Men",
    brand: "Classicwear",
    price: 99.99,
    images: [productImage1, productImage2, productImage3],
  },
  {
    id: 43,
    name: "Women's Short Skirt",
    description: "Elegant and stylish short skirt for women",
    category: "New Arrivals",
    type: ["Women", "Women Skirts", "Women Skirts Short Skirts"],
    gender: "Women",
    brand: "Elegance",
    price: 69.99,
    images: [productImage1, productImage2, productImage3],
  },
  {
    id: 44,
    name: "Kids' Formal Shoes",
    description: "Elegant and stylish formal shoes for kids",
    category: "Trending Products",
    type: [
      "Kids",
      "Kids Boys",
      "Kids Boys Shoes",
      "Kids Boys Shoes Formal Shoes",
    ],
    gender: "Kids",
    brand: "Kidswear",
    price: 69.99,
    images: [productImage1, productImage2, productImage3],
  },
  {
    id: 45,
    name: "Men's Jeans",
    description: "Comfortable and stylish jeans for men",
    category: "Seasonal Picks",
    type: ["Men", "Men Pants", "Men Pants Jeans"],

    gender: "Men",
    brand: "Urbanwear",
    price: 79.99,
    images: [productImage1, productImage2, productImage3],
  },
  {
    id: 46,
    name: "Women's Casual Dresses",
    description: "Comfortable and stylish casual dresses for women",
    category: "New Arrivals",
    type: ["Women", "Women Dresses", "Women Dresses Casual Dresses"],
    gender: "Women",
    brand: "Bohemian",
    price: 59.99,
    images: [productImage1, productImage2, productImage3],
  },
  {
    id: 47,
    name: "Kids' Casual Dresses",
    description: "Comfortable and stylish casual dresses for kids",
    category: "Trending Products",
    type: [
      "Kids",
      "Kids Girls",
      "Kids Girls Dresses",
      "Kids Girls Dresses Casual Dresses",
    ],
    gender: "Kids",
    brand: "Kidswear",
    price: 39.99,
    images: [productImage1, productImage2, productImage3],
  },
  {
    id: 48,
    name: "Men's Sneakers",
    description: "Comfortable and stylish sneakers for men",
    category: "Seasonal Picks",
    type: ["Men", "Men Shoes", "Men Shoes Sneakers"],
    gender: "Men",
    brand: "Sportswear",
    price: 89.99,
    images: [productImage1, productImage2, productImage3],
  },
  {
    id: 49,
    name: "Women's Sandals",
    description: "Elegant and stylish formal shoes for women",
    category: "New Arrivals",
    type: ["Women", "Women Shoes", "Women Shoes Sandals"],
    gender: "Women",
    brand: "Elegance",
    price: 129.99,
    images: [productImage1, productImage2, productImage3],
  },
  {
    id: 50,
    name: "Kids' Shorts",
    description: "Comfortable and stylish shorts for kids",
    category: "Trending Products",
    type: ["Kids", "Kids Boys", "Kids Boys Pants", "Kids Boys Pants Shorts"],
    gender: "Kids",
    brand: "Kidswear",
    price: 29.99,
    images: [productImage1, productImage2, productImage3],
  },
  {
    id: 51,
    name: "Men's Formal Shirts",
    description: "Elegant and stylish formal shirts for men",
    category: "Seasonal Picks",
    type: ["Men", "Men Shirts", "Men Shirts Formal Shirts"],
    gender: "Men",
    brand: "Classicwear",
    price: 89.99,
    images: [productImage1, productImage2, productImage3],
  },
  {
    id: 52,
    name: "Women's Heels",
    description: "Elegant and stylish heels for women",
    category: "New Arrivals",
    type: ["Women", "Women Shoes", "Women Shoes Heels"],
    gender: "Women",
    brand: "Elegance",
    price: 149.99,
    images: [productImage1, productImage2, productImage3],
  },
  {
    id: 53,
    name: "Kids' Formal Shirts",
    description: "Elegant and stylish formal shirts for kids",
    category: "Trending Products",
    type: [
      "Kids",
      "Kids Boys",
      "Kids Boys Shirts",
      "Kids Boys Shirts Formal Shirts",
    ],
    gender: "Kids",
    brand: "Kidswear",
    price: 44.99,
    images: [productImage1, productImage2, productImage3],
  },
  {
    id: 54,
    name: "Men's Casual Shirts",
    description: "Comfortable and stylish casual shirts for men",
    category: "Seasonal Picks",
    type: ["Men", "Men Shirts", "Men Shirts Casual Shirts"],
    gender: "Men",
    brand: "Urbanwear",
    price: 59.99,
    images: [productImage1, productImage2, productImage3],
  },
  {
    id: 55,
    name: "Women's Long Skirt",
    description: "Elegant and stylish long skirt for women",
    category: "New Arrivals",
    type: ["Women", "Women Skirts", "Women Skirts Long Skirts"],
    gender: "Women",
    brand: "Elegance",
    price: 89.99,
    images: [productImage1, productImage2, productImage3],
  },
];
export default Products;
