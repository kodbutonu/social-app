import React, { useState } from 'react';
import './register.css'; 

const Register = () => {
    const [username, setUsername] = useState(''); 
    const [password, setPassword] = useState(''); 

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
                        <p className='loginText'>Giriş yapabilirsin.</p>
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
                        type="text"
                        value={username} // username state'ini value olarak kullanıyoruz
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="E-mail girin"
                        className="textInput"
                    />
                    <input
                        type="text"
                        value={username} // username state'ini value olarak kullanıyoruz
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Telefon numaranızı girin"
                        className="textInput"
                    />
                    <input
                        type="password" // password tipi input
                        value={password} // password state'ini value olarak kullanıyoruz
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Şifrenizi girin"
                        className="textInput"
                    />
                      <input
                        type="password" // password tipi input
                        value={password} // password state'ini value olarak kullanıyoruz
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Şifrenizi girin"
                        className="textInput"
                    />
                    
                    <div className="buttonText">
                        <div className="button">Giriş Yap</div>
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
