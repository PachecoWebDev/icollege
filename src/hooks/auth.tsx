import React, { createContext, useCallback, useState, useContext } from 'react';
import UsersRepository from '../students/users/fakes/FakeUsersRepository';

interface LoginCredentials {
  email: string;
  password: string;
}

interface AuthState {
  name: string | undefined;
}
interface AuthContextData {
  email: string | undefined;
  login(credentials: LoginCredentials): Promise<void>;
  logout(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const usersRepository = new UsersRepository();

  const [data, setData] = useState<AuthState>(() => {
    const name = localStorage.getItem('@iCollege:user');

    if (name) {
      return { name };
    }

    return {} as LoginCredentials;
  });

  const login = useCallback(
    async ({ email, password }) => {
      const response = await usersRepository.login(email, password);

      const name = response?.name;

      localStorage.setItem('@iCollege:user', JSON.stringify(name));

      setData({ name });
    },
    [usersRepository],
  );

  const logout = useCallback(() => {
    localStorage.removeItem('@iCollege:user');

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ email: data.name, login, logout }}>
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
