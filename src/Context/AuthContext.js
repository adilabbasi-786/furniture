import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

function Auth(props) {
  const [token, setToken] = useState(localStorage.getItem("token"));
  return (
    <AuthContext.Provider value={{ token: token, setToken: setToken }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default Auth;
