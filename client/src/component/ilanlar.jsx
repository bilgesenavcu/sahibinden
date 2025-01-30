import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Ilanlar = () => {
  const [ilanlar, setIlanlar] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchIlanlar = async () => {
      try {
        const response = await axios.get("http://localhost:8081/ilanlar");
        console.log(response.data); // Sunucudan gelen veriyi konsola yazdırın
        setIlanlar(response.data);
      } catch (err) {
        console.error("İlanlar yüklenirken hata:", err);
        setError("İlanlar yüklenirken bir hata oluştu.");
      }
    };

    fetchIlanlar();
  }, []);

  return (
    <div>
      <h1 className="vitrin-title">Anasayfa Vitrini</h1>
      {error && <p>{error}</p>}
      <div className="ilanlar-listesi">
        {ilanlar.length === 0 ? (
          <p>İlanlar bulunamadı.</p>
        ) : (
          ilanlar.map((ilan) => (
            <div key={ilan.id} className="ilan-item">
              <Link to={`/ilan/${ilan.id}`}>
                <img src={ilan.image} alt={ilan.title} className="ilan-image" />
              </Link>
              <Link to={`/ilan/${ilan.id}`} className="ilan-title-link">
                {ilan.title}
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Ilanlar;
