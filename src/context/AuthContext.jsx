import { createContext, useMemo, useState } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  /*
   * Temporary authentication state.
   *
   * This will later be replaced with:
   * - JWT Authentication
   * - Refresh Token
   * - Backend API
   * - Persistent Login
   */

  const [user, setUser] = useState(null);

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  const value = useMemo(
    () => ({
      user,
      isAuthenticated: Boolean(user),
      login,
      logout,
    }),
    [user]
  );

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;