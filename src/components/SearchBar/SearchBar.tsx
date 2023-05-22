import { ISearchBarProps } from "../../types";
import styles from "./style.module.css";

function SearchBar({ placeholder, onSearch }: ISearchBarProps) {
  return (
    <div className={styles.searchBarContainer}>
      <input type="text" placeholder={placeholder} onChange={onSearch} />
    </div>
  );
}

export default SearchBar;
