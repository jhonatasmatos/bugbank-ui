import { createContext, useContext, ReactNode, useState } from 'react';

type AuthContextType = {
  name: string;
  email: string;
  password: string;
  accountNumber: string;
  balance: number;
  logged: boolean;
};

type UserContextProps = {
  user: AuthContextType;
  setUser: React.Dispatch<React.SetStateAction<AuthContextType>>;
};

type AuthProviderProps = {
  children: ReactNode | ReactNode[];
};

const AuthContext = createContext<UserContextProps | null>(null);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('Você precisa usar o AuthProvider');
  }
  return context;
};
