import styles from "./header.module.sass";
import HeaderNavigation from "./header_navigation/header-navigation";
import HeaderNavigationMobile from "./header_navigation_mobile/header_navigation_mobile";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
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
            {
              id: "man-shirts-t-shirts",
              name: "T-Shirts",
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
          <div className={styles.headerNavigationCategory}>
            {categories.map((categories) => {
              return (
                <div
                  className={`${styles.card} ${styles.flipVertical}`}
                  key={categories.id}
                >
                  <div className={styles.front}>
                    <h4>{categories.name}</h4>
                  </div>
                  <div className={styles.back}>
                    <h2>{categories.name}</h2>
                    <div className={styles.subCategoriesLinks}>
                      {categories.subcategories.map((subCategories) => {
                        return (
                          <a
                            href="#"
                            key={subCategories.id}
                            className={styles.subCategoriesLink}
                          >
                            {subCategories.name}
                          </a>
                        );
                      })}
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
