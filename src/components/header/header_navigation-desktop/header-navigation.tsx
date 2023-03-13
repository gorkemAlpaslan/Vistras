import { useEffect, useRef, useState } from "react";
import styles from "./header-navigation-desktop.module.sass";
import Link from "next/link";
import search from "public/search.png";
import profile from "public/profile.png";
import favorite from "public/favorite.png";
import basket from "public/basket.png";
import Image from "next/image";
const HeaderNavigation: React.FC<{
  data: any;
  dropdownHandler: Function;
  isDropdownActive: any;
  isHeaderVisible: any;
}> = (props) => {
  const [searchInputVisible, setSearchInputVisible] = useState(false);

  const handleSearchClick = () => {
    setSearchInputVisible(true);
  };

  const handleSearchSubmit = (event: any) => {
    event.preventDefault();
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as HTMLElement;
      const inputElement = document.getElementById("input-element");
      if (inputElement && !inputElement.contains(target)) {
        setSearchInputVisible(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [searchInputVisible]);

  return (
    <nav className={styles.headerNavigationDesktopWrapper}>
      <div className={styles.dropdownController}>
        {props.data.map((item: any) => {
          return (
            <div
              className={`${styles.navItem} ${
                props.isDropdownActive === item.name && styles.navItemActive
              } ${
                props.isHeaderVisible || props.isDropdownActive
                  ? styles.navItemVisible
                  : styles.navItemHidden
              }`}
              key={item.id}
              onClick={(e) => {
                props.dropdownHandler(e);
              }}
            >
              {item.name}
            </div>
          );
        })}
      </div>

      <div className={styles.navigation}>
        {!searchInputVisible && (
          <Image
            src={search}
            alt="search"
            width={26}
            height={26}
            onClick={handleSearchClick}
            className={
              props.isHeaderVisible || props.isDropdownActive
                ? styles.iconsVisible
                : styles.iconsHidden
            }
          />
        )}
        {searchInputVisible && (
          <form
            id="input-element"
            onSubmit={handleSearchSubmit}
            className={styles.searchForm}
          >
            <input
              className={`${styles.searchInput} ${
                props.isHeaderVisible || props.isDropdownActive
                  ? styles.searchInputVisible
                  : styles.searchInputHidden
              }`}
            />
          </form>
        )}
        <Link
          href={"/login"}
          className={
            props.isHeaderVisible || props.isDropdownActive
              ? styles.iconsVisible
              : styles.iconsHidden
          }
        >
          <Image src={profile} alt="search" width={26} height={26} />
        </Link>
        <Link
          href={"/favorites"}
          className={
            props.isHeaderVisible || props.isDropdownActive
              ? styles.iconsVisible
              : styles.iconsHidden
          }
        >
          <Image
            src={favorite}
            alt="search"
            width={26}
            height={26}
            className={styles.testt}
          />
        </Link>
        <Link
          href={"/purchase"}
          className={
            props.isHeaderVisible || props.isDropdownActive
              ? styles.iconsVisible
              : styles.iconsHidden
          }
        >
          <Image src={basket} alt="search" width={26} height={26} />
        </Link>
      </div>
    </nav>
  );
};

export default HeaderNavigation;
