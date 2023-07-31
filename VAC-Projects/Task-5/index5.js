import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import ATM from "./ATM";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ATM />
  </StrictMode>
);