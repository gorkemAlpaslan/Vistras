import { useRouter } from "next/router";
import productDetailsStyle from "./productDetailsStyle.module.sass";
import itemList from "public/mockProducts";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import VistrasButton from "@/components/UI/viastras-button";
const ProductDetails: React.FC<{ prop: any }> = (props) => {
  const router = useRouter();
  let { productID } = router.query;

  const [productDetails, SetProductDetails] = useState<any>();
  const [pruchaseCount, SetPruchaseCount] = useState(1);

  const purchaseCountHandler = (e: string) => {
    if (e === "+") {
      SetPruchaseCount(pruchaseCount + 1);
    } else if (e === "-" && pruchaseCount > 1) {
      SetPruchaseCount(pruchaseCount - 1);
    }
  };

  useEffect(() => {
    for (let i of itemList) {
      if (i.id === Number(productID)) {
        SetProductDetails(i);
      }
    }
  }, [productID]);

  return (
    <div className={productDetailsStyle.ProductPageWrapper}>
      <div className={productDetailsStyle.ProductPageImageSection}>
        <div className={productDetailsStyle.ProductPageSwiper}>
          <Swiper
            slidesPerView={1}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            navigation
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            style={{ height: "fit-content" }}
          >
            {productDetails?.images.map((image: any) => {
              return (
                <SwiperSlide key={image.index}>
                  <Image
                    src={image}
                    alt="image"
                    className={productDetailsStyle.ProductPageCarouselImages}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
      <div className={productDetailsStyle.ProductPageDetailsWrapper}>
        <div className={productDetailsStyle.ProductPageDetails}>
          <div className={productDetailsStyle.ProductPageTitle}>
            {productDetails?.name}
          </div>
          <div className={productDetailsStyle.ProductPageBrand}>
            {productDetails?.brand}
          </div>
          <div className={productDetailsStyle.ProductPageUnderTitle}>
            {productDetails?.category} - {productDetails?.gender}
          </div>
          <div className={productDetailsStyle.ProductPageDescription}>
            {productDetails?.description}
          </div>
          <div className={productDetailsStyle.ProductPagePrice}>
            {productDetails?.price} $
          </div>
        </div>
        <div className={productDetailsStyle.ProductPagePurchaseWrapper}>
          <div className={productDetailsStyle.ProductQuantitiy}>
            <div className={productDetailsStyle.ProductQuantitiyButton}>
              <VistrasButton
                onClick={() => {
                  purchaseCountHandler("-");
                }}
                text={"-"}
                disabled={false}
              ></VistrasButton>
            </div>
            <input
              type="number"
              value={pruchaseCount}
              className={productDetailsStyle.ProductQuantitiyCounter}
            ></input>
            <div className={productDetailsStyle.ProductQuantitiyButton}>
              <VistrasButton
                onClick={() => {
                  purchaseCountHandler("+");
                }}
                text={"+"}
                disabled={false}
              ></VistrasButton>
            </div>
          </div>
          <div className={productDetailsStyle.AddtoCardButton}>
            <VistrasButton
              onClick={undefined}
              text={"Add to Card"}
              disabled={false}
            ></VistrasButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
