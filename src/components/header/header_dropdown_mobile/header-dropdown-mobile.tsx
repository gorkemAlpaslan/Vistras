import React from "react";
import styles from "./header-dropdown-mobile.module.sass";
import categories from "../../../../public/mockDatas";
import search from "public/search.png";
import Image from "next/image";
import Link from "next/link";

const HeaderDropdownMobile: React.FC<{}> = () => {
  return (
    <div className={styles.headerNavigationHamburgerMenu}>
      <div className={styles.headerNavigationSearchWrapper}>
        <input className={styles.headerNavigationInput} placeholder="search" />
        <Image
          src={search}
          alt="search"
          width={26}
          height={26}
          className={styles.searchSubmitSubmitButton}
        />
      </div>
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
                                  console.log(subcategoriesinner);
                                  return (
                                    <Link
                                      key={subcategoriesinner.id}
                                      href={`/${subcategoriesinner.type}`}
                                      className={styles.subcategoriesinner}
                                    >
                                      <div>{subcategoriesinner.name}</div>
                                    </Link>
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
