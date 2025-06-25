import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import router from "./Routers/router";
import AuthContextProvider from "./provider/AuthContextProvider";


createRoot(document.getElementById("root")).render(
  <StrictMode>
     <AuthContextProvider>
      <RouterProvider router={router} />
     </AuthContextProvider>
  </StrictMode>
);
