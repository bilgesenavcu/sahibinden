import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../component/Header"; // Header bileşenini ekliyoruz
import "../index.css"; // CSS dosyasını ekliyor
import useAuth from "../useAuth";


const Detail = () => {
  const { id } = useParams(); // URL'den ID'yi alıyoruz
  const [ilan, setIlan] = useState(null); // Başlangıçta null, veri geldikçe güncellenecek
  const [error, setError] = useState(null);
  const { auth, name, handleLogout } = useAuth();

  useEffect(() => {
    const fetchIlan = async () => {
      try {
        const response = await axios.get(`http://localhost:8081/ilan/${id}`);
        console.log("Response Data:", response.data); // API'den gelen veriyi konsola yazdırın
        setIlan(response.data); // İlanı state'e kaydediyoruz
      } catch (err) {
        console.error("API Hatası:", err);
        setError("İlan yüklenirken bir hata oluştu.");
      }
    };

    fetchIlan();
  }, [id]); // id değiştiğinde yeniden fetch işlemi yapılacak

  if (error) {
    return <p>{error}</p>;
  }

  if (!ilan) {
    return <p>İlan yükleniyor...</p>; // İlan verisi gelene kadar "yükleniyor" mesajı
  }

  // Tarih formatlama (T ve Z kaldırılıyor)
  const formattedDate = new Intl.DateTimeFormat("tr-TR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(ilan.created_at));

  const formattedPrice = new Intl.NumberFormat("tr-TR", {
    style: "decimal",
    minimumFractionDigits: 0,
  }).format(ilan.price);

  return (
    <div className="container mt-4">
      <Header auth={auth} name={name} handleLogout={handleLogout} />
      <div className="detail-container">
        <h2 className="detail-description">{ilan.description}</h2>
        <hr className="detail-divider" />
        <div className="detail-content">
          <img className="detail-image" src={ilan.image} alt={ilan.title} />
          <div className="detail-info">
            <p style={{ color: "#039", fontSize: "1.2em", fontWeight: "bold" }}>
              {formattedPrice} ₺
            </p>
            <div className="city-with-line">
              <p
                style={{
                  color: "#039",
                  fontSize: "1.2em",
                  fontWeight: "bold",
                  margin: 0,
                }}
              >
                {ilan.city}
              </p>
              <hr className="city-divider" />
            </div>
            <div className="id-and-date">
              <p style={{ margin: "10px 0" }}>
                <span style={{ fontWeight: "bold", color: "#000" }}>İlan No:</span>{" "}
                <span style={{ color: "#666" }}>{ilan.id}</span>
              </p>
              <hr className="detail-divider" />
              <p style={{ margin: "10px 0" }}>
                <span style={{ fontWeight: "bold", color: "#000" }}>İlan Tarihi:</span>{" "}
                <span style={{ color: "#666" }}>{formattedDate}</span>
              </p>
              <hr className="detail-divider" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

};

export default Detail;
