import React from "react";
import styles from "./test.module.sass";
const RecursiveComponent = ({ data, isDropdownActive }) => {
  return (
    <div className={styles.wrapper}>
      {data.id.length !== 1 && (
        <div
          className={`${
            data.id.length !== 3 &&
            isDropdownActive === "Kids" &&
            styles.mainTitle
          }`}
        >
          {data.name}
        </div>
      )}
      <ul
        className={`${data.id.length === 3 && styles.listLengthThree} ${
          data.id.length === 5 && styles.listtest2
        }`}
      >
        {data.subcategories &&
          data.subcategories.map((child) => (
            <div
              key={child.id}
              className={`${data.id.length === 3 && styles.test1} ${
                data.id.length === 5 && styles.test2
              }`}
            >
              <RecursiveComponent
                data={child}
                key="test"
                isDropdownActive={isDropdownActive}
              />
            </div>
          ))}
      </ul>
    </div>
  );
};

export default RecursiveComponent;
