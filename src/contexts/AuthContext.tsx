import {
  createContext,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { jwtDecode } from "jwt-decode";

type AuthContextProps = {
  isLoggin: boolean;
  username: string | null;
  token: string | null;
  redirectUrl: string | null;
  handleLogin: (token: string) => void;
  handleLogout: () => void;
  handleSetRedirect: (url: string | null) => void;
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
  type JwtPayload = {
    userId: string;
    email: string;
    name: string;
    exp: number;
    iat: number;
  };
  const [isLoggin, setIsLoggin] = useState<boolean>(false);
  const [username, setUsername] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [redirectUrl, setRedirectUrl] = useState<string | null>(null);

  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    const savedUsername = localStorage.getItem("username");
    if (savedToken) {
      setIsLoggin(true);
      setUsername(savedUsername);
      setToken(savedToken);
    }
  }, []);

  const handleLogin = (newToken: string) => {
    const decoded = jwtDecode<JwtPayload>(newToken);
    const { name } = decoded;

    localStorage.setItem("token", newToken);
    localStorage.setItem("username", name);

    setUsername(name);
    setIsLoggin(true);
    setToken(newToken);
  };
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    setIsLoggin(false);
    setUsername(null);
    setToken(null);
  };
  const handleSetRedirect = (url: string | null) => {
    setRedirectUrl(url);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggin,
        username,
        token,
        redirectUrl,
        handleLogin,
        handleLogout,
        handleSetRedirect,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
