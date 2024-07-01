import React, { useState } from 'react';
import './login.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = async() => {

        try {
            if (!username || !password) {
                setErrorMessage("Kullanıcı adı veya parola boş bırakılamaz.")
            }
            const response= await fetch('http://localhost:8000/api/auth/login',{
                method:"POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password}),
            });
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Something went wrong');
            }
            const userData = await response.json();
            console.log('User login successfully:', userData);
            
            setUsername('');
            setPassword('');
            
            setSuccessMessage('Login successful!');
        } catch (error) {
            console.error('Login error:', error.message);

            setErrorMessage('Login failed. Please try again.');
        }
    }
    return (
        <div className="login">
            <div className="logoWrapper">

                <img src="assets/logo.png" alt="" className='logoImage' />
                <h1 className='header'>CATCUT</h1>
            </div>

            <div className="loginWrapper">
                <div className="loginLeft">
                    <div className="loginTextWrapper">
                        <span>Giriş Yap</span>
                        <p>Eğer hesaba sahip değilsen</p>
                        <p className='loginText'>Kayıt olabilirsin.</p>
                    </div>

                </div>
                <img src="assets/user.png" alt="" className='loginİmg' />
                <div className="loginRight">
                    <h1>Giriş Yap</h1>
                    {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
                    {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Adınızı girin"
                        className="textInput"
                    />
                    <input
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Şifrenizi girin"
                        className="textInput"
                    />
                    <p className="passwordText">Şifremi unuttum.</p>
                    <div className="buttonText">
                        <div className="button" onClick={() => handleLogin()}>Giriş Yap</div>
                        <p>ya da devam et</p>
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

export default Login;
