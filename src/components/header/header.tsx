import styles from "./header.module.sass";
import HeaderNavigation from "./header_navigation/header-navigation";
import HeaderNavigationMobile from "./header_navigation_mobile/header_navigation_mobile";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Image from "next/image";
import kids from "../../../public/kids.jpg";
import mans from "../../../public/mans.jpg";
import womans from "../../../public/womans.jpg";
const Header = () => {
  const [hamburgerMenuVisible, SetHamburgerMenuVisible] = useState(false);

  const hamburgerMenuHandler = () => {
    SetHamburgerMenuVisible(!hamburgerMenuVisible);
    console.log(hamburgerMenuVisible);
  };

  const categories = [
    {
      id: "man",
      name: "Man",
      image:
        "https://images.unsplash.com/photo-1517938889432-a2ac9241a486?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1468&q=80https://images.unsplash.com/photo-1520975708797-fd2543e902bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      subcategories: [
        {
          id: "man-shirts",
          name: "Shirts",
          subcategories: [
            {
              id: "man-shirts-casual",
              name: "Casual Shirts",
              subcategories: [],
            },
            {
              id: "man-shirts-formal",
              name: "Formal Shirts",
              subcategories: [],
            },
          ],
        },
        {
          id: "man-pants",
          name: "Pants",
          subcategories: [
            {
              id: "man-pants-jeans",
              name: "Jeans",
              subcategories: [],
            },
            {
              id: "man-pants-trousers",
              name: "Trousers",
              subcategories: [],
            },
          ],
        },
        {
          id: "man-shoes",
          name: "Shoes",
          subcategories: [
            {
              id: "man-shoes-sneakers",
              name: "Sneakers",
              subcategories: [],
            },
            {
              id: "man-shoes-formal",
              name: "Formal Shoes",
              subcategories: [],
            },
          ],
        },
      ],
    },
    {
      id: "woman",
      name: "Woman",
      image:
        "https://images.unsplash.com/photo-1585065785035-9bf5bc78feaf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",
      subcategories: [
        {
          id: "woman-dresses",
          name: "Dresses",
          subcategories: [
            {
              id: "woman-dresses-casual",
              name: "Casual Dresses",
              subcategories: [],
            },
            {
              id: "woman-dresses-formal",
              name: "Formal Dresses",
              subcategories: [],
            },
          ],
        },
        {
          id: "woman-skirts",
          name: "Skirts",
          subcategories: [
            {
              id: "woman-skirts-long",
              name: "Long Skirts",
              subcategories: [],
            },
            {
              id: "woman-skirts-short",
              name: "Short Skirts",
              subcategories: [],
            },
          ],
        },
        {
          id: "woman-shoes",
          name: "Shoes",
          subcategories: [
            {
              id: "woman-shoes-sandals",
              name: "Sandals",
              subcategories: [],
            },
            {
              id: "woman-shoes-heels",
              name: "Heels",
              subcategories: [],
            },
          ],
        },
      ],
    },
    {
      id: "kids",
      name: "Kids",
      image:
        "https://images.unsplash.com/photo-1520413624224-91d4554286bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
      subcategories: [
        {
          id: "kids-boys",
          name: "Boys",
          subcategories: [
            {
              id: "kids-boys-shirts",
              name: "Shirts",
              subcategories: [
                {
                  id: "kids-boys-shirts-casual",
                  name: "Casual Shirts",
                  subcategories: [],
                },
                {
                  id: "kids-boys-shirts-formal",
                  name: "Formal Shirts",
                  subcategories: [],
                },
              ],
            },
            {
              id: "kids-boys-pants",
              name: "Pants",
              subcategories: [
                {
                  id: "kids-boys-pants-jeans",
                  name: "Jeans",
                  subcategories: [],
                },
                {
                  id: "kids-boys-pants-shorts",
                  name: "Shorts",
                  subcategories: [],
                },
              ],
            },
            {
              id: "kids-boys-shoes",
              name: "Shoes",
              subcategories: [
                {
                  id: "kids-boys-shoes-sneakers",
                  name: "Sneakers",
                  subcategories: [],
                },
                {
                  id: "kids-boys-shoes-formal",
                  name: "Formal Shoes",
                  subcategories: [],
                },
              ],
            },
          ],
        },
        {
          id: "kids-girls",
          name: "Girls",
          subcategories: [
            {
              id: "kids-girls-dresses",
              name: "Dresses",
              subcategories: [
                {
                  id: "kids-girls-dresses-casual",
                  name: "Casual Dresses",
                  subcategories: [],
                },
                {
                  id: "kids-girls-dresses-formal",
                  name: "Formal Dresses",
                  subcategories: [],
                },
              ],
            },
            {
              id: "kids-girls-skirts",
              name: "Skirts",
              subcategories: [
                {
                  id: "kids-girls-skirts-long",
                  name: "Long Skirts",
                  subcategories: [],
                },
                {
                  id: "kids-girls-skirts-short",
                  name: "Short Skirts",
                  subcategories: [],
                },
              ],
            },
            {
              id: "kids-girls-shoes",
              name: "Shoes",
              subcategories: [
                {
                  id: "kids-girls-shoes-sandals",
                  name: "Sandals",
                  subcategories: [],
                },
                {
                  id: "kids-girls-shoes-heels",
                  name: "Heels",
                  subcategories: [],
                },
              ],
            },
          ],
        },
      ],
    },
  ];

  return (
    <header className={styles.header}>
      <div
        className={styles.headerNavigationMobile}
        onClick={hamburgerMenuHandler}
      >
        <MenuIcon />
      </div>
      <a href="#" className={styles.logo}>
        Vistras
      </a>
      <div className={styles.headerNavigationDesktop}>
        <HeaderNavigation />
      </div>
      <div className={styles.headerNavigationMobile}>
        <HeaderNavigationMobile />
      </div>
      {hamburgerMenuVisible && (
        <div className={styles.headerNavigationHamburgerMenu}>
          <Box
            component="form"
            sx={{
              width: 500,
              maxWidth: "90%",
              margin: "22px",
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="standard-basic"
              label="Search"
              variant="standard"
              fullWidth
            />
          </Box>
          <div className={styles.wrapper}>
            {categories.map((categories) => {
              return (
                <div className={styles.cols} key={categories.id}>
                  <div className={styles.col}>
                    <div className={styles.container}>
                      <div
                        className={styles.front}
                        style={{
                          backgroundImage: `url(${categories.image})`,
                        }}
                      >
                        <div className={styles.inner}>
                          <p>{categories.name}</p>
                          <span>
                            {categories.subcategories.map((subcategories) => {
                              return (
                                <div key={subcategories.id}>
                                  {subcategories.name}
                                </div>
                              );
                            })}
                          </span>
                        </div>
                      </div>
                      <div className={styles.back}>
                        <div className={styles.inner}>
                          <p>
                            {categories.subcategories.map((subcategories) => {
                              return (
                                <div
                                  key={subcategories.id}
                                  className={styles.subcategories}
                                >
                                  {subcategories.subcategories.map(
                                    (subcategoriesinner) => {
                                      return (
                                        <div
                                          key={subcategoriesinner.id}
                                          className={styles.subcategoriesinner}
                                        >
                                          {subcategoriesinner.name}
                                        </div>
                                      );
                                    }
                                  )}
                                </div>
                              );
                            })}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
