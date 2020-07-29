import React, { createContext, useCallback, useState, useContext } from 'react';

interface LoginCredentials {
  email: string;
  token: string;
}

interface AuthContextData {
  email: string;
  login(credentials: LoginCredentials): Promise<void>;
  logout(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<LoginCredentials>(() => {
    const user = localStorage.getItem('@iCollege:user');
    const token = localStorage.getItem('@iCollege:token');

    if (user && token) {
      return { email: user, token };
    }

    return {} as LoginCredentials;
  });

  const login = useCallback(async ({ email, token }) => {
    localStorage.setItem('@iCollege:user', email);
    localStorage.setItem('@iCollege:token', token);

    setData({ email, token });
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem('@iCollege:user');
    localStorage.removeItem('@iCollege:token');

    setData({} as LoginCredentials);
  }, []);

  return (
    <AuthContext.Provider value={{ email: data.email, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth mus be use whitin an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
