import { useNavigate } from "react-router-dom";

import SearchBar from "../SearchBar/SearchBar";

import { useContext } from "react";
import {
  ClassListContext,
  IClassListContextType,
} from "../../context/ClassListContext";
import { classList as data } from "../../data/classList";
import styles from "./style.module.css";

function Navbar() {
  const originalData = data;
  const navigate = useNavigate();
  const { setClassList } = useContext(
    ClassListContext
  ) as IClassListContextType;

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchQ = e.target.value;
    console.log(searchQ);
    if (searchQ.length > 3) {
      const newClassList = originalData.filter((item) =>
        item.name.toLowerCase().includes(searchQ)
      );
      setClassList(newClassList);
    } else setClassList(originalData);
  };
  return (
    <div className={styles.navbarContainer}>
      <SearchBar placeholder="Search for classes" onSearch={handleSearch} />
      <div className={styles.routes}>
        <button onClick={() => navigate("/college")}>Classes</button>
        <button onClick={() => navigate("/my-classes")}>My Classes</button>
      </div>
    </div>
  );
}

export default Navbar;
