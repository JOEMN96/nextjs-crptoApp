import React from "react";
import styles from "./search.module.scss";

function Search() {
  return (
    <div className={styles.search}>
      <input type="text" placeholder="Search" />
    </div>
  );
}

export default Search;
