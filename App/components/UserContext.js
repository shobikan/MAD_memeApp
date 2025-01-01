import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const register = (username, password) => {
    setUser({ username, password });
  };

  const login = (username, password) => {
    if (user && user.username === username && user.password === password) {
      return true;
    }
    return false;
  };

  return (
    <UserContext.Provider value={{ user, register, login }}>
      {children}
    </UserContext.Provider>
  );
};