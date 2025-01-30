import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const useAuth = () => {
    const [auth, setAuth] = useState(false);
    const [name, setName] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        // Check if the user is authenticated
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

    return { auth, name, handleLogout };
};

export default useAuth;
