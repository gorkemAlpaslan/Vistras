import React, { useState } from "react";
import styless from "./header-dropdown-desktop.module.sass";

interface Props {
  data: Category[];
}

interface Category {
  name: string;
  children?: Category[];
}

const Dropdown: React.FC<Props> = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const DropdownMenu: React.FC<Props> = ({ data }) => {
    return (
      <ul className={styless.dropdown}>
        {data.map((category) => (
          <li key={category.name}>
            <button
              className={styless.dropdownButton}
              onClick={() => toggleDropdown()}
            >
              {category.name}
            </button>
            {category.children && <DropdownMenu data={category.children} />}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className={styless.dropdown}>
      <button
        className={styless.dropdownToggle}
        onClick={() => toggleDropdown()}
      >
        Categories
        <span className={styless.dropdownIcon}>{isOpen ? "-" : "+"}</span>
      </button>
      {isOpen && <DropdownMenu data={data} />}
    </div>
  );
};

export default Dropdown;
