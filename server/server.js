import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';
import bcryptjs from 'bcryptjs';
import cookieParser from 'cookie-parser';
import jwt from 'jsonwebtoken'; // jwt modülünü ekleyin

const salt = 10;

const app = express();
app.use(express.json());

// CORS ayarları
const corsOptions = {
  origin: "http://localhost:5173", // Frontend adresi
  methods: ["POST", "GET"],
  credentials: true, // Çerezlerin gönderimine izin ver
};
app.use(cors(corsOptions));
app.use(cookieParser());

// Veritabanı bağlantısı
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "12345678",
});

db.connect((err) => {
  if (err) {
    console.error("Veritabanı bağlantısı hatası:", err.message);
    return;
  }
  console.log("Veritabanına bağlanıldı.");
});




const verifyUser = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Bearer prefix'ini çıkar

  if (!token) return res.status(401).json({ Status: "Unauthorized", Error: "Token eksik" });

  jwt.verify(token, "jwt-access-secret", (err, decoded) => {
    if (err) return res.status(403).json({ Status: "Unauthorized", Error: "Token süresi dolmuş" });
    req.name = decoded.name;
    next();
  });
};


app.get('/', verifyUser, (req, res) => {
  res.json({ Status: "Success", name: req.name });
});

app.get('/ilanlar', (req, res) => {
  const sql = 'SELECT * FROM ilan ';
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Veritabanı hatası:', err.message);
      return res.status(500).json({ error: 'Veritabanı hatası' });
    }
    res.json(results);  // İlanları döndür
  });
});

app.get('/ilan/:id', (req, res) => {
  const { id } = req.params;
  const sql = "SELECT * FROM ilan WHERE id = ?";
  db.query(sql, [id], (err, result) => {
    if (err) {
      return res.status(500).json({ error: "Veritabanı hatası" });
    }
    if (result.length === 0) {
      return res.status(404).json({ error: "İlan bulunamadı" });
    }
    res.json(result[0]);
  });
});


// /emlak route'unu tanımlıyoruz
app.get('/emlak', (req, res) => {
  const sql = "SELECT * FROM ilan WHERE category IN ('Konut', 'İş yeri')";
  
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Veritabanı hatası:', err.message);
      return res.status(500).json({ error: 'Veritabanı hatası' });
    }
    res.json(results);  // Veritabanı sonuçlarını JSON formatında döndürüyoruz
  });
});

app.get('/emlak/konut', (req, res) => {
  const sql = "SELECT * FROM ilan WHERE category = 'Konut'";  // Sadece 'Konut' kategorisindeki ilanlar
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Veritabanı hatası:', err.message);
      return res.status(500).json({ error: 'Veritabanı hatası' });
    }
    res.json(results);  // Konut kategorisindeki ilanları döndür
  });
});


// İş yeri kategorisindeki ilanları döndürür
app.get('/emlak/isyeri', (req, res) => {
  const sql = "SELECT image, title FROM ilan WHERE category = 'İş yeri'";

  db.query(sql, (err, results) => {
    if (err) {
      console.error('Veritabanı hatası:', err.message);
      return res.status(500).json({ error: 'Veritabanı hatası' });
    }
    res.json(results); // Sonuçları JSON formatında döndür
  });
});


app.get('/vasita', (req, res) => {
  const sql = "SELECT * FROM ilan WHERE category IN ('Otomobil', 'Motosiklet')";
  
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Veritabanı hatası:', err.message);
      return res.status(500).json({ error: 'Veritabanı hatası' });
    }
    res.json(results);  // Veritabanı sonuçlarını JSON formatında döndürüyoruz
  });
});

app.get('/vasita/otomobil', (req, res) => {
  const sql = "SELECT * FROM ilan WHERE category = 'Otomobil'";  // Sadece 'Konut' kategorisindeki ilanlar
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Veritabanı hatası:', err.message);
      return res.status(500).json({ error: 'Veritabanı hatası' });
    }
    res.json(results);  // Konut kategorisindeki ilanları döndür
  });
});

app.get('/vasita/motorsiklet', (req, res) => {
  const sql = "SELECT * FROM ilan WHERE category = 'Motosiklet'";  // Sadece 'Konut' kategorisindeki ilanlar
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Veritabanı hatası:', err.message);
      return res.status(500).json({ error: 'Veritabanı hatası' });
    }
    res.json(results);  // Konut kategorisindeki ilanları döndür
  });
});


