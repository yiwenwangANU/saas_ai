import {
  createContext,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type AuthContextProps = {
  isLoggin: boolean;
  token: string | null;
  handleLogin: (token: string) => void;
  handleLogout: () => void;
};
const AuthContext = createContext<AuthContextProps | null>(null);

export const useAuthContext = () => {
  const authContext = useContext(AuthContext);
  if (authContext === null)
    throw new Error("AuthContext used outside provider!");
  return authContext;
};

type AuthProviderProps = {
  children: ReactNode;
};
export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [isLoggin, setIsLoggin] = useState<boolean>(false);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    if (savedToken) {
      setIsLoggin(true);
      setToken(savedToken);
    }
  }, []);

  const handleLogin = (newToken: string) => {
    localStorage.setItem("token", newToken);
    setIsLoggin(true);
    setToken(newToken);
  };
  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggin(false);
    setToken(null);
  };

  return (
    <AuthContext.Provider
      value={{ isLoggin, token, handleLogin, handleLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
