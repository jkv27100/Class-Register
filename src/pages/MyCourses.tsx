import { CSSProperties, useContext } from "react";

import { ClassCard } from "../components/";

import {
  IMyClassListContextType,
  MyClassListContext,
} from "../context/MyClassListContext";
function MyCourses() {
  const { myClassList } = useContext(
    MyClassListContext
  ) as IMyClassListContextType;

  return (
    <div style={styles}>
      {myClassList.length !== 0 ? (
        myClassList.map((item) => (
          <ClassCard
            key={item.id}
            id={item.id}
            name={item.name}
            description={item.description}
            attendees={item.attendees}
            classImg={item.classImg}
            isJoined={true}
          />
        ))
      ) : (
        <div>No Classes added</div>
      )}
    </div>
  );
}

const styles: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
};

export default MyCourses;
