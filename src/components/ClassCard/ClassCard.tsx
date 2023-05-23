import { useContext, useState } from "react";
import { IClassList } from "../../types";

import styles from "./style.module.css";
import {
  IMyClassListContextType,
  MyClassListContext,
} from "../../context/MyClassListContext";

function ClassCard({
  name,
  attendees,
  description,
  classImg,
  id,
  isJoined,
}: IClassList) {
  const [disabled, setDisabled] = useState(isJoined);

  const { myClassList, setMyClassList } = useContext(
    MyClassListContext
  ) as IMyClassListContextType;

  const updateClassList = (id: number) => {
    const data = JSON.parse(
      localStorage.getItem("classList") as string
    ) as IClassList[];

    const newArray = data.map((item) => {
      if (item.id === id) {
        item.isJoined = true;
        item.attendees += 1;
        return item;
      } else return item;
    });

    localStorage.setItem("classList", JSON.stringify(newArray));
  };

  const handleJoin = () => {
    if (myClassList.length > 2) {
      console.log("her");
      return alert(
        "You have reached your maximum number of class registrations!"
      );
    }
    setDisabled(true);
    const isExisting = myClassList.find((item) => item.id === id);
    if (!isExisting) {
      const newClassList: IClassList[] = [
        ...myClassList,
        {
          name,
          attendees,
          description,
          classImg,
          id,
        },
      ];

      setMyClassList(newClassList);

      updateClassList(id);
    }
  };
  return (
    <div
      className={styles.cardContainer}
      style={{ background: disabled ? "#eee" : "#fff" }}
    >
      <img
        src={classImg}
        alt="bg"
        className={styles.classImg}
        style={{ filter: disabled ? "invert(60%)" : "#fff" }}
      />
      <h1 className={styles.classTitle}>{name}</h1>
      <div className={styles.description}>{description}</div>
      <div className={styles.cardFooter}>
        <p className={styles.attendees}>
          {disabled ? attendees + 1 : attendees}
        </p>
        <button
          disabled={disabled}
          className={styles.joinBtn}
          onClick={handleJoin}
        >
          {disabled ? "Joined" : "Join"}
        </button>
      </div>
    </div>
  );
}

export default ClassCard;
