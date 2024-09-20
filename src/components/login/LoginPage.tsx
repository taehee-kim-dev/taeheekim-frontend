import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/LoginPage.css';
import KakaoLogin from './kakao/KakaoLogin';

const LoginPage: React.FC = () => {
    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate('/');
    };

    return (
        <div className="login-page">
            <h1>Login Page</h1>
            <KakaoLogin />
            <button className="go-home-button" onClick={handleGoHome}>Go to Home</button>
        </div>
    );
};

export default LoginPage;