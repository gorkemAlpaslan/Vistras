import React, { useEffect, useState } from "react";
import styles from "./header-dropdown-desktop.module.sass";
import Image from "next/image";
import RecursiveComponent from "./recursive-dropdown/recursive-navigation-items";
const DropdownDesktop: React.FC<{
  data: any;
  isDropdownActive: boolean | string;
}> = (props) => {
  const [activeImage, SetActiveImage] = useState("");
  const [imageAnimation, SetImageAnimation] = useState(styles.fadeInAnimation);
  useEffect(() => {
    props.isDropdownActive === "Man"
      ? SetActiveImage(
          "url(https://images.unsplash.com/photo-1613063020776-2497a693d583?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80)"
        )
      : props.isDropdownActive === "Woman"
      ? SetActiveImage(
          "url(https://images.unsplash.com/photo-1620655036121-dff6e1ba95f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1179&q=80)"
        )
      : props.isDropdownActive === "Kids" &&
        SetActiveImage(
          "url(https://images.unsplash.com/photo-1621452773781-0f992fd1f5cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1026&q=80)"
        );
  }, [props.isDropdownActive]);

  const dropdownActiveImageHandler = (image: any) => {
    SetActiveImage(`url(${image})`);
    SetImageAnimation(styles.fadeOutAnimation);
    setTimeout(() => {
      SetImageAnimation(styles.fadeInAnimation);
    }, 20);
  };

  return (
    <div className={styles.dropdownWrapper}>
      {props.data.map((category: any) => {
        if (props.isDropdownActive === category.name) {
          return (
            <RecursiveComponent
              data={category}
              key={category.name}
              isDropdownActive={props.isDropdownActive}
              dropdownActiveImageHandler={dropdownActiveImageHandler}
            />
          );
        }
      })}
      <div
        className={`${styles.dropdownImages} ${imageAnimation}`}
        style={{
          backgroundImage: `${activeImage}`,
        }}
      ></div>
    </div>
  );
};

export default DropdownDesktop;
