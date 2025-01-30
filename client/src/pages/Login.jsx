import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
    const [values, setValues] = useState({
        email: '',
        password: '',
    });

    const navigate = useNavigate();
    axios.defaults.withCredentials = true;  // Çerezlerin (refresh token) gönderilmesi için

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8081/login', values, { withCredentials: true })  // withCredentials'ı burada da ekle
            .then(res => {
                console.log(res.data);
                if (res.data.Status === "Başarılı") { 
                    
                    localStorage.setItem('accessToken', res.data.accessToken);

                    navigate('/');  
                } else {
                    alert(res.data.Error || "Bilinmeyen bir hata oluştu.");
                }
            })
            .catch(err => {
                console.error("Giriş sırasında hata oluştu:", err);
                alert("Giriş sırasında bir hata oluştu. Lütfen tekrar deneyin.");
            });
    };

    return (
        <div className='d-flex justify-content-center align-items-center vh-100 page-container'>
            <div
                className='register-container text-center'
                style={{
                    width: "500px",
                    height: "569px",
                    padding: "20px",
                    border: "1px solid #ccc",
                    borderRadius: "10px"
                }}>
                <Link to="/">
                <img src="src/assets/logo.png" className="mb-4" style={{ maxWidth: "150px" }} alt="Logo" />
                </Link>
                <h2 className='mb-4'>Giriş Yap</h2>
                <form onSubmit={handleSubmit}>
                    <div className='mb-4'>
                        <input
                            type="email"
                            placeholder='E-posta adresi'
                            name='email'
                            onChange={e => setValues({ ...values, email: e.target.value })}
                            className='form-control rounded-0'
                        />
                    </div>
                    <div className='mb-4'>
                        <input
                            type="password"
                            placeholder='Şifre'
                            name='password'
                            onChange={e => setValues({ ...values, password: e.target.value })}
                            className='form-control rounded-0'
                        />
                    </div >
                    <button type='submit' className='btn btn-primary w-100 rounded-0'>
                        E-posta ile giriş yap
                    </button>
                    <div className='text-center' style={{ marginTop: "20px" }}>
                        <span>Henüz hesabın yok mu?</span>
                        <Link to="/Register"> Hesap aç ▶</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
