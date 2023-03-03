import styles from "./header.module.sass";
import HeaderNavigation from "./header_navigation-desktop/header-navigation";
import HeaderNavigationMobile from "./header_navigation_mobile/header_navigation_mobile";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import HeaderDropdownMobile from "./header_dropdown_mobile/header-dropdown-mobile";
import categories from "../../../public/mockDatas";
import Dropdown from "./header_dropdown_desktop/header-dropdown-desktop";
const Header = () => {
  const [hamburgerMenuVisible, SetHamburgerMenuVisible] = useState(false);

  const hamburgerMenuHandler = () => {
    SetHamburgerMenuVisible(!hamburgerMenuVisible);
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
        <Dropdown data={categories}></Dropdown>
        <HeaderNavigation />
      </div>
      <div className={styles.headerNavigationMobile}>
        <HeaderNavigationMobile />
      </div>
      {hamburgerMenuVisible && <HeaderDropdownMobile />}
    </header>
  );
};

export default Header;
