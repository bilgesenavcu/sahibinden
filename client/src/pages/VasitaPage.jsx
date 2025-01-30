import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';  // Link import ediyoruz
import Header from "../component/Header";  // Header bileşenini ekliyoruz
import useAuth from '../useAuth';

const VasitaPage = () => {
  const [ilanlar, setIlanlar] = useState([]);
  const [error, setError] = useState('');
  const { auth, name, handleLogout } = useAuth();

  useEffect(() => {
    // Emlak verisini çekmek için API'yi çağırıyoruz
    axios.get('http://localhost:8081/vasita')
      .then((response) => {
        setIlanlar(response.data);  // Alınan ilanları state'e kaydediyoruz
      })
      .catch((err) => {
        setError('Emlak verisi yüklenirken bir hata oluştu.');
        console.error('Emlak verisi yüklenirken hata:', err);
      });
  }, []);

  return (
    <div className="emlak-page">
        <Header auth={auth} name={name} handleLogout={handleLogout} />
      <h1 className="vitrin-heading">Vasıta Vitrin</h1>
      {error && <p className="error-message">{error}</p>}
      <div className="property-list">
        {ilanlar.length === 0 ? (
          <p className="no-properties-message">İlanlar bulunamadı.</p>
        ) : (
          ilanlar.map((ilan) => (
            <div key={ilan.id} className="property-item">
              <Link to={`/ilan/${ilan.id}`} className="property-link">
                <img src={ilan.image} alt={ilan.title} className="property-image" />
              </Link>
              <Link to={`/ilan/${ilan.id}`} className="property-title">
                {ilan.title}
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default VasitaPage;