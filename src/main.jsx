import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "@fontsource/inter";

import ToastProvider from "./components/common/toast/ToastProvider";
import { ScrollToTop } from "./components/common/scroll";


import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ToastProvider />
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);