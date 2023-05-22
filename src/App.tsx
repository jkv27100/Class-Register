import { Routes, Route, Navigate } from "react-router-dom";

import { ColleageList, MyCourses } from "./pages";
import { NavBar } from "./components";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/college" element={<ColleageList />} />
        <Route path="/my-classes" element={<MyCourses />} />
        <Route path="*" element={<Navigate to="/college" replace />} />
      </Routes>
    </>
  );
}

export default App;
