import styles from "./header.module.sass";
import HeaderNavigation from "./header_navigation-desktop/header-navigation";
import HeaderNavigationMobile from "./header_navigation_mobile/header_navigation_mobile";
import MenuIcon from "@mui/icons-material/Menu";
import { useEffect, useState } from "react";
import HeaderDropdownMobile from "./header_dropdown_mobile/header-dropdown-mobile";
import DropdownDesktop from "./header_dropdown_desktop/header-dropdown-desktop";
import categories from "public/mockDatas";
import Link from "next/link";
const Header = () => {
  const [hamburgerMenuVisible, SetHamburgerMenuVisible] = useState(false);
  const [dropdownMenuVisible, SetDropdownMenuVisible] = useState<
    boolean | string
  >(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as HTMLElement;
      console.log(target);
      const dropdownMenu = document.getElementById("dropdown-menu");
      if (
        dropdownMenuVisible &&
        dropdownMenu &&
        !dropdownMenu.contains(target)
      ) {
        SetDropdownMenuVisible(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownMenuVisible]);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const hamburgerMenuHandler = () => {
    SetHamburgerMenuVisible(!hamburgerMenuVisible);
  };

  const dropdownHandler = (e: any) => {
    if (e.target.innerHTML === dropdownMenuVisible) {
      SetDropdownMenuVisible(false);
      setIsHeaderVisible(false);
    } else {
      SetDropdownMenuVisible(e.target.innerHTML);
      setIsHeaderVisible(true);
    }
  };

  const handleMouseMove = (event: MouseEvent) => {
    if (event.screenY < 300) {
      setIsHeaderVisible(true);
    } else {
      setIsHeaderVisible(false);
    }
  };

  return (
    <header
      className={`${styles.header} ${
        isHeaderVisible || dropdownMenuVisible
          ? styles.headerVisible
          : styles.headerHidden
      }`}
    >
      <div
        className={styles.headerNavigationMobile}
        onClick={hamburgerMenuHandler}
      >
        <MenuIcon sx={{ color: "#796209" }} />
      </div>
      <Link href={"/"} className={styles.logo}>
        Vistras
      </Link>
      <div className={styles.headerNavigationDesktop} id="dropdown-menu">
        <HeaderNavigation
          data={categories}
          dropdownHandler={dropdownHandler}
          isDropdownActive={dropdownMenuVisible}
          isHeaderVisible={isHeaderVisible}
        />
      </div>
      <div className={styles.headerNavigationMobile}>
        <HeaderNavigationMobile />
      </div>
      {hamburgerMenuVisible && <HeaderDropdownMobile />}
      {dropdownMenuVisible !== false && (
        <div id="dropdown-menu" className={styles.dropdownDesktop}>
          <DropdownDesktop
            data={categories}
            isDropdownActive={dropdownMenuVisible}
          />
        </div>
      )}
    </header>
  );
};

export default Header;
