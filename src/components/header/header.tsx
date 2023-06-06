import styles from "./header.module.sass";
import HeaderNavigation from "./header_navigation-desktop/header-navigation";
import HeaderNavigationMobile from "./header_navigation_mobile/header_navigation_mobile";
import { useEffect, useState } from "react";
import HeaderDropdownMobile from "./header_dropdown_mobile/header-dropdown-mobile";
import DropdownDesktop from "./header_dropdown_desktop/header-dropdown-desktop";
import categories from "public/mockDatas";
import Link from "next/link";
import Image from "next/image";
import hamburgeropen from "public/hamburger_open.png";
import hamburgerclose from "public/hamburger_close.png";
import { useRouter } from "next/router";

const Header: React.FC<{}> = (props) => {
  const [hamburgerMenuVisible, SetHamburgerMenuVisible] = useState(false);
  const [dropdownMenuVisible, SetDropdownMenuVisible] = useState<
    boolean | string
  >(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as HTMLElement;
      const dropdownMenu = document.getElementById("dropdown-menu");
      if (
        dropdownMenuVisible &&
        dropdownMenu &&
        !dropdownMenu.contains(target)
      ) {
        setTimeout(() => {
          SetDropdownMenuVisible(false);
        }, 100);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownMenuVisible]);

  useEffect(() => {
    SetHamburgerMenuVisible(false);
  }, [router.asPath]);

  useEffect(() => {
    if (hamburgerMenuVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [hamburgerMenuVisible]);

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
        {hamburgerMenuVisible ? (
          <Image
            src={hamburgeropen}
            alt="hamburgeropen"
            width={26}
            height={26}
          />
        ) : (
          <Image
            src={hamburgerclose}
            alt="hamburgerclose"
            width={26}
            height={26}
          />
        )}
      </div>
      <Link
        href={"/"}
        className={styles.logo}
        rel="preload"
        onClick={() => {
          SetHamburgerMenuVisible(false);
        }}
      >
        <div>Vistras</div>
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
