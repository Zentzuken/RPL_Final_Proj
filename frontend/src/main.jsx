import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "jotai";
import { store } from "./store/index.js";
import ReactUI from "./ui//ReactUI.jsx";
import initGame from "./game/initGame.js";

import "./index.css";

const ui = document.getElementById("ui");

new ResizeObserver(() => {
  document.documentElement.style.setProperty(
    "--scale",
    Math.min(
      ui.parentElement.offsetWidth / ui.offsetWidth,
      ui.parentElement.offsetHeight / ui.offsetHeight
    )
  );
}).observe(ui.parentElement);
// for the future, everything related to text and UI gets connected to this -> makes sure they scale with the window

createRoot(document.getElementById("ui")).render(
  <StrictMode>
    <Provider store={store}>
      <ReactUI />
    </Provider>
  </StrictMode>
);

initGame();
