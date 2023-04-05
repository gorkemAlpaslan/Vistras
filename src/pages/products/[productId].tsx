import { useRouter } from "next/router";
import React, { useEffect } from "react";
import itemList from "public/mockProducts";
import pdpStyles from "./pdp.module.sass";

const ProductDetails: React.FC<{ prop: any }> = (props) => {
  const router = useRouter();
  let { productId } = router.query;

  return (
    <div>
      {itemList.map((item) => {
        if (item.type.includes(productId) || item.category === productId) {
          return <div key={item.id}>{item.name}</div>;
        }
      })}
    </div>
  );
};

export default ProductDetails;
