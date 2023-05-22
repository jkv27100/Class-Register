import { CSSProperties, useContext } from "react";

import { ClassCard } from "../components/";
import {
  ClassListContext,
  IClassListContextType,
} from "../context/ClassListContext";

function ColleageList() {
  const { classList } = useContext(ClassListContext) as IClassListContextType;
  return (
    <div style={styles}>
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

const styles: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
};

export default ColleageList;
