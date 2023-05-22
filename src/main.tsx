import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App.tsx";

import "./index.css";
import ClassListProvider from "./context/ClassListContext.tsx";
import MyClassListProvider from "./context/MyClassListContext.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ClassListProvider>
        <MyClassListProvider>
          <App />
        </MyClassListProvider>
      </ClassListProvider>
    </BrowserRouter>
  </React.StrictMode>
);
