import React from "react";
import styles from "./search.module.scss";

function Search({ onChange }) {
  // console.log(props);

  return (
    <div className={styles.search}>
      <input type="text" placeholder="Search" onChange={onChange} />
    </div>
  );
}

export default Search;
