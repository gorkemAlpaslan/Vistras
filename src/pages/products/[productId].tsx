import { useRouter } from "next/router";
import React, { useEffect } from "react";
import itemList from "public/mockProducts";
import pdpStyles from "./pdp.module.sass";
import Image from "next/image";

const ProductDetails: React.FC<{ prop: any }> = (props) => {
  const router = useRouter();
  let { productId } = router.query;

  return (
    <div className={pdpStyles.ProductFilterPage}>
      <div className={pdpStyles.filterSection}>Filter</div>
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
