import React from "react";
import styles from "./style.css";
import MyImage from "./assets/images/illustration.png";
function Title() {
  return (
    <>
      <h1 className={styles.title}>Tile</h1>
      <img src={MyImage} alt="butt" />
    </>
  );
}
export default Title;
