import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ThemeProvider } from "@material-tailwind/react";
import { AuthContextProvider } from "./context/authContext.tsx";
import { SnackbarProvider } from "./context/snackbarContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <SnackbarProvider>
        <AuthContextProvider>
          <App />
        </AuthContextProvider>
      </SnackbarProvider>
    </ThemeProvider>
  </StrictMode>
);
