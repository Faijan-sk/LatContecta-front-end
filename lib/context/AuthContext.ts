import { createContext } from "react";

interface AuthContextType {
  accessToken: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  login: (access: string) => Promise<void>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  accessToken: null,
  isAuthenticated: false,
  loading: true,
  login: async () => {},
  logout: () => {},
});
