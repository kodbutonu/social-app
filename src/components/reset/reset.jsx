import React, { useState } from 'react';
import './reset.css';
import { useNavigate } from 'react-router-dom';
const Reset = () => {
    const [email, setEmail] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const navigate = useNavigate()

    const handleBack = () => {
        navigate("/login")
    }
    const handleSend = async () => {
        try {
            const response = await fetch('http://localhost:8000/api/auth/reset-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Şifre sıfırlama işlemi başarısız oldu.');
            }

            setSuccessMessage('Şifre sıfırlama bağlantısı e-postanıza gönderildi.');
        } catch (error) {
            setErrorMessage(error.message);
            console.error('Şifre sıfırlama hatası:', error);
        }
    };

    return (
        <div className="login">
            <div className="logoWrapper">

                <img src="assets/logo.png" alt="" className='logoImage' />
                <h1 className='header'>CATCUT</h1>
            </div>

            <div className="loginWrapper">
                <div className="loginLeft">
                    <div className="loginTextWrapper">
                        <span>Şifremi Unuttum.</span>
                        <p>Şifreyi unuttuysan güncelleyebilirsin.</p>
                    </div>
                    {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
                    {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email adresinizi girin"
                        className="textInput"
                    />
                    <div className="buttonText">
                        <div className="button" onClick={() => handleSend()}>Gönder</div>

                    </div>

                    <div className="buttons">

                        <img src="/assets/facebook.png" alt="" />
                        <img src="/assets/google.png" alt="" />
                        <img src="/assets/apple.png" alt="" />
                    </div>
                </div>
                <div className="loginRight">
                    <img src="assets/code.png" alt="" className='loginİmg' />
                </div>
            </div>
        </div>
    );
}

export default Reset;
