import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

function Auth(props) {
  const [token, setToken] = useState(localStorage.getItem("token"));
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);
  const logout = () => {
    setToken(null);
    localStorage.removeItem("token");
  };
  return (
    <AuthContext.Provider value={{ token: token, setToken: setToken, logout }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default Auth;
