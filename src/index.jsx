import React from "react";
import Routers from "./router";
import { createRoot } from "react-dom/client";
import "./global.scss";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <Routers />
  </React.StrictMode>
);
