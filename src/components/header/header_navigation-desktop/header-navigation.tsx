import { useState } from "react";
import { Search, Person, Favorite, ShoppingBasket } from "@mui/icons-material";
import { AppBar, Badge, IconButton, InputBase, Toolbar } from "@mui/material";
import styles from "./header-navigation-desktop.module.sass";

const HeaderNavigation: React.FC<{
  data: any;
  dropdownHandler: Function;
  isDropdownActive: any;
  isHeaderVisible: any;
}> = (props) => {
  const [searchInputVisible, setSearchInputVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchClick = () => {
    setSearchInputVisible(true);
  };

  const handleSearchChange = (event: any) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event: any) => {
    event.preventDefault();
    console.log(searchTerm);
  };

  const handleSearchBlur = () => {
    setSearchInputVisible(false);
  };

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

      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="search"
          onClick={handleSearchClick}
          sx={{
            color:
              props.isHeaderVisible || props.isDropdownActive
                ? "#796209"
                : "#fff",
            transition: "all .6s ease-in-out",
          }}
        >
          <Search />
        </IconButton>
        {searchInputVisible && (
          <form onSubmit={handleSearchSubmit}>
            <InputBase
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearchChange}
              onBlur={handleSearchBlur}
              autoFocus
            />
          </form>
        )}
        <IconButton
          edge="start"
          color="inherit"
          aria-label="person"
          sx={{
            color:
              props.isHeaderVisible || props.isDropdownActive
                ? "#796209"
                : "#fff",
            transition: "all .6s ease-in-out",
          }}
        >
          <Person />
        </IconButton>
        <IconButton edge="start" color="inherit" aria-label="favorite">
          <Badge
            badgeContent={4}
            color="secondary"
            sx={{
              color:
                props.isHeaderVisible || props.isDropdownActive
                  ? "#796209"
                  : "#fff",
              transition: "all .6s ease-in-out",
            }}
          >
            <Favorite />
          </Badge>
        </IconButton>
        <IconButton
          edge="end"
          color="inherit"
          aria-label="basket"
          sx={{
            color:
              props.isHeaderVisible || props.isDropdownActive
                ? "#796209"
                : "#fff",
            transition: "all .6s ease-in-out",
          }}
        >
          <Badge badgeContent={2} color="secondary">
            <ShoppingBasket />
          </Badge>
        </IconButton>
      </Toolbar>
    </nav>
  );
};

export default HeaderNavigation;
