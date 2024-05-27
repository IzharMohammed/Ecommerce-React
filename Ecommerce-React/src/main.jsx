import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import UserContextProvider from "./Components/context/UserContext.jsx";
import CartContextProvider from "./Components/context/CartContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <UserContextProvider>
      <CartContextProvider>
      <App />
      </CartContextProvider>
    </UserContextProvider>
  </BrowserRouter>
);
