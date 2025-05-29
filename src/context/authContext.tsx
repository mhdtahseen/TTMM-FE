import { createContext, useState } from "react";
import useApiRequest from "../hooks/useApi";
import { AUTH_LOGIN } from "../constants/endpoints";
import { useSnackbar } from "./snackbarContext";

export const AuthContext = createContext<any | undefined>(undefined);

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const { showSnackbar } = useSnackbar();
  const { apiRequest } = useApiRequest();

  const Login = async (email: string, password: string) => {
    const response: any = await apiRequest("POST", AUTH_LOGIN, {
      email,
      password,
    });
    if (response) {
      localStorage.setItem("token", response.token);
      setIsAuthenticated(true);
      showSnackbar(response.message, "success");
      return true;
    }
    return false;
  };

  const Logout = () => {
    setIsAuthenticated(false);
  };

  const value = { isAuthenticated, setIsAuthenticated, Login, Logout };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
