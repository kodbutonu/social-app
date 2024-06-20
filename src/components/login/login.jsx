import React, { useState } from 'react'; // useState hook'unu import ediyoruz
import './login.css'; // CSS dosyasını import ediyoruz

const Login = () => {
    const [username, setUsername] = useState(''); // username state'i ve setUsername fonksiyonu
    const [password, setPassword] = useState(''); // password state'i ve setPassword fonksiyonu

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
                    <input
                        type="text"
                        value={username} // username state'ini value olarak kullanıyoruz
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Adınızı girin"
                        className="textInput"
                    />
                    <input
                        type="password" // password tipi input
                        value={password} // password state'ini value olarak kullanıyoruz
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Şifrenizi girin"
                        className="textInput"
                    />
                    <p className="passwordText">Şifremi unuttum.</p>
                    <div className="buttonText">
                        <div className="button">Giriş Yap</div>
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
