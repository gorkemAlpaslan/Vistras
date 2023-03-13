import React from "react";
import styles from "./header-dropdown-mobile.module.sass";
import categories from "../../../../public/mockDatas";

const HeaderDropdownMobile: React.FC<{}> = () => {
  return (
    <div className={styles.headerNavigationHamburgerMenu}>
      <input />
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

export default HeaderDropdownMobile;
