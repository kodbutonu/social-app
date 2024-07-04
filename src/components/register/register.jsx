import React, { useState } from 'react';
import './register.css';
import { useNavigate } from 'react-router-dom';
const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [passwordAgain, setPasswordAgain] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate =useNavigate()

    const isEmailValid = (email) => {

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleLogin=()=>{
     navigate("/login");
    }
    const handleRegister = async () => {
        try {
            if (password !== passwordAgain) {
                alert('Passwords do not match');
                return;
            }

            if (!isEmailValid(email)) {
                alert('Invalid email format');
                return;
            }
            const response = await fetch('http://localhost:8000/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password, email, phoneNumber, passwordAgain }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Something went wrong');
            }

            const userData = await response.json();
            console.log('User registered successfully:', userData);


            setTimeout(() => {
                navigate("/login")
            }, 5000);
            setSuccessMessage('Registration successful!');


            setUsername('');
            setEmail('');
            setPhoneNumber('');
            setPassword('');
            setPasswordAgain('');


        } catch (error) {
            console.error('Registration error:', error.message);

            setErrorMessage('Registration failed. Please try again.');
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
                        <span>Kayıt Yap</span>
                        <p>Eğer hesaba sahipseniz</p>
                        <p className='loginText' onClick={()=>handleLogin()}>Giriş yapabilirsin.</p>
                    </div>
                </div>
                <img src="assets/user.png" alt="" className='loginİmg' />
                <div className="loginRight">
                {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
                {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                    <h1>Kayıt Ol</h1>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Kullanıcı Adı"
                        className="textInput"
                    />
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="E-mail"
                        className="textInput"
                    />
                    <input
                        type="text"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder="Telefon Numarası"
                        className="textInput"
                    />
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Şifre"
                        className="textInput"
                    />
                    <input
                        type="password"
                        value={passwordAgain}
                        onChange={(e) => setPasswordAgain(e.target.value)}
                        placeholder="Şifreyi Tekrar Girin"
                        className="textInput"
                    />

                    <div className="buttonText">
                        <div className="button" onClick={handleRegister}>Kayıt Ol</div>
                        <p className='buttonLoginText'>ya da giriş yap</p>
                    </div>

                    <div className="buttons">
                        <img src="/assets/facebook.png" alt="" />
                        <img src="/assets/google.png" alt="" />
                        <img src="/assets/apple.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;