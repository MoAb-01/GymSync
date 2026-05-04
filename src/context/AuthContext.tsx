import React, { createContext, useContext, useState } from 'react';

type UserRole = 'member' | 'trainer';

interface AuthContextData {
  isLoggedIn: boolean;
  userRole: UserRole;
  signIn: (role: UserRole) => void;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState<UserRole>('member');

  const signIn = (role: UserRole) => {
    setUserRole(role);
    setIsLoggedIn(true);
  };

  const signOut = () => {
    setIsLoggedIn(false);
    setUserRole('member');
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, userRole, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
