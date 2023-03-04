import styles from "./header.module.sass";
import HeaderNavigation from "./header_navigation-desktop/header-navigation";
import HeaderNavigationMobile from "./header_navigation_mobile/header_navigation_mobile";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import HeaderDropdownMobile from "./header_dropdown_mobile/header-dropdown-mobile";
import DropdownDesktop from "./header_dropdown_desktop/header-dropdown-desktop";
import categories from "public/mockDatas";
const Header = () => {
  const [hamburgerMenuVisible, SetHamburgerMenuVisible] = useState(false);
  const [dropdownMenuVisible, SetDropdownMenuVisible] = useState<
    boolean | string
  >(false);

  const hamburgerMenuHandler = () => {
    SetHamburgerMenuVisible(!hamburgerMenuVisible);
  };

  const dropdownHandler = (e: any) => {
    if (e.target.value === dropdownMenuVisible) {
    }
    SetDropdownMenuVisible(e.target.value);
  };

  return (
    <header className={styles.header}>
      <div
        className={styles.headerNavigationMobile}
        onClick={hamburgerMenuHandler}
      >
        <MenuIcon sx={{ color: "#796209" }} />
      </div>
      <a href="#" className={styles.logo}>
        Vistras
      </a>
      <div className={styles.headerNavigationDesktop}>
        <HeaderNavigation data={categories} dropdownHandler={dropdownHandler} />
      </div>
      <div className={styles.headerNavigationMobile}>
        <HeaderNavigationMobile />
      </div>
      {hamburgerMenuVisible && <HeaderDropdownMobile />}
      {dropdownMenuVisible !== false && (
        <DropdownDesktop
          data={categories}
          isDropdownActive={dropdownMenuVisible}
        />
      )}
    </header>
  );
};

export default Header;
