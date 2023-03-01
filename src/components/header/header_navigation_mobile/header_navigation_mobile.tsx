import { useState } from "react";
import { Favorite, ShoppingBasket } from "@mui/icons-material";
import { Badge, IconButton, Toolbar } from "@mui/material";
const HeaderNavigationMobile: React.FC<{}> = () => {
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
    <nav>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="favorite">
          <Badge badgeContent={4} color="secondary">
            <Favorite />
          </Badge>
        </IconButton>
        <IconButton edge="end" color="inherit" aria-label="basket">
          <Badge badgeContent={2} color="secondary">
            <ShoppingBasket />
          </Badge>
        </IconButton>
      </Toolbar>
    </nav>
  );
};

export default HeaderNavigationMobile;