app.post("/search", (req, res) => {
  const query = req.body.query;
  const isNumeric = !isNaN(query); // Query'nin sayı olup olmadığını kontrol et

  let sql;
  if (isNumeric) {
    // Sayı ise ID'ye göre arama yap
    sql = "SELECT * FROM ilan WHERE id = ?";
  } else {
    // Metin ise title, description, category ve city kolonlarına bak
    sql =
      "SELECT * FROM ilan WHERE title LIKE ? OR description LIKE ? OR category LIKE ? OR city LIKE ?";
  }

  const values = isNumeric
    ? [query]
    : [`%${query}%`, `%${query}%`, `%${query}%`, `%${query}%`];

  db.query(sql, values, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Bir hata oluştu" });
    } else {
      res.json(results);
    }
  });
});


app.post('/token', (req, res) => {
  const refreshToken = req.cookies.refreshToken; // Refresh token'ı cookie'den al
  if (!refreshToken) return res.status(403).json({ Error: "Refresh token eksik" });

  jwt.verify(refreshToken, "jwt-refresh-secret", (err, user) => {
    if (err) {
      console.error('Token doğrulama hatası:', err); // Hata loglama
      return res.status(403).json({ Error: "Geçersiz refresh token" });
    }

    const accessToken = jwt.sign({ name: user.name }, "jwt-access-secret", { expiresIn: '15m' });

    return res.json({ accessToken });
  });
});

app.post('/logout', (req, res) => {
  res.clearCookie("refreshToken"); // Refresh token çerezini temizle
  return res.json({ Status: "Başarılı", Message: "Çıkış yapıldı" });
});

db.connect((err) => {
  if (err) {
    console.error('Veritabanı bağlantısı hatası:', err.message);
    return;
  }
  console.log('Veritabanına bağlanıldı.');

  db.query('CREATE DATABASE IF NOT EXISTS signup', (err, result) => {
    if (err) {
      console.error('Veritabanı oluşturulamadı:', err.message);
      return;
    }
    console.log('Veritabanı oluşturuldu veya zaten var.');

    db.query('USE signup', (err, result) => {
      if (err) {
        console.error('Veritabanı seçilemedi:', err.message);
        return;
      }
      console.log('Veritabanı seçildi.');

      const createTableQuery = `
        CREATE TABLE IF NOT EXISTS login (
          id INT AUTO_INCREMENT PRIMARY KEY,
          name VARCHAR(255) NOT NULL,
          email VARCHAR(255) NOT NULL UNIQUE,
          password VARCHAR(255) NOT NULL
        )
      `;
      db.query(createTableQuery, (err, result) => {
        if (err) {
          console.error('Tablo oluşturulamadı:', err.message);
          return;
        }
        console.log('Tablo oluşturuldu veya zaten var.');
      });
    });
  });
});

app.post('/register', (req, res) => {
  const { name, email, password } = req.body;

  bcryptjs.hash(password, salt, (err, hashedPassword) => {
    if (err) {
      console.error("Şifre hash'leme hatası:", err);
      return res.status(500).json({ error: "Şifre hash'leme hatası" });
    }

    const sql = "INSERT INTO login (name, email, password) VALUES (?)";
    const values = [name, email, hashedPassword];

    db.query(sql, [values], (err, result) => {
      if (err) {
        console.error('Veritabanına veri eklenemedi:', err.message);
        return res.status(500).json({ error: "Veritabanına veri ekleme hatası" });
      }

      res.status(200).json({ status: "Başarıyla kaydoldunuz" });
    });
  });
});

// Backend - /login route'u
app.post('/login', (req, res) => {
  const sql = 'SELECT * FROM login WHERE email=?';
  db.query(sql, [req.body.email], (err, data) => {
    if (err) return res.status(500).json({ Error: "Veritabanı hatası" });
    if (data.length > 0) {
      bcryptjs.compare(req.body.password.toString(), data[0].password, (err, response) => {
        if (err) return res.status(500).json({ Error: "Şifre karşılaştırma hatası" });
        if (response) {
          const name = data[0].name;

          // Access token (kısa süreli)
          const accessToken = jwt.sign({ name }, "jwt-access-secret", { expiresIn: '15m' });

          // Refresh token (uzun süreli)
          const refreshToken = jwt.sign({ name }, "jwt-refresh-secret", { expiresIn: '7d' });

          // Refresh token'ı bir çerez olarak sakla
          res.cookie("refreshToken", refreshToken, { httpOnly: true });

          // Access token'ı JSON ile gönder
          res.json({ Status: "Başarılı", accessToken });
        } else {
          return res.status(401).json({ Error: "Şifre eşleşmedi" });
        }
      });
    } else {
      return res.status(404).json({ Error: "E-posta bulunamadı" });
    }
  });
});



app.listen(8081, () => {
  console.log("Server is running on http://localhost:8081");
});
