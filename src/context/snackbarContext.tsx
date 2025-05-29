import React, { createContext, useContext, useState, ReactNode } from "react";

type SnackbarType = "success" | "error" | "info" | "warning";

type SnackbarContextType = {
  showSnackbar: (message: string, type?: SnackbarType) => void;
};

const SnackbarContext = createContext<SnackbarContextType | undefined>(undefined);

export const useSnackbar = () => {
  const context = useContext(SnackbarContext);
  if (!context) throw new Error("useSnackbar must be used within a SnackbarProvider");
  return context;
};

export const SnackbarProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [type, setType] = useState<SnackbarType>("info");

  const showSnackbar = (msg: string, t: SnackbarType = "info") => {
    setMessage(msg);
    setType(t);
    setOpen(true);
    setTimeout(() => setOpen(false), 3000); // auto-hide after 3s
  };

  return (
    <SnackbarContext.Provider value={{ showSnackbar }}>
      {children}
      {open && (
        <div
          className={`fixed bottom-6 left-1/2 -translate-x-1/2 px-6 py-3 rounded-lg shadow-lg text-white z-50 transition-all
            ${type === "success" ? "bg-green-600" : ""}
            ${type === "error" ? "bg-red-600" : ""}
            ${type === "info" ? "bg-blue-600" : ""}
            ${type === "warning" ? "bg-yellow-600 text-black" : ""}
          `}
        >
          {message}
        </div>
      )}
    </SnackbarContext.Provider>
  );
};
