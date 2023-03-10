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
          "https://images.unsplash.com/photo-1604176354204-9268737828e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
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
            image:
              "https://images.unsplash.com/photo-1490503793528-4c730cc7fcb9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
          },
        ],
      },
      {
        id: "1.3",
        name: "Shoes",
        image:
          "https://images.unsplash.com/photo-1449505278894-297fdb3edbc1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        subcategories: [
          {
            id: "man-shoes-sneakers",
            name: "Sneakers",
            image:
              "https://images.unsplash.com/photo-1514989771522-458c9b6c035a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
          },
          {
            id: "man-shoes-formal",
            name: "Formal Shoes",
            image:
              "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1630&q=80",
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
        image:
          "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        subcategories: [
          {
            id: "2.1.1",
            name: "Casual Dresses",
            image:
              "https://images.unsplash.com/photo-1504194921103-f8b80cadd5e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
          },
          {
            id: "2.1.2",
            name: "Formal Dresses",
            image:
              "https://images.unsplash.com/photo-1613650329416-9c8a02d97ce1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
          },
        ],
      },
      {
        id: "2.2",
        name: "Skirts",
        image:
          "https://images.unsplash.com/photo-1577900232427-18219b9166a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        subcategories: [
          {
            id: "2.2.1",
            name: "Long Skirts",
            image:
              "https://images.unsplash.com/photo-1593756287137-df3c9b0bd731?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
          },
          {
            id: "2.2.2",
            name: "Short Skirts",
            image:
              "https://images.unsplash.com/photo-1582142306909-195724d33ffc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
          },
        ],
      },
      {
        id: "2.3",
        name: "Shoes",
        image:
          "https://images.unsplash.com/photo-1519415943484-9fa1873496d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
        subcategories: [
          {
            id: "2.3.1",
            name: "Sandals",
            image:
              "https://images.unsplash.com/photo-1568347619798-2008f2ce5b94?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
          },
          {
            id: "2.3.2",
            name: "Heels",
            image:
              "https://images.unsplash.com/photo-1525753609950-724d3715874d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
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
        image:
          "https://images.unsplash.com/photo-1615199951711-efaf9391bfc8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80",
        subcategories: [
          {
            id: "3.1.1",
            name: "Shirts",
            image:
              "https://images.unsplash.com/photo-1514090458221-65bb69cf63e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            subcategories: [
              {
                id: "3.1.1.1",
                name: "Casual Shirts",
                image:
                  "https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
              },
              {
                id: "3.1.1.2",
                name: "Formal Shirts",
                image:
                  "https://images.unsplash.com/photo-1480447960197-7469a0440dbf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
              },
            ],
          },
          {
            id: "3.1.2",
            name: "Pants",
            image:
              "https://images.unsplash.com/photo-1463200870069-e707405e5fdf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            subcategories: [
              {
                id: "3.1.2.1",
                name: "Jeans",
                image:
                  "https://images.unsplash.com/photo-1623340172826-5720529e3ce7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80",
              },
              {
                id: "3.1.2.2",
                name: "Shorts",
                image:
                  "https://images.unsplash.com/photo-1518771109721-6dbe1116cfee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80",
              },
            ],
          },
          {
            id: "3.1.3",
            name: "Shoes",
            image:
              "https://images.unsplash.com/photo-1622253543934-c3cb280f8323?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            subcategories: [
              {
                id: "3.1.3.1",
                name: "Sneakers",
                image:
                  "https://images.unsplash.com/photo-1599654766593-d43341df51cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
              },
              {
                id: "3.1.3.2",
                name: "Formal Shoes",
                image:
                  "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1412&q=80",
              },
            ],
          },
        ],
      },
      {
        id: "3.2",
        name: "Girls",
        image:
          "https://images.unsplash.com/flagged/photo-1550378982-4de349edd809?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
        subcategories: [
          {
            id: "3.2.1",
            name: "Dresses",
            image:
              "https://images.unsplash.com/photo-1519500177268-275a33f4f849?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80",
            subcategories: [
              {
                id: "3.2.1.1",
                name: "Casual Dresses",
                image:
                  "https://images.unsplash.com/photo-1655555082135-ff20dba28306?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
              },
              {
                id: "3.2.1.2",
                name: "Formal Dresses",
                image:
                  "https://images.unsplash.com/photo-1615556998894-080785905be8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
              },
            ],
          },
          {
            id: "3.2.2",
            name: "Skirts",
            image:
              "https://images.unsplash.com/photo-1505264987448-83038d4272ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1486&q=80",
            subcategories: [
              {
                id: "3.2.2.1",
                name: "Long Skirts",
                image:
                  "https://images.unsplash.com/photo-1590261202105-ee950ab6e54d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1466&q=80",
              },
              {
                id: "3.2.2.2",
                name: "Short Skirts",
                image:
                  "https://images.unsplash.com/photo-1611708314849-8bb91fe0fa56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
              },
            ],
          },
          {
            id: "3.2.3",
            name: "Shoes",
            image:
              "https://images.unsplash.com/photo-1584564515943-b54cbb61836b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            subcategories: [
              {
                id: "3.2.3.1",
                name: "Sandals",
                image:
                  "https://images.unsplash.com/photo-1517236703105-9ec38fec32a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
              },
              {
                id: "3.2.3.2",
                name: "Sneakers",
                image:
                  "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1412&q=80",
              },
            ],
          },
        ],
      },
    ],
  },
];

export default categories;
