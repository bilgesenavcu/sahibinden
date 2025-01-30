import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../index.css';  // Sidebar için stil dosyasını import ediyoruz

const Sidebar = () => {
  const [emlakCount, setEmlakCount] = useState(0);  // Emlak ilan sayısı
  const [vasitaCount, setVasitaCount] = useState(0);  // Vasıta ilan sayısı
  const [konutCount, setKonutCount] = useState(0);  // Konut ilan sayısı
  const [isyeriCount, setIsyeriCount] = useState(0);  // İş Yeri ilan sayısı
  const [otomobilCount, setOtomobilCount] = useState(0);  // Otomobil ilan sayısı
  const [motorsikletCount, setMotorsikletCount] = useState(0);  // Motosiklet ilan sayısı

  useEffect(() => {
    // Emlak kategorisinin ilan sayısını alıyoruz
    axios.get('http://localhost:8081/emlak')
      .then((response) => {
        setEmlakCount(response.data.length);  // Emlak ilan sayısını kaydediyoruz
      })
      .catch((err) => {
        console.error('Emlak verisi yüklenirken hata:', err);
      });

    // Vasıta kategorisinin ilan sayısını alıyoruz
    axios.get('http://localhost:8081/vasita')
      .then((response) => {
        setVasitaCount(response.data.length);  // Vasıta ilan sayısını kaydediyoruz
      })
      .catch((err) => {
        console.error('Vasıta verisi yüklenirken hata:', err);
      });

    // Konut kategorisinin ilan sayısını alıyoruz
    axios.get('http://localhost:8081/emlak/konut')
      .then((response) => {
        setKonutCount(response.data.length);  // Konut ilan sayısını kaydediyoruz
      })
      .catch((err) => {
        console.error('Konut verisi yüklenirken hata:', err);
      });

    // İş Yeri kategorisinin ilan sayısını alıyoruz
    axios.get('http://localhost:8081/emlak/isyeri')
      .then((response) => {
        setIsyeriCount(response.data.length);  // İş Yeri ilan sayısını kaydediyoruz
      })
      .catch((err) => {
        console.error('İş Yeri verisi yüklenirken hata:', err);
      });

    // Otomobil kategorisinin ilan sayısını alıyoruz
    axios.get('http://localhost:8081/vasita/otomobil')
      .then((response) => {
        setOtomobilCount(response.data.length);  // Otomobil ilan sayısını kaydediyoruz
      })
      .catch((err) => {
        console.error('Otomobil verisi yüklenirken hata:', err);
      });

    // Motosiklet kategorisinin ilan sayısını alıyoruz
    axios.get('http://localhost:8081/vasita/motorsiklet')
      .then((response) => {
        setMotorsikletCount(response.data.length);  // Motosiklet ilan sayısını kaydediyoruz
      })
      .catch((err) => {
        console.error('Motosiklet verisi yüklenirken hata:', err);
      });
  }, []);  // Boş bağımlılık dizisi, sayfa yüklendiğinde sadece bir kez çalıştırılır.

  return (
    <div className="container-fluid mt-4">
      <div className="row">
        <div className="col-3">
          <div className="sidebar">
            {/* Emlak Kategorisi */}
            <div className="category">
              <img src="/ev.png" className="category-icon" alt="Emlak" />
              <Link to="/emlak" className="category-link">
                Emlak ({emlakCount})
              </Link>
            </div>
            <div className="subcategory">
              <Link to="/emlak/konut" className="category-link">
                Konut ({konutCount})
              </Link>
            </div>
            <div className="subcategory">
              <Link to="/emlak/isyeri" className="category-link">
                İş Yeri ({isyeriCount})
              </Link>
            </div>
            <div className="divider" />

            {/* Vasıta Kategorisi */}
            <div className="category">
              <img src="/vasıta.png" className="category-icon" alt="Vasıta" />
              <Link to="/vasita" className="category-link">
                Vasıta ({vasitaCount})
              </Link>
            </div>
            <div className="subcategory">
              <Link to="/vasita/otomobil" className="category-link">
                Otomobil ({otomobilCount})
              </Link>
            </div>
            <div className="subcategory">
              <Link to="/vasita/motorsiklet" className="category-link">
                Motosiklet ({motorsikletCount})
              </Link>
            </div>
          </div>
        </div>

        <div className="col-9"></div>
      </div>
    </div>
  );
};

export default Sidebar;
