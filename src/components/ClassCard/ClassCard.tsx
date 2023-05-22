import { useContext, useState } from "react";
import { IClassList } from "../../types";

import styles from "./style.module.css";
import {
  IMyClassListContextType,
  MyClassListContext,
} from "../../context/MyClassListContext";

function ClassCard({ name, attendees, description, classImg, id }: IClassList) {
  const [disabled, setDisabled] = useState(false);

  const { myClassList, setMyClassList } = useContext(
    MyClassListContext
  ) as IMyClassListContextType;

  const handleJoin = () => {
    if (myClassList.length > 3) {
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
    }
  };
  return (
    <div className={styles.cardContainer} style={{}}>
      <img src={classImg} alt="bg" className={styles.classImg} />
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
