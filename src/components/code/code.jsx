import React, { useState } from 'react';
import './code.css';
import { useNavigate } from 'react-router-dom';
import { ArrowBack } from "@material-ui/icons";

const Code = () => {
    const [email, setEmail] = useState('');
    const [resetCode, setResetCode] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [showResetForm, setShowResetForm] = useState(false);
    const navigate = useNavigate();

    const handleBack = () => {
        navigate("/login");
    };

    const handleSendResetCode = async () => {
        try {
            const response = await fetch('http://localhost:8000/api/auth/reset-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Şifre sıfırlama isteği başarısız oldu.');
            }

            setSuccessMessage('Şifre sıfırlama bağlantısı e-postanıza gönderildi.');
            setShowResetForm(true); // Show the form to enter reset code and new password
        } catch (error) {
            setErrorMessage(error.message);
            console.error('Şifre sıfırlama hatası:', error);
        }
    };

    const handleConfirmReset = async () => {
        try {
            const response = await fetch('http://localhost:8000/api/auth/reset-password-confirm', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, resetCode, newPassword }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Şifre yenileme işlemi başarısız oldu.');
            }

            setSuccessMessage('Şifre başarıyla yenilendi.');
            setShowResetForm(false); // Hide the reset form after successful password update
        } catch (error) {
            setErrorMessage(error.message);
            console.error('Şifre yenileme hatası:', error);
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
                    <div className="backButton" onClick={handleBack}>
                        <ArrowBack />
                    </div>
                    <div className="loginTextWrapper">
                        <span>Şifremi Unuttum.</span>
                        <p>Şifreyi unuttuysan güncelleyebilirsin.</p>
                    </div>
                    {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
                    {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                    {!showResetForm ? (
                        <>
                            <input
                                type="text"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Kodu girin."
                                className="textInput"
                            />
                            <div className="buttonText">
                                <div className="button" onClick={handleSendResetCode}>Gönder</div>
                            </div>
                        </>
                    ) : (
                        <>
                            <input
                                type="text"
                                value={resetCode}
                                onChange={(e) => setResetCode(e.target.value)}
                                placeholder="Reset Kodunu Girin"
                                className="textInput"
                            />
                            <input
                                type="password"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                placeholder="Yeni Şifrenizi Girin"
                                className="textInput"
                            />
                            <div className="buttonText">
                                <div className="button" onClick={handleConfirmReset}>Şifreyi Yenile</div>
                            </div>
                        </>
                    )}
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

export default Code;
