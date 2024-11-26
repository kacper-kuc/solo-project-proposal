import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:8000/api/login', { email, password })
        .then((response) => {
        console.log('Login successful:', response.data);
        localStorage.setItem('userToken', response.data.token);
        navigate('/staff');
        })
        .catch((err) => {
        console.log(err);
        setErrorMessage('Invalid login credentials');
    });
};

    return (
        <div>
            <div className='nav'>
                <h1>Login</h1>
            </div>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                <label>Email:</label>
                <input 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                />
                </div>
                <div>
                <label>Password:</label>
                <input 
                    type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;