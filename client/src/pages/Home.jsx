import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../component/Header"; // Header component'ini import edin
import Ilanlar from "../component/ilanlar";
import Sidebar from '../component/Sidebar';


function Home() {
  const [auth, setAuth] = useState(false);
  const [name, setName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      const accessToken = localStorage.getItem("accessToken"); 
      if (!accessToken) {
        setAuth(false);
        console.log("Access token bulunamadı.");
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

  const handleLogout = async () => {
    try {
      await axios.post("/logout");
      localStorage.removeItem("accessToken");
      setAuth(false);
      navigate("/login");
    } catch (err) {
      console.error("Çıkış sırasında hata oluştu:", err);
    }
  };

  return (                                    
    <div className="container mt-4">
      <Header auth={auth} name={name} handleLogout={handleLogout} />
      <Ilanlar />
      <div>
        <Sidebar/>
      </div>
    </div>
  );
}

export default Home;
