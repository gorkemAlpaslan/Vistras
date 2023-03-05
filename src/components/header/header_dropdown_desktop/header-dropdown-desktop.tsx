import React, { useState } from "react";
import styles from "./header-dropdown-desktop.module.sass";
import Image from "next/image";
import RecursiveComponent from "./testdropdownitem";
const DropdownDesktop: React.FC<{
  data: any;
  isDropdownActive: boolean | string;
}> = (props) => {
  return (
    <div className={styles.dropdownWrapper}>
      {props.data.map((category: any) => {
        if (props.isDropdownActive === category.name) {
          return <RecursiveComponent data={category} key="test" />;
        }
      })}
    </div>
  );
};

export default DropdownDesktop;