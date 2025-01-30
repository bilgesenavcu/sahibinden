import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../index.css';
import axios from "axios";


function Register() {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
    })

    const navigate = useNavigate()
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8081/register', values)
            .then(res => {
                if (res.data.status === "Başarıyla kaydoldunuz") { // Backend'in gönderdiği yanıtın kontrolü
                    navigate('/login'); // Kayıt başarılıysa login sayfasına yönlendir
                } else {
                    alert(res.data.error || "Bilinmeyen bir hata oluştu."); // Hata durumunu kullanıcıya göster
                }
            })
            .catch(err => {
                console.error("Kayıt sırasında hata oluştu:", err);
                alert("Kayıt sırasında bir hata oluştu. Lütfen tekrar deneyin.");
            });
    };

    return (
        <div className='d-flex justify-content-center align-items-center vh-100 page-container'>

            <div
                className='register-container text-center'
                style={{ width: "500px", height: "569px", padding: "20px", border: "1px solid #ccc", borderRadius: "10px" }}>
                <Link to="/">
                    <img src="src/assets/logo.png" className="mb-4" style={{ maxWidth: "150px" }} alt="Logo" />
                </Link>
                <h2 className='mb-4'>Hesap Aç</h2>
                <form onSubmit={handleSubmit}>
                    <div className='mb-4'>
                        <input type="text" placeholder='Kullanıcı adı' name='name'
                            onChange={e => setValues({ ...values, name: e.target.value })} className='form-control rounded-0' />
                    </div>
                    <div className='mb-4'>
                        <input type="email" placeholder='E-posta adresi' name='email'
                            onChange={e => setValues({ ...values, email: e.target.value })} className='form-control rounded-0' />
                    </div>
                    <div className='mb-4'>
                        <input type="password" placeholder='Şifre' name='password'
                            onChange={e => setValues({ ...values, password: e.target.value })} className='form-control rounded-0' />
                    </div>
                    <button type='submit' className='btn btn-primary w-100 rounded-0'>Kaydol</button>
                    <div className='text-center' style={{ marginTop: "20px" }}>
                        <span>Zaten Hesabın Var Mı?</span>
                        <Link to="/Login"> Giriş yap ▶</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;
