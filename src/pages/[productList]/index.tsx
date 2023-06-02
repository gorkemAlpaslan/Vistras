import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import itemList from "public/mockProducts";
import pdpStyles from "./pdp.module.sass";
import Image from "next/image";
import Link from "next/link";
const Products: React.FC<{ prop: any }> = (props) => {
  const router = useRouter();
  let { productList } = router.query;

  return (
    <div className={pdpStyles.ProductFilterPage}>
      <div className={pdpStyles.itemList}>
        {itemList.map((item) => {
          if (
            item.type.includes(productList) ||
            item.category === productList
          ) {
            return (
              <Link href={`/${productList}/${item.id}`} key={item.id}>
                <div
                  className={`${pdpStyles.items} `}
                  onClick={(e) => {
                    console.log(item.id);
                  }}
                >
                  <div className={pdpStyles.imageWrapper}>
                    <Image
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
              </Link>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Products;
