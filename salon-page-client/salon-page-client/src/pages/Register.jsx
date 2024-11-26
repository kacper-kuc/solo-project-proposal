import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();

        setErrors({});

        let formErrors = {};
        if (email.trim() === '') formErrors.email = 'Email is required.';
        if (password.trim() === '') formErrors.password = 'Password is required.';
        if (password !== confirmPassword) formErrors.confirmPassword = 'Passwords must match.';
        
        if (Object.keys(formErrors).length > 0) {
        setErrors(formErrors);
        return;
        }

        try {
        await axios.post('http://localhost:8000/api/register', { email, password });
        navigate('/login');
        } catch (err) {
        setErrors({ general: 'Registration failed. Try again.' });
        }
    };

    return (
        <div>
            <div className='nav'>
                <h1>Register</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <div>
                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && <p>{errors.email}</p>}
                </div>
                <div>
                <label>Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {errors.password && <p>{errors.password}</p>}
                </div>
                <div>
                <label>Confirm Password:</label>
                <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
                </div>
                {errors.general && <p>{errors.general}</p>}
                <button type="submit">Create Account</button>
            </form>
        </div>
    );
};

export default Register;