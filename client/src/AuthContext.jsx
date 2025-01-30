import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(false);
  const [name, setName] = useState("");

  useEffect(() => {
    const checkAuth = async () => {
      const accessToken = localStorage.getItem("accessToken");
      if (!accessToken) {
        setAuth(false);
        return;
      }

      try {
        const res = await axios.get("/", {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        if (res.data.Status === "Success") {
          setAuth(true);
          setName(res.data.name);
        } else {
          setAuth(false);
        }
      } catch (err) {
        console.error("Yetkilendirme hatası:", err);
        setAuth(false);
      }
    };

    checkAuth();
  }, []);

  

  return (
    <AuthContext.Provider value={{ auth, name, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};
