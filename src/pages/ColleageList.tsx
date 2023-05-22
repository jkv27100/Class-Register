import { CSSProperties, useContext } from "react";

import { ClassCard } from "../components/";
import {
  ClassListContext,
  IClassListContextType,
} from "../context/ClassListContext";

import "./style.css";

function ColleageList() {
  const { classList } = useContext(ClassListContext) as IClassListContextType;
  return (
    <div className="main-container">
      {classList?.map((item) => (
        <ClassCard
          key={item.id}
          id={item.id}
          name={item.name}
          description={item.description}
          attendees={item.attendees}
          classImg={item.classImg}
        />
      ))}
    </div>
  );
}

export default ColleageList;
