const categories = [
  {
    id: "1",
    name: "Man",
    image:
      "https://images.unsplash.com/photo-1517938889432-a2ac9241a486?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1468&q=80https://images.unsplash.com/photo-1520975708797-fd2543e902bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    subcategories: [
      {
        id: "1.1",
        name: "Shirts",
        image:
          "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        subcategories: [
          {
            id: "man-shirts-casual",
            name: "Casual Shirts",
            image:
              "https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
          },
          {
            id: "man-shirts-formal",
            name: "Formal Shirts",
            image:
              "https://images.unsplash.com/photo-1491336477066-31156b5e4f35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
          },
        ],
      },
      {
        id: "1.2",
        name: "Pants",
        image:
          "https://images.unsplash.com/photo-1624378440020-29b5e50ad469?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2075&q=80",
        subcategories: [
          {
            id: "man-pants-jeans",
            name: "Jeans",
            image:
              "https://images.unsplash.com/photo-1643201523264-b368be40aa7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1475&q=80",
          },
          {
            id: "man-pants-trousers",
            name: "Trousers",
          },
        ],
      },
      {
        id: "1.3",
        name: "Shoes",
        subcategories: [
          {
            id: "man-shoes-sneakers",
            name: "Sneakers",
          },
          {
            id: "man-shoes-formal",
            name: "Formal Shoes",
          },
        ],
      },
    ],
  },
  {
    id: "2",
    name: "Woman",
    image:
      "https://images.unsplash.com/photo-1585065785035-9bf5bc78feaf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",
    subcategories: [
      {
        id: "2.1",
        name: "Dresses",
        subcategories: [
          {
            id: "2.1.1",
            name: "Casual Dresses",
          },
          {
            id: "2.1.2",
            name: "Formal Dresses",
          },
        ],
      },
      {
        id: "2.2",
        name: "Skirts",
        subcategories: [
          {
            id: "2.2.1",
            name: "Long Skirts",
          },
          {
            id: "2.2.2",
            name: "Short Skirts",
          },
        ],
      },
      {
        id: "2.3",
        name: "Shoes",
        subcategories: [
          {
            id: "2.3.1",
            name: "Sandals",
          },
          {
            id: "2.3.2",
            name: "Heels",
          },
        ],
      },
    ],
  },
  {
    id: "3",
    name: "Kids",
    image:
      "https://images.unsplash.com/photo-1520413624224-91d4554286bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
    subcategories: [
      {
        id: "3.1",
        name: "Boys",
        subcategories: [
          {
            id: "3.1.1",
            name: "Shirts",
            subcategories: [
              {
                id: "3.1.1.1",
                name: "Casual Shirts",
              },
              {
                id: "3.1.1.2",
                name: "Formal Shirts",
              },
            ],
          },
          {
            id: "3.1.2",
            name: "Pants",
            subcategories: [
              {
                id: "3.1.2.1",
                name: "Jeans",
              },
              {
                id: "3.1.2.2",
                name: "Shorts",
              },
            ],
          },
          {
            id: "3.1.3",
            name: "Shoes",
            subcategories: [
              {
                id: "3.1.3.1",
                name: "Sneakers",
              },
              {
                id: "3.1.3.2",
                name: "Formal Shoes",
              },
            ],
          },
        ],
      },
      {
        id: "3.2",
        name: "Girls",
        subcategories: [
          {
            id: "3.2.1",
            name: "Dresses",
            subcategories: [
              {
                id: "3.2.1.1",
                name: "Casual Dresses",
              },
              {
                id: "3.2.1.2",
                name: "Formal Dresses",
              },
            ],
          },
          {
            id: "3.2.2",
            name: "Skirts",
            subcategories: [
              {
                id: "3.2.2.1",
                name: "Long Skirts",
              },
              {
                id: "3.2.2.2",
                name: "Short Skirts",
              },
            ],
          },
          {
            id: "3.2.3",
            name: "Shoes",
            subcategories: [
              {
                id: "3.2.3.1",
                name: "Sandals",
              },
              {
                id: "3.2.3.2",
                name: "Heels",
              },
            ],
          },
        ],
      },
    ],
  },
];

export default categories;
