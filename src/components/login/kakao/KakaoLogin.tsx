import React from 'react';
import kakaoLoginButtonImage from '../../../images/kakaoLoginButtonImage.png'; // 이미지 파일 import
import '../../../styles/KakaoLoginButton.css';

const KakaoLogin: React.FC = () => {
    const KAKAO_LOGIN_REST_API_KEY = process.env.REACT_APP_KAKAO_LOGIN_REST_API_KEY;
    const KAKAO_LOGIN_REDIRECT_URI = process.env.REACT_APP_KAKAO_LOGIN_REDIRECT_URI;
    // oauth 요청 URL
    const KAKAO_LOGIN_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_LOGIN_REST_API_KEY}&redirect_uri=${KAKAO_LOGIN_REDIRECT_URI}&response_type=code`;
    
    const handleKakaoLogin = () => {
        window.location.href = KAKAO_LOGIN_URL;
    };

    return (
        <button className="kakao-login-button" onClick={handleKakaoLogin} style={{ border: 'none', background: 'none', padding: 0 }}>
            <img src={kakaoLoginButtonImage} alt="카카오 로그인" />
        </button>
    );
};

export default KakaoLogin;