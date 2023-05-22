import React, { useState, createContext } from "react";
import { IClassList } from "../types";

const initialState: IClassList[] = [];

export interface IMyClassListContextType {
  myClassList: IClassList[];
  setMyClassList: React.Dispatch<React.SetStateAction<IClassList[]>>;
}

export const MyClassListContext = createContext<IMyClassListContextType | null>(
  null
);

const MyClassListProvider = ({ children }: any) => {
  const [myClassList, setMyClassList] = useState(initialState);

  return (
    <MyClassListContext.Provider value={{ myClassList, setMyClassList }}>
      {children}
    </MyClassListContext.Provider>
  );
};

export default MyClassListProvider;
