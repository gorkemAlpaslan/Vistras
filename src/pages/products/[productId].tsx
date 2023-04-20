import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import itemList from "public/mockProducts";
import pdpStyles from "./pdp.module.sass";
import filterIcon from "../../../public/filter.svg";
import backIcon from "../../../public/back.svg";
import Image from "next/image";
const ProductDetails: React.FC<{ prop: any }> = (props) => {
  const router = useRouter();
  let { productId } = router.query;
  const [isFilterSectionActive, SetIsFilterSectionActive] =
    useState<boolean>(false);
  const filterSectionHandler = (event: string) => {
    if (!isFilterSectionActive && event === "open") {
      SetIsFilterSectionActive(true);
    }
    if (event === "close") {
      SetIsFilterSectionActive(false);
    }
  };

  const [filters, setFilters] = useState({
    brand: "",
    color: "",
    size: "",
    category: "",
    isNew: false,
    minPrice: 0,
    maxPrice: 1000,
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const name = event.target.name;
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    setFilters((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const filterProducts = () => {
    let filtered = [...products];

    if (filters.brand !== "") {
      filtered = filtered.filter((product) => product.brand === filters.brand);
    }
    if (filters.color !== "") {
      filtered = filtered.filter((product) => product.color === filters.color);
    }
    if (filters.size !== "") {
      filtered = filtered.filter((product) => product.size === filters.size);
    }
    if (filters.category !== "") {
      filtered = filtered.filter(
        (product) => product.category === filters.category
      );
    }
    if (filters.isNew) {
      filtered = filtered.filter((product) => product.isNew);
    }
    filtered = filtered.filter(
      (product) =>
        product.price >= filters.minPrice && product.price <= filters.maxPrice
    );

    setFilteredProducts(filtered);
  };

  return (
    <div className={pdpStyles.ProductFilterPage}>
      <div
        className={
          isFilterSectionActive
            ? pdpStyles.filterSectionOpen
            : pdpStyles.filterSectionClosed
        }
        onClick={() => {
          filterSectionHandler("open");
        }}
      >
        {isFilterSectionActive && (
          <div
            onClick={() => {
              filterSectionHandler("close");
            }}
            className={pdpStyles.backIcon}
          >
            <Image src={backIcon} alt="filter_icon" width={32} height={32} />
          </div>
        )}

        {!isFilterSectionActive && (
          <div>
            <Image src={filterIcon} alt="filter_icon" width={32} height={32} />
          </div>
        )}

        {isFilterSectionActive && (
          <div className={pdpStyles.productFilterContainer}>
            <label>
              <div>Brand</div>:
              <select
                name="brand"
                value={filters.brand}
                onChange={handleChange}
              >
                <option value="">All</option>
                <option value="Nike">Nike</option>
                <option value="Adidas">Adidas</option>
                <option value="Puma">Puma</option>
              </select>
            </label>

            <label>
              <div>Color</div>:
              <select
                name="color"
                value={filters.color}
                onChange={handleChange}
              >
                <option value="">All</option>
                <option value="red">Red</option>
                <option value="blue">Blue</option>
                <option value="green">Green</option>
              </select>
            </label>

            <label>
              <div>Size</div>:
              <select name="size" value={filters.size} onChange={handleChange}>
                <option value="">All</option>
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
              </select>
            </label>

            <label>
              <div>Category</div>:
              <select
                name="category"
                value={filters.category}
                onChange={handleChange}
              >
                <option value="">All</option>
                <option value="shoes">Shoes</option>
                <option value="clothing">Clothing</option>
                <option value="accessories">Accessories</option>
              </select>
            </label>

            <label>
              <div>Price Range:</div>
              <input
                type="number"
                name="minPrice "
                placeholder="Min"
                value={filters.minPrice}
                onChange={handleChange}
              />
              -
              <input
                type="number"
                name="maxPrice"
                placeholder="Max"
                value={filters.maxPrice}
                onChange={handleChange}
              />
              <button onClick={filterProducts}>Filter</button>
            </label>
          </div>
        )}
      </div>
      <div className={pdpStyles.itemList}>
        {itemList.map((item) => {
          if (item.type.includes(productId) || item.category === productId) {
            return (
              <div className={pdpStyles.items} key={item.id}>
                <div className={pdpStyles.imageWrapper}>
                  <img
                    src={item.images[0]}
                    alt="sa"
                    className={pdpStyles.image}
                  />
                </div>
                <div className={pdpStyles.itemInfoWrapper}>
                  <div className={pdpStyles.itemInfoName}>{item.name}</div>
                  <div className={pdpStyles.itemInfoPrice}>${item.price}</div>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default ProductDetails;
