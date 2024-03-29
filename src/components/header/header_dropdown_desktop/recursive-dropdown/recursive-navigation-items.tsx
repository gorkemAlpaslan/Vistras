import Link from "next/link";
import React from "react";
import styles from "./recursive-navigation-items.module.sass";
const RecursiveComponent: React.FC<{
  data: any;
  isDropdownActive: boolean | string;
  dropdownActiveImageHandler: any;
}> = (props) => {
  return (
    <div className={styles.wrapper}>
      {props.data.id.length !== 1 && (
        <Link
          href={`/${props.data.type}`}
          className={`${
            props.data.id.length !== 3 &&
            props.isDropdownActive === "Kids" &&
            styles.mainTitle
          } ${
            props.data.id.length === 5 &&
            props.isDropdownActive === "Kids" &&
            styles.kidsTitle
          } ${styles.allTexts}`}
          onMouseOver={() => {
            props.dropdownActiveImageHandler(props.data.image);
          }}
        >
          {props.data.name}
        </Link>
      )}
      {props.data.subcategories && (
        <ul
          className={`${
            props.data.id.length === 3 && styles.listLengthThreeWrapper
          } `}
        >
          {props.data.subcategories &&
            props.data.subcategories.map((child: any) => (
              <div
                key={child.id}
                className={`${
                  props.data.id.length === 3 && styles.listLengthThree
                }`}
              >
                <RecursiveComponent
                  data={child}
                  key={child.name}
                  isDropdownActive={props.isDropdownActive}
                  dropdownActiveImageHandler={props.dropdownActiveImageHandler}
                />
              </div>
            ))}
        </ul>
      )}
    </div>
  );
};

export default RecursiveComponent;
