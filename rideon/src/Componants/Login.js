import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../Componants/Login.css'


function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const BASE_URL="https://rideon-b204.onrender.com";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    const url = isLogin
      ? `${BASE_URL}/api/login/`
      : `${BASE_URL}/api/register/`;

    const body = isLogin
      ? { email, password }
      : { full_name: fullName, email, phone, password, password2: confirmPassword };

    if (!isLogin && password !== confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const data = await response.json();

      if (response.ok) {
        if(isLogin){
            localStorage.setItem('access_token',data.access);
            localStorage.setItem('refresh_token',data.refresh);
            localStorage.setItem('user',JSON.stringify(data.user));
            navigate('/');
        }else{
          const registeredUser ={
            fullName:fullName,
            email,
            phone,
          };
          localStorage.setItem('user',JSON.stringify(registeredUser));
          setMessage('Registered successfully. Please login.')
          setIsLogin(true)
        }
         } else {
        setMessage(JSON.stringify(data));
      }
    } catch (err) {
      setMessage("Something went wrong");
    }
  };

  return (
    <div className="login-main">
      <div className="login-container">
        <h2>{isLogin ? "Login" : "Register"}</h2>
        
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <>
              <input
                type="text"
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
                
              />
              <input
                type="text"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                
              />
            </>
          )}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            
          />
          {!isLogin && (
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              
            />
          )}
          {message && <p style={{ color: "red" }}>{message}</p>}
          <button type="submit" id="login">
            {isLogin ? "Login" : "Register"}
          </button>
        </form>
        <div className="register-container">
          <p style={{ marginTop: "10px" }}>
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button id="register"
            onClick={() => setIsLogin(!isLogin) }
          
          >
            {isLogin ? "Register" : "Login"}
          </button>
        </p>
        </div>
        
      </div>
    </div>
    
  );
}

export default Auth;
