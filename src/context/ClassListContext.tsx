import React, { useState, createContext } from "react";
import { IClassList } from "../types";

const initialState: IClassList[] = [];

export interface IClassListContextType {
  classList: IClassList[];
  setClassList: React.Dispatch<React.SetStateAction<IClassList[]>>;
}

export const ClassListContext = createContext<IClassListContextType | null>(
  null
);

const ClassListProvider = ({ children }: any) => {
  const [classList, setClassList] = useState(initialState);

  return (
    <ClassListContext.Provider value={{ classList, setClassList }}>
      {children}
    </ClassListContext.Provider>
  );
};

export default ClassListProvider;
