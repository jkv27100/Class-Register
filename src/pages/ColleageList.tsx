import { CSSProperties, useContext, useEffect, useState } from "react";

import { ClassCard } from "../components/";
import {
  ClassListContext,
  IClassListContextType,
} from "../context/ClassListContext";

import "./style.css";
import { IClassList } from "../types";

function ColleageList() {
  const [list, setList] = useState<IClassList[]>([]);
  const { classList } = useContext(ClassListContext) as IClassListContextType;
  const data = localStorage.getItem("classList") as string;

  useEffect(() => {
    const list = JSON.parse(data) as IClassList[];
    setList(list);
  }, [data]);

  return (
    <div className="main-container">
      {(classList.length === 0 ? list : classList)?.map((item) => (
        <ClassCard
          key={item.id}
          id={item.id}
          name={item.name}
          description={item.description}
          attendees={item.attendees}
          classImg={item.classImg}
          isJoined={item.isJoined}
        />
      ))}
    </div>
  );
}

export default ColleageList;
