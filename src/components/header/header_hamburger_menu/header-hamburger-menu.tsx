import { Box, TextField } from "@mui/material";
import React from "react";
import styles from "./header-hamburger-menu.module.sass";
import categories from "../../../../public/mockDatas";
import { alpha, styled } from "@mui/material/styles";

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#796209",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#796209",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#796209",
    },
    "&:hover fieldset": {
      borderColor: "#796209",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#796209",
    },
  },
});

const HeaderHamburgerMenu: React.FC<{}> = () => {
  return (
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
        <CssTextField
          label="Custom CSS"
          id="custom-css-outlined-input"
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
  );
};

export default HeaderHamburgerMenu;
