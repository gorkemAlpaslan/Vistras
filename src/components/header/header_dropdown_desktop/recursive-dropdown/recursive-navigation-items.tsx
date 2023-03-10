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
        <div
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
        </div>
      )}
      <ul
        className={`${
          props.data.id.length === 3 && styles.listLengthThreeWrapper
        } `}
      >
        {props.data.subcategories &&
          props.data.subcategories.map((child) => (
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
    </div>
  );
};

export default RecursiveComponent;
