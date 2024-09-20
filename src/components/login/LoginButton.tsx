import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/LoginButton.css';

const LoginButton: React.FC = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/login');
    };

    return (
        <button className="login-button" onClick={handleClick}>Login</button>
    );
};

export default LoginButton;