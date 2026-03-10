import { useState } from 'react';
import './App.css';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
    setError('');
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
    setError('');
  };

  const clickReset = () => {
    setEmail('');
    setPassword('');
    setError('');
  };

  const clickSubmit = () => {
    if (email === '' || password === '') {
      setError('Lütfen e-posta ve parola giriniz');
    } else if (email === 'ornek@xyz.com' && password === '12345') {
      setLoginSuccess(true);
      setError('');
    } else {
      setError('E-posta veya parola hatalı');
    }
  };

  if (loginSuccess) {
    return (
      <div className="login-container">
        <div className="success-card">
          <h2>🎉 Giriş Başarılı!</h2>
          <p>Hoş geldiniz, <strong>{email}</strong></p>
          <button onClick={() => setLoginSuccess(false)}>Çıkış Yap</button>
        </div>
      </div>
    );
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Giriş Yap</h2>
        <div className="input-group">
          <label>E-Posta</label>
          <input 
            type="email" 
            placeholder='E-Posta giriniz' 
            onChange={handleChangeEmail} 
            value={email} 
          />
        </div>
        <div className="input-group">
          <label>Parola</label>
          <input 
            type="password" 
            placeholder='Parola giriniz' 
            onChange={handleChangePassword} 
            value={password} 
          />
        </div>
        
        {error && <div className="error-message">{error}</div>}
        
        <div className="button-group">
          <button className="btn-submit" onClick={clickSubmit}>Giriş Yap</button>
          <button className="btn-reset" onClick={clickReset}>Temizle</button>
        </div>
      </div>
    </div>
  );
}

export default App;